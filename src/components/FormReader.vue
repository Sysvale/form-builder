<template>
	<div class="form-reader">
		<Form class="form-container">
			<template v-for="(formField, index) in form" :key="index">
				<Field
					v-if="isValidatableComponent(formField.component)"
					v-slot="{ field, errors, meta }"
					:name="formField.name || `field-${index}`"
					:rules="computedRules(formField)"
					:validate-on-update-model="false"
					:validate-on-change="false"
				>
					<component
						:is="formField.component"
						v-bind="{...field, ...formField.props}"
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

const props = defineProps({
	form: {
		type: Array,
		required: true
	}
});

function isValidatableComponent(componentName) {
	const validatableTypes = ['Input', 'Group', 'Select', 'Area'];
	return validatableTypes.some(type => componentName.includes(type));
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
