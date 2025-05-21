<template>
	<div class="lists-container">
		<CdsFlexbox direction="column" class="left-container">
			<div v-for="(list, index) in elementList" :key="index">
				<CdsText as="h5" no-margin>{{ list[0].category }}</CdsText>

				<VueDraggable
					v-model="elementList[index]"
					:animation="150"
					ghostClass="ghost"
					:group="{ name: 'people', pull: 'clone', put: false }"
					:clone="cloneElement"
					:sort="false"
					class="draggable-elements"
				>
					<div v-for="item in list" :key="item.id">
						<FormElement
							:icon="item.icon"
							:title="item.label"
							:description="item.subtitle"
						/>
					</div>
				</VueDraggable>
			</div>
		</CdsFlexbox>

		<div class="center-container">
			<SegmentedControl
				v-model="activeCanvasSegment"
				:segments="canvasSegments"
				:withIcon="false"
				fluid
				@click="handleSegmentClick"
			/>

			<div v-if="activeCanvasSegment.value === 'builder'">
				<VueDraggable
					v-model="selectedElements"
					:animation="150"
					group="people"
					ghostClass="ghost"
					class="drop-area"
				>
					<CdsEmptyState
						v-if="!selectedElements.length"
						image="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
						image-description="Imagem de empty state"
						title="Nenhum elemento adicionado ainda"
						text="Arraste elementos da lista à esquerda e solte-os aqui"
						hide-action-button
					/>

					<div
						v-for="(item, index) in selectedElements"
						:key="item.id"
						class="floatingContainer"
						@mouseenter="hoveredElement = item.id"
						@mouseleave="hoveredElement = null"
					>
						<Transition>
							<FloatingMenu
								v-if="hoveredElement === item.id"
								:hide-settings="Object.keys(item.props).length === 0"
								@config="handleSideSheet(item)"
								@delete="handleDelete(item)"
								@clone="duplicateElement(index)"
							/>
						</Transition>

						<FeatureBlockingOverlay
							@delete="handleDelete(item)"
							:active="item.id === selectedElement?.id"
						>
							<component
								:is="item.component"
								v-bind="item.props"
								v-model="item.modelValue"
								fluid
								class="inp"
							>
								<template v-if="item.component === 'CdsText'">
									{{ item.props.content }}
								</template>
							</component>
						</FeatureBlockingOverlay>
					</div>
				</VueDraggable>
			</div>

			<div v-else>
				<FormReader v-model="selectedElements"/>
			</div>
		</div>

		<div class="right-container">
			<SegmentedControl
				v-model="activeSegment"
				:segments="sideSheetSegments"
				:withIcon="false"
				fluid
				@click="handleSegmentClick"
			/>

			<div v-if="activeSegment.value === 'json'">
				<CdsFlexbox
					justify="end"
					class="clipboard-button__container"
				>
					<CdsIconButton
						size="sm"
						icon="copy-outline"
						tooltipText="Copiar JSON"
						@click="copyJsonToClipboard"
					/>
				</CdsFlexbox>

				<pre class="code-block">
					<code class="language-json" v-html="formattedJson"></code>
				</pre>
			</div>

			<div v-if="activeSegment.value === 'code'">
				<CdsFlexbox
					justify="end"
					class="clipboard-button__container"
				>
					<CdsIconButton
						size="sm"
						icon="copy-outline"
						tooltipText="Copiar Código"
						@click="copyCodeToClipboard"
					/>
				</CdsFlexbox>

				<pre class="code-block">
					<code class="language-html" v-html="parseJSONToVue"></code>
				</pre>
			</div>

			<div
				v-if="activeSegment.value === 'props' && selectedElement"
				class="props-fields"
			>
				<CdsText as="h5" no-margin>
					Campo {{ selectedElement.label }}
				</CdsText>

				<CdsFlexbox direction="column" gap="4">
					<CdsSpacer margin-bottom="3">
						<CdsDivider text="Propriedades" />
					</CdsSpacer>

					<CdsFlexbox direction="column" gap="20px">
						<div v-for="field in settingsPropsForm" :key="field.prop">
							<component
								:is="field.editor"
								:label="field.label"
								v-model="selectedElement.props[field.prop]"
								fluid
								ref="inputRefs2"
							/>
						</div>
					</CdsFlexbox>
				</CdsFlexbox>

				<template v-if="selectedElement?.component !== 'CdsText'">
					<CdsFlexbox direction="column" gap="4">
						<CdsSpacer margin-bottom="3">
							<CdsDivider text="Validação" />
						</CdsSpacer>

						<CdsFlexbox direction="column" gap="20px">
							<div v-for="field in settingValidationForm" :key="field.prop">
								<component
									v-if="field.prop === 'required'"
									v-bind="field"
									:is="field.editor"
									:label="field.label"
									v-model="selectedElement.props[field.prop]"
									@update:model-value="handleRulesUpdate(field, $event)"
									fluid
									ref="inputRefs2"
								/>

								<component
									v-else
									v-bind="field"
									:is="field.editor"
									:label="field.label"
									v-model="field.modelValue"
									@update:model-value="handleRulesUpdate(field, $event)"
									fluid
									ref="inputRefs2"
								/>
							</div>
						</CdsFlexbox>
					</CdsFlexbox>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	ref,
	onMounted,
	nextTick,
	watch,
	watchEffect,
	computed,
	inject,
} from "vue";
import { VueDraggable } from "vue-draggable-plus";
import { inputTypes } from "../shared/constants/inputs";
import { propTypes } from "../shared/constants/propTypes";
import { componentProps } from "../shared/constants/componentProps";
import { validationTypes } from "../shared/constants/validationTypes";
import FloatingMenu from "./FloatingMenu.vue";
import FormElement from "./FormElement.vue";
import SegmentedControl from "./SegmentedControl.vue";
import FormReader from "./FormReader.vue";
import FeatureBlockingOverlay from "./FeatureBlockingOverlay.vue";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-light.css";
import { useChangeCase } from '@vueuse/integrations/useChangeCase'

import html from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
hljs.registerLanguage("html", html);
hljs.registerLanguage("json", json);

const CdsUtils = inject("cdsUtils");

hljs.configure({
	useBR: false,
	tabReplace: " ",
});

const props = defineProps({
	hideCodeTab: {
		type: Boolean,
		default: false,
	},
	hideJSONTab: {
		type: Boolean,
		default: false,
	},
});

const elementList = ref(inputTypes);
const selectedElements = ref([]);
const activeSegment = ref({});
const activeCanvasSegment = ref({
	label: "Builder",
	value: "builder",
});
const hoveredElement = ref(null);
const selectedElement = ref(null);
const vueCode = ref("");
const settingsPropsForm = ref(null);
const settingValidationForm = ref(null);
const propsToEdit = ref(null);
const validationFieldsToEdit = ref(null);
const canvasSegments = ref([
	{
		label: "Builder",
		value: "builder",
	},
	{
		label: "Preview",
		value: "preview",
		disabled: true,
	},
]);

const sideSheetSegments = ref([]);

function cloneElement(element) {
	return {
		id: CdsUtils.uuidv4(),
		name: `${useChangeCase(element.label, 'pascalCase').value}-${selectedElements.value.length + 1}`,
		label: element.label,
		component: element.component,
		props: JSON.parse(JSON.stringify(element.props)),
		rules: [],
		content: element.content,
	};
}

function handleSideSheet(item) {
	selectedElement.value = item;

	const componentConfig = componentProps[item.component];
	propsToEdit.value = componentConfig.props;
	validationFieldsToEdit.value = componentConfig.validation;

	activeSegment.value = {
		label: "Props",
		value: "props",
	};

	settingsPropsForm.value = propsToEdit.value.map((prop) => ({
		prop,
		...propTypes[prop],
	}));

	settingValidationForm.value = validationFieldsToEdit.value.map((prop) => ({
		prop,
		...validationTypes[prop],
	}));
}

function handleDelete(item) {
	selectedElements.value = selectedElements.value.filter(
		(el) => el.id !== item.id
	);

	if (selectedElement.value?.id === item.id) {
		selectedElement.value = null;
	}
}

function handleSegmentClick() {}

function handleRulesUpdate(field, value) {
	if (!selectedElement.value) return;

	const ruleIndex = selectedElement.value.rules.findIndex((rule) =>
		rule.includes(field.prop)
	);

	const isSimpleRule =
		field.prop.includes("alpha") || field.prop.includes("required");
	const rule = isSimpleRule
		? `${value?.label || field.prop}`
		: `${field.prop}:${value}`;

	if (ruleIndex === -1) {
		selectedElement.value.rules.push(rule);
	} else {
		selectedElement.value.rules[ruleIndex] = rule;
	}
}

function duplicateElement(index) {
	const element = selectedElements.value[index];
	const clonedElement = {
		...JSON.parse(JSON.stringify(element)),
		id: CdsUtils.uuidv4(),
	};

	selectedElements.value.splice(index + 1, 0, clonedElement);
}

function copyJsonToClipboard() {
	const jsonString = JSON.stringify(selectedElements.value, null, 2);
	navigator.clipboard.writeText(jsonString);
}

function copyCodeToClipboard() {
	navigator.clipboard.writeText(vueCode.value);
}

const formattedJson = computed(() => {
	return hljs.highlight(JSON.stringify(selectedElements.value, null, 2), {
		language: "json",
	}).value;
});

const parseJSONToVue = computed(() => {
	let code = `<Form\n\tref="form"\n>`;

	code += selectedElements.value
		.map((item) => {
			let field = "";
			let component = "";
			let endField = "";

			const isFormInput =
				item.component.includes("Input") ||
				item.component.includes("Group") ||
				item.component.includes("Select") ||
				item.component.includes("Area");

			if (isFormInput) {
				const rules = item.rules.join("|");

				field = `\n\t<Field
\t\tv-slot="{
\t\t\tfield,
\t\t\terrors
\t\t}"
\t\tname="clientes"
\t\trules="${rules}"
\t>`;

				component = `\n\t\t<${item.component}`;
				component += Object.entries(item.props)
					.map(([key, value]) => {
						const prefix = typeof value === "boolean" ? ":" : "";
						return `\n\t\t\t${prefix}${key}="${value}"`;
					})
					.join("");
				component += `\n\t\t/>`;

				endField = `\n\t</Field>`;
			} else {
				component = `\n\t<${item.component}`;
				component += Object.entries(item.props)
					.map(([key, value]) => `\n\t\t${key}="${value}"`)
					.join("");
				component += `\n\t/>`;
			}

			return item.rules.length ? field + component + endField : component;
		})
		.join("\n");

	code += `\n</Form>`;
	vueCode.value = code;
	return hljs.highlight(code, { language: "html" }).value;
});

watch(selectedElements, (newVal) => {
	canvasSegments.value.forEach((segment) => {
		if (segment.value === "preview") {
			segment.disabled = newVal.length > 0 ? false : true;
		}
	});
});

watch(selectedElement, (newVal) => {
	sideSheetSegments.value.forEach((segment) => {
		if (segment.value === "props") {
			segment.disabled = newVal !== null ? false : true;
		}
	});
});

watchEffect(() => {
	if (
		activeSegment.value.value === "code" ||
		activeSegment.value.value === "json"
	) {
		nextTick(highlightAllCodeBlocks);
	}
});

onMounted(() => {
	highlightAllCodeBlocks;
	let allSideSheetSegments = [
		{
			label: "JSON",
			value: "json",
		},
		{
			label: "Code",
			value: "code",
		},
		{
			label: "Props",
			value: "props",
			disabled: true,
		},
	];

	sideSheetSegments.value = allSideSheetSegments.filter((segment) => {
		if (segment.value === "code") {
			return !props.hideCodeTab;
		} else if (segment.value === "json") {
			return !props.hideJSONTab;
		}

		return true;
	});

	activeSegment.value = sideSheetSegments.value[0];
});

function highlightAllCodeBlocks() {
	nextTick(() => {
		document.querySelectorAll("pre code").forEach((block) => {
			hljs.highlightElement(block);
		});
	});
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss";

.clipboard-button__container {
	margin: mt(4);
	top: 112px;
	right: 32px;
}

.code-block {
	margin: mt(n12);
}

.props-fields {
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: mt(8);
}

.lists-container {
	display: flex;
	width: 100%;
	height: 100vh;
	padding: pTRBL(4, 0, 4, 0);
	gap: 150px;
	justify-content: space-between;
	background-image: radial-gradient($n-100 6%, $n-10 6%);
	background-position: 0 0;
	background-size: 22px 22px;
}

.left-container {
	width: 20%;
	min-width: 280px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 12px;
	padding: pa(4);
	border-radius: $border-radius-small;
	background-color: $n-0;
	overflow-y: scroll;
	max-height: 100vh;
	border: 1px solid $n-30;
}

.center-container {
	width: 60%;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: pYX(3, 12);
	z-index: 90;
	border-radius: $border-radius-small;
	max-height: 100vh;
	overflow-y: scroll;
}

.drop-area {
	min-height: 350px;
	outline: 2px dashed $bn-200;
	border-radius: $border-radius-small;
	margin: mt(5);
	display: flex;
	flex-direction: column;
	gap: 2px;
	background-color: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(1px);
	-webkit-backdrop-filter: blur(1px);
}

.right-container {
	min-width: 400px;
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: pYX(3, 8);
	background-color: $n-0;
	border-radius: $border-radius-small;
	z-index: 90;
	max-height: 100vh;
	overflow-y: scroll;
	border: 1px solid $n-30;
}

.draggable-elements {
	cursor: grab;
	border-radius: $border-radius-button;
	padding: py(3);
	display: flex;
	flex-direction: column;
}

@keyframes border-reflect {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: 0 0;
	}
}

.inp {
	margin: mTRBL(4, 4, 4, 4);
	padding: pa(1);
	z-index: -1;
	position: relative;
}

.floatingContainer {
	position: relative;
	z-index: 1;
}

.v-enter-active {
	transition: all 0.3s ease-in-out;
}

.v-leave-active {
	transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
	transform: translateY(8px);
	opacity: 0;
}
</style>
