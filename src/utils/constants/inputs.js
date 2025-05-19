//Componentes disponíveis para Drag and drop
export const inputTypes = {
	page: [
		{
			label: 'Título',
			subtitle: 'Cabeçalho para o formulário',
			category: 'Página',
			component: 'CdsText',
			icon: 'heading-1-outline',
			props: {
				modelValue: null,
				as: 'h3',
				noMargin: true,
				content: 'Título de exemplo',
			},
			validation: {},
		},
		{
			label: 'Subtítulo',
			subtitle: 'Cabeçalho para seções ou detalhamento de títulos',
			category: 'Página',
			component: 'CdsText',
			icon: 'heading-2-outline',
			props: {
				modelValue: null,
				as: 'h6',
				noMargin: true,
				content: 'Subtítulo de exemplo',
			},
			validation: {},
		},
		{
			label: 'Parágrafo',
			subtitle: 'Elemento usado para textos',
			category: 'Página',
			component: 'CdsText',
			icon: 'paragraph-outline',
			props: {
				modelValue: null,
				as: 'p',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
			validation: {},
		},
		{
			label: 'Linha Divisória',
			subtitle: 'Separador visual entre seções.',
			category: 'Página',
			component: 'CdsDivider',
			icon: 'divider-outline',
			props: {
				modelValue: null,
			},
			validation: {},
		},
		{
			label: 'Card de aviso',
			subtitle: 'Elemento para alertas ou avisos',
			category: 'Página',
			component: 'CdsAlertCard',
			icon: 'info-outline',
			props: {
				modelValue: null,
				title: 'Aviso',
				subtitle: 'Separação visual entre seções.',
				variant: 'info',
				withIcon: true,
			},
			validation: {},
		},
	],
	content: [
		{
			label: 'Resposta curta',
			subtitle: 'Campo de texto curto',
			component: 'CdsTextInput',
			category: 'Conteúdo',
			icon: 'short-text-outline',
			props: {
				modelValue: null,
				inputType: 'text',
				lazy: false,
				label: 'Texto curto',
				placeholder: 'Digite algo...',
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 100,
			},
		},
		{
			label: 'Resposta longa',
			subtitle: 'Campo de texto multilinha.',
			type: 'text-area',
			component: 'CdsTextArea',
			icon: 'long-text-outline',
			category: 'Conteúdo',
			props: {
				modelValue: null,
				label: 'Texto longo',
				placeholder: 'Digite algo...',
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 500,
			},
		},
		{
			label: 'Número',
			subtitle: 'Campo que permite apenas números',
			type: 'number-input',
			component: 'CdsNumberInput',
			icon: 'number-outline',
			category: 'Conteúdo',
			props: {
				modelValue: null,
				label: 'Valor',
				placeholder: 'Digite algo...',
				money: false,
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 500,
			},
		},
		{
			label: 'Telefone',
			subtitle: 'Campo para números de telefone.',
			type: 'number-input',
			component: 'CdsNumberInput',
			icon: 'phone-outline',
			category: 'Conteúdo',
			props: {
				modelValue: null,
				inputType: 'tel',
				lazy: false,
				label: 'Telefone',
				placeholder: '(__) _____-____',
				mask: '(##) #####-####',
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 500,
			},
		},
		{
			label: 'Email',
			subtitle: 'Campo de e-mail.',
			type: 'CdsTextInput',
			component: 'CdsTextInput',
			icon: 'at-outline',
			category: 'Conteúdo',
			props: {
				modelValue: null,
				inputType: 'email',
				lazy: false,
				label: 'Email',
				placeholder: 'Ex.: mail@exemplo.com',
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 500,
			},
		},
		{
			label: 'Data',
			subtitle: 'Campo de data',
			type: 'date-input',
			component: 'CdsDateInput',
			icon: 'calendar-outline',
			category: 'Conteúdo',
			props: {
				modelValue: null,
				label: 'Data',
				variant: 'blue',
				range: false,
				showTodayDot: true,
				highlightToday: true,
				placeholder: 'Insira uma data...',
				errorMessage: 'Campo obrigatório',
				minDate: '2025-01-10',
				maxDate: '2025-03-20',
			},
			validation: {
				required: false,
				minLength: 0,
				maxLength: 500,
			},
		},
	],
	choice: [
		{
			label: 'Escolha',
			subtitle: 'Campo de escolha única',
			type: 'radio-button-group',
			icon: 'single-select-outline',
			category: 'Escolha',
			component: 'CdsRadioButtonGroup',
			props: {
				modelValue: null,
				label: 'Selecione uma das opções',
				allowsExpand: true,
				options: [
					{
						"text": "Opção 1",
   						"value": "opcao1"
					},
					{
						"text": "Opção 2",
   						"value": "opcao2"
					},
					{
						"text": "Opção 3",
   						"value": "opcao3"
					},
				],
				variant: 'blue',
			},
			validation: {
				required: false,
				minOptions: 1,
				maxOptions: 1,
			},
		},
		{
			label: 'Múltipla escolha',
			subtitle: 'Campo de múltipla escolha',
			type: 'multiselect',
			component: 'CdsCheckboxGroup',
			icon: 'checkbox-checked-outlined',
			category: 'Escolha',
			props: {
				modelValue: null,
				label: 'Selecione uma ou mais opções',
				options: [
					{
						"label": "Opção 1",
   						"value": "opcao1"
					},
					{
						"label": "Opção 2",
   						"value": "opcao20"
					},
					{
						"label": "Opção 3",
   						"value": "opcao3"
					},
				],
				variant: 'blue',
			},
			validation: {
				required: false,
				minOptions: 1,
				maxOptions: 1,
			},
		},
	],
};

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
	alpha_num: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: '',
		label: 'alpha_num',
		description: 'Texto exibido acima do campo'
	},
	alpha_spaces: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: '',
		label: 'alpha_spaces',
		description: 'Texto exibido acima do campo'
	},
	alpha_dash: {
		type: 'string',
		editor: 'CdsTextInput',
		defaultValue: '',
		label: 'alpha_dash',
		description: 'Texto exibido acima do campo'
	},
};

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
