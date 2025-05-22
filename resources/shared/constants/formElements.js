//Componentes disponíveis para Drag and drop
export const formElements = {
	page: [
		{
			label: 'Título',
			subtitle: 'Cabeçalho para o formulário',
			category: 'Página',
			component: 'CdsText',
			icon: 'heading-1-outline',
			props: {
				as: 'h3',
				noMargin: true,
				content: 'Título de exemplo',
			},
		},
		{
			label: 'Subtítulo',
			subtitle: 'Cabeçalho para seções ou detalhamento de títulos',
			category: 'Página',
			component: 'CdsText',
			icon: 'heading-2-outline',
			props: {
				as: 'h6',
				noMargin: true,
				content: 'Subtítulo de exemplo',
			},
		},
		{
			label: 'Parágrafo',
			subtitle: 'Elemento usado para textos',
			category: 'Página',
			component: 'CdsText',
			icon: 'paragraph-outline',
			props: {
				as: 'p',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
		},
		{
			label: 'Linha Divisória',
			subtitle: 'Separador visual entre seções.',
			category: 'Página',
			component: 'CdsDivider',
			icon: 'divider-outline',
			props: {},
		},
		{
			label: 'Card de aviso',
			subtitle: 'Elemento para alertas ou avisos',
			category: 'Página',
			component: 'CdsAlertCard',
			icon: 'info-outline',
			props: {
				title: 'Aviso',
				subtitle: 'Separação visual entre seções.',
				variant: 'info',
				withIcon: true,
			},
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
		},
	],
};
