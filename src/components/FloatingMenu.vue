<template>
	<CdsFlexbox
		direction="column"
		class="floating-menu"
		gap="1"
	>
		<CdsIcon
			height="20"
			width="20"
			name="settings-outline"
			class="floating-menu__icon"
			@click="emits('config')"
		/>

		<CdsIcon
			height="20"
			width="20"
			name="copy-outline"
			class="floating-menu__icon"
			@click="emits('clone')"
		/>

		<CdsIcon
			height="20"
			width="20"
			name="trash-outline"
			class="floating-menu__icon--red"
			@click="emits('delete')"
		/>
	</CdsFlexbox>
</template>

<script setup>
const emits = defineEmits(['config', 'clone', 'delete']);
</script>

<style lang="scss" scoped>
@import '../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.floating-menu {
	background-color: $n-0;
	box-shadow: $shadow-md;
	width: fit-content;
	border-radius: $border-radius-large;
	padding: pa(1);
	border: 1px solid $n-30;
	position: absolute;
	right: -32px;
	top: 16px;
	z-index: 999;

	&__icon {
		cursor: pointer;
		padding: pa(1);
		color: $n-700;
		border-radius: $border-radius-lil;

		&--red {
			cursor: pointer;
			padding: pa(1);
			color: $rc-400;
			border-radius: $border-radius-lil;
		}
		
		&:hover,
		&--red:hover {
			background-color: $n-30;
		}
	}
}

</style>
