import { localize } from "@vee-validate/i18n";
import {
	required,
	email,
	min,
	max,
	min_value,
	max_value,
	integer,
	regex,
	alpha_num,
	alpha_spaces,
	alpha_dash,
	alpha,
} from "@vee-validate/rules";
import pt_BR_validation from "./pt_BR_validation";

export default (VeeValidate) => {
	VeeValidate.configure({
		generateMessage: localize("pt-BR", {
			messages: pt_BR_validation,
		}),
	});

	VeeValidate.defineRule("required", required);
	VeeValidate.defineRule("not_empty", (value) => {
		if (!value || value.id == null) {
			return "O campo não pode ser vazio";
		}
		return true;
	});

	VeeValidate.defineRule("email", email);
	VeeValidate.defineRule("min", min);
	VeeValidate.defineRule("max", max);
	VeeValidate.defineRule("integer", integer);
	VeeValidate.defineRule("regex", regex);
	VeeValidate.defineRule("min_value", min_value);
	VeeValidate.defineRule("max_value", max_value);
	VeeValidate.defineRule("alpha_num", alpha_num);
	VeeValidate.defineRule("alpha_spaces", alpha_spaces);
	VeeValidate.defineRule("alpha_dash", alpha_dash);
	// VeeValidate.defineRule('alpha_num_spaces', alpha_num_spaces);
	VeeValidate.defineRule("alpha", alpha);
};
