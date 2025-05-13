<template>
	<div
		class="overlay"
		:class="{ 'overlay--active': active }"
		@click="handleClick"
	>
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	active: {
		type: String,
		default: '',
	},
});

const emits = defineEmits(['click'])

function handleClick() {
	emits('click');
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.overlay {
	transition: all 0.15s ease-in-out;
	position: relative;
	border: 1px solid $n-0;
	border-radius: $border-radius-small;

	&:hover {
		border: 1px solid $n-0;
		border-radius: $border-radius-small;
		background: radial-gradient(
				ellipse at center,
				rgba(255, 255, 255, 0.7) 20%,
				rgba(255, 255, 255, 0.5) 100%
			);
		transition: all 0.15s ease-in-out;
	}

	&--active {
		@extend .overlay;
		animation: animatedBorder 4s ease infinite;
	}
}

@keyframes animatedBorder {
	0% {
		outline: 1px solid $bn-100;
	}
	50% {
		outline: 1px solid $bn-200;
	}
	100% {
		outline: 1px solid $bn-100;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.15s ease-in-out;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
