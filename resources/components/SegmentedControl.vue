<template>
	<div class="segment-control">
		<button
			v-for="(segment, index) in segments"
			:key="index"
			class="segment-control__button"
			:class="{
				'segment-control__button--active':
					segment.value === activeSegment.value,
				'segment-control__button--inactive':
					segment.value !== activeSegment.value,
				'segment-control__button--disabled': segment.disabled,
			}"
			@click="handleClick(segment, index)"
		>
			<CdsTooltip v-if="withIcon" :text="segmentsTooltipText[index]">
				<CdsIcon height="20" width="20" :name="segment.icon" />
			</CdsTooltip>

			<span v-else>{{ segment.label }}</span>
		</button>
	</div>
</template>
<script setup>
import { ref, computed, watch } from "vue";

const model = defineModel("modelValue");

const props = defineProps({
	segments: {
		type: Array,
		default: () => [],
	},
	withIcon: {
		type: Boolean,
		default: false,
	},
	segmentsTooltipText: {
		type: Array,
		default: () => [],
	},
	fluid: {
		type: Boolean,
		default: false,
	},
});

const emits = defineEmits(["click"]);

const activeSegment = ref([]);

const computedWidth = computed(() => {
	return props.fluid ? "100%" : "fit-content";
});

const computedButtonWidth = computed(() => {
	return props.fluid ? `${100 / props.segments.length}%` : "auto";
});

const computedButtonMaxWidth = computed(() => {
	return props.fluid ? "none" : "200px";
});

watch(
	model,
	(newValue) => {
		activeSegment.value = newValue;
	},
	{ immediate: true }
);

function handleClick(segment, index) {
	if (segment.disabled) return;
	activeSegment.value = segment;
	model.value = segment;
	emits("click", this.activeSegment, index);
}
</script>

<style lang="scss">
@import "../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss";
.segment-control {
	background-color: $n-20;
	outline: 1px solid $n-40;
	display: flex;
	width: v-bind(computedWidth);
	justify-content: space-between;
	padding: pa(1);
	border-radius: $border-radius-extra-small;

	&__button {
		width: v-bind(computedButtonWidth);
		max-width: v-bind(computedButtonMaxWidth);
		border-radius: $border-radius-extra-small;
		border: none;
		background-color: transparent;
		font-size: 14px;
		cursor: pointer;
		transition: $opening;
		padding: pYX(2, 3);

		&--active {
			font-weight: $font-weight-semibold;
			background-color: $n-0;
			color: $n-700;
			transition: $opening;
			box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.04);
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		&--inactive {
			@extend .segment-control__button--active;
			background-color: transparent;
			box-shadow: none;
			color: $n-600;
		}

		&--disabled {
			@extend .segment-control__button--active;
			background-color: transparent;
			box-shadow: none;
			color: $n-200;
			cursor: not-allowed;
		}
	}
}
</style>
