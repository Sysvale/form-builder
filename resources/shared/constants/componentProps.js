export const componentProps = {
	'CdsTextInput': {
		props: [
			'label',
			'placeholder',
			'required',
		],
		validation: [
			'required',
			'alpha',
			'max',
			'min',
		],
	},
	'CdsNumberInput': {
		props: [
			'label',
			'placeholder',
			'required',
		],
		validation: [
			'required',
			'max_value',
			'min_value',
		],
	},
	'CdsTextArea': {
		props: [
			'label',
			'placeholder',
			'required',
		],
		validation: [
			'required',
			'max',
			'min',
		],
	},
	'CdsDateInput': {
		props: [
			'label',
			'range',
			'minDate',
			'maxDate',
			'required',
		],
		validation: [
			'required',
		],
	},
	'CdsSelect': {
		props: [
			'label',
			'placeholder',
			'options',
			'required',
		],
		validation: [
			'required',
		],
	},
	'CdsText': {
		props: [
			'content',
		],
		validation: [],
	},
	'CdsAlertCard': {
		props: [
			'text',
		],
		validation: [],
	},
	'CdsRadioButtonGroup': {
		props: [
			'options',
		],
		validation: [
			'required',
		],
	},
	'CdsCheckboxGroup': {
		props: [
			'options',
		],
		validation: [
			'required',
		],
	},
};
