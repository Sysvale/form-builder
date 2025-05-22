<template>
	<div class="form-element">
		<div class="form-element__icon-container">
			<CdsIcon
				height="24"
				width="24"
				:name="icon"
				class="form-element__icon"
			/>
		</div>

		<div class="form-element__content">
			<p class="form-element__title">{{ title }}</p>
			<p class="form-element__description">{{ description }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
@import '../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.form-element {
	display: flex;
	gap: 12px;
	align-items: center;
	padding: py(3);

	&:hover {
		cursor: grab;
		background-color: $n-10;
		border-radius: $border-radius-extra-small;
	}

	&__icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $n-30;
		padding: pa(3);
		border-radius: $border-radius-extra-small;
	}

	&__icon {
		color: $n-700;
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	&__title {
		font-size: 16px;
		font-weight: 600;
		color: $n-800;
		margin: 0px;
	}

	&__description {
		font-size: 13.5px;
		color: $n-700;
		margin: 0px;
	}
}
</style>
