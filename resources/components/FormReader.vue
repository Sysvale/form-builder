<template>
	<div class="form-reader">
		<Form class="form-container">
			<template v-for="(formField, index) in model" :key="index">
				<Field
					v-if="isValidComponent(formField.component)"
					v-slot="{ field, errors, meta }"
					:name="formField.props.label"
					:rules="computedRules(formField)"
					:validate-on-update-model="false"
					:validate-on-change="false"
				>
					<component
						:is="formField.component"
						v-bind="{...field, ...formField.props}"
						v-model="model[index].modelValue"
						fluid
						no-margin
						class="form__field"
						:state="resolveInputState(meta)"
						:error-message="errors[0]"
					>
						<template v-if="formField.component === 'CdsText'">
							{{ formField.props.content }}
						</template>
					</component>
				</Field>

				<component
					v-else
					:is="formField.component"
					v-bind="formField.props"
					fluid
					no-margin
					class="form__field"
				>
					<template v-if="formField.component === 'CdsText'">
						{{ formField.props.content }}
					</template>
				</component>
			</template>
		</Form>
	</div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';

const model = defineModel('modelValue');

function isValidComponent(componentName) {
	const validTypes = ['Input', 'Group', 'Select', 'Area'];
	return validTypes.some(type => componentName.includes(type));
};

function computedRules(field) {
	if (!field.rules || !Array.isArray(field.rules)) {
		return '';
	}
	
	return field.rules.join('|');
}

function resolveInputState({ validated, valid }, successFeedback = true) {
	if (!validated) {
		return 'default';
	}

	if (successFeedback) {
		return valid ? 'valid' : 'invalid';
	}

	return valid ? 'default' : 'invalid';
}

function formValues() {
	return model.value.map(field => ({
		name: field.name,
		value: field.modelValue,
	}));
}

defineExpose({
	formValues,
})
</script>

<style lang="scss" scoped>
@import '../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.form-reader {
	padding: pa(5);
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.form-container {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.form__field {
	margin: my(2);
}
</style>
