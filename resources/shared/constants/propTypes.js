// Componentes que devem ser renderizados para manipulação das props dos componentes de drag and drop
export const propTypes = {
	label: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: '',
		label: 'Título do campo',
		description: 'Texto exibido acima do campo'
	},
	placeholder: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: 'Digite algo...',
		label: 'Texto de exemplo',
		description: 'Texto exibido quando o campo está vazio'
	},
	content: {
		type: 'string',
		editor: 'CdsTextArea',
		defaultValue: 'Digite algo...',
		label: 'Descrição do campo',
		description: 'Texto exibido quando o campo está vazio'
	},
	text: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: 'Digite algo...',
		label: 'Descrição do campo',
		description: 'Texto exibido quando o campo está vazio'
	},
	options: {
		type: 'string',
		editor: 'CdsDynamicInputList',
		defaultValue: 'Digite algo...',
		label: 'Descrição do campo',
		description: 'Texto exibido quando o campo está vazio',
		options: [
			{
				label: 'Opção 1',
				value: 'opcao1'
			},
			{
				label: 'Opção 2',
				value: 'opcao2'
			},
			{
				label: 'Opção 3',
				value: 'opcao3'
			},
		],
	},
	variant: {
		type: 'enum',
		editor: 'CdsSelect',
		options: ['info', 'success', 'warning', 'error'],
		defaultValue: 'info',
		label: 'Variante',
		description: 'Estilo visual do componente'
	},
	minLength: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 0,
		min: 0,
		label: 'Comprimento mínimo',
		description: 'Número mínimo de caracteres'
	},
	maxLength: {
		type: 'number',
		editor: 'CdsNumberInput',
		defaultValue: 100,
		min: 1,
		label: 'Comprimento máximo',
		description: 'Número máximo de caracteres'
	},
	minDate: {
		type: 'date',
		editor: 'CdsDateInput',
		defaultValue: null,
		label: 'Data mínima',
		description: 'Data mais antiga permitida'
	},
	maxDate: {
		type: 'date',
		editor: 'CdsDateInput',
		defaultValue: null,
		label: 'Data máxima',
		description: 'Data mais antiga permitida'
	},
	mask: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: '',
		label: 'Máscara',
		description: 'Formato para entrada (# = dígito)',
		showWhen: (props) => props.inputType === 'tel'
	}
};
