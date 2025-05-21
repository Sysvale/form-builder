// Componentes que devem ser renderizados para manipulação das validações dos componentes de drag and drop
export const validationTypes = {
	required: {
		type: 'boolean',
		editor: 'CdsSwitch',
		defaultValue: false,
		label: 'Campo obrigatório',
		description: 'Define se o campo precisa ser preenchido'
	},
	max: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 0,
		min: 0,
		label: 'max',
		description: 'Número mínimo de caracteres'
	},
	min: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 0,
		min: 0,
		label: 'min',
		description: 'Número mínimo de caracteres'
	},
	max_value: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 0,
		min: 0,
		label: 'max_value',
		description: 'Número mínimo de caracteres'
	},
	min_value: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 0,
		min: 0,
		label: 'min_value',
		description: 'Número mínimo de caracteres'
	},
	alpha: {
		type: 'string',
		editor: 'CdsSelect',
		modelValue: null,
		options: [
			{
				label: 'alpha',
				value: 'Campo aceita apenas letras',
			},
			{
				label: 'alpha_num',
				value: 'Campo aceita apenas letras e números',
			},
			{
				label: 'alpha_spaces',
				value: 'Campo aceita apenas letras e espaços',
			},
			{
				label: 'alpha_num_spaces',
				value: 'Campo aceita letras, números e espaços',
			},
			{
				label: 'alpha_dash',
				value: 'Campo aceita letras, números e traços',
			},
		],
		defaultValue: 'false',
		label: 'Tipo de validação',
		description: 'Texto exibido acima do campo'
	},
};
