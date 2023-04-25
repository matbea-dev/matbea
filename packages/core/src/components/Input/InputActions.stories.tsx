import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputActions } from "../Input";

const meta = {
	title: "Kit/Input/InputActions",
	component: InputActions,
	tags: ["autodocs"],
	argTypes: {
		name: {
			description: "Имя(ID) поля в DOM",
			table: {
				category: "Текстовые поля",
			},
		},
		value: {
			description: "Значение в inpute",
			table: {
				category: "Другие настройки",
			},
		},
		type: {
			description: "Тип поля (и тег для поля в DOM)",
			table: {
				category: "Другие настройки",
			},
		},
		placeholder: {
			description: "Подсказка внутри поля",
			table: {
				category: "Текстовые поля",
			},
		},
		label: {
			description: "Лейбл к полю ввода",
			table: {
				category: "Текстовые поля",
			},
		},
		disabled: {
			description: "Делает поле неактивным",
			table: {
				category: "Типы состояний",
			},
		},
		error: {
			description: "Вывод ошибки - ошибка",
			table: {
				category: "Типы состояний",
			},
		},
		maxLength: {
			description: "Максимальный набор текста",
			table: {
				category: "Другие настройки",
			},
		},
		icon: {
			description: "Поле под иконку",
			table: {
				category: "Графика",
			},
		},
		onChange: {
			description: "Действие при изменении текстового поля",
			table: {
				category: "События",
			},
		},
		onBlur: {
			description: "Событие вызывается при пропадании фокуса с элемента",
			table: {
				category: "События",
			},
		},
		format: {
			description: "Это параметр библиотеки для форматирования ввода input",
			table: {
				category: "Другие настройки",
			},
		},
		required: {
			description: "Устанавливает поле формы обязательным для заполнения перед отправкой формы на сервер",
			table: {
				category: "Другие настройки",
			},
		},
		autoComplete: {
			description: "Атрибут помогает заполнять поля форм текстом, который был введён в них ранее",
			table: {
				category: "Другие настройки",
			},
		},
		inputMode: {
			description: "Атрибут inputmode говорит браузеру на устройствах с экранной клавиатурой какой набор символов показать при вводе данных в конкретное поле.",
			table: {
				category: "Другие настройки",
			},
		},
		variant: {
			description: "Вариант инпута",
			table: {
				category: "Типы вариантов инпута",
			},
		},
	},
} satisfies Meta<typeof InputActions>;

export default meta;
type Story = StoryObj<typeof InputActions>;

export const Default: Story = {
	args: {
		name: "InputTest",
		placeholder: "Input Test",
		disabled: false,
		required: false,
		type: "text",
		maxLength: 200,
		autoComplete: "off",
	},
};

export const Value: Story = {
	args: {
		name: "InputTest",
		placeholder: "Input Test",
		disabled: false,
		required: false,
		type: "text",
		maxLength: 200,
		autoComplete: "off",
		value: "значение",
	},
};

export const Format: Story = {
	args: {
		name: "InputTest",
		placeholder: "Input Test",
		disabled: false,
		required: false,
		type: "text",
		maxLength: 200,
		autoComplete: "off",
		value: "1200300",
		format: "# ### ###",
	},
};

export const Disabled: Story = {
	args: {
		name: "InputTest",
		placeholder: "Input Test",
		disabled: true,
		required: false,
		type: "text",
		maxLength: 200,
		autoComplete: "off",
	},
};

export const Error: Story = {
	args: {
		name: "InputTest",
		placeholder: "Input Test",
		disabled: false,
		required: false,
		error: "Error message",
		type: "text",
		maxLength: 200,
		autoComplete: "off",
	},
};

// export const InputIconLeft = Template.bind({});

// InputIconLeft.args = {
//   name: "InputTest",
//   placeholder: "Input Test",
//   disabled: false,
//   required: false,
//   error: "text",
//   maxLength: 200,
//   icon: {
//     left: <IconEyeopen className="icon icon--home icon--size-base" />,
//   },
//   autoComplete: "off",
// };

// export const InputIconRight = Template.bind({});

// InputIconRight.args = {
//   name: "InputTest",
//   placeholder: "Input Test",
//   disabled: false,
//   required: false,
//   type: "text",
//   maxLength: 200,
//   icon: {
//     right: <IconEyeopen className="icon icon--home icon--size-base" />,
//   },
//   autoComplete: "off",
// };

// export const InputLabelIconLeft = Template.bind({});

// InputLabelIconLeft.args = {
//   name: "InputTest",
//   placeholder: "Input Test",
//   disabled: false,
//   required: false,
//   type: "text",
//   maxLength: 200,
//   icon: {
//     left: <IconEyeopen className="icon icon--home icon--size-base" />,
//   },
//   label: {
//     left: "Label",
//   },
//   autoComplete: "off",
// };

// export const InputLabelsIconRight = Template.bind({});

// InputLabelsIconRight.args = {
//   name: "InputTest",
//   placeholder: "Input Test",
//   disabled: false,
//   required: false,
//   type: "password",
//   value: "password",
//   label: {
//     left: "Label",
//     right: <FormInputText>Forgot your password ?</FormInputText>,
//   },
//   maxLength: 200,
//   icon: {
//     right: <IconEyeopen className="icon icon--home icon--size-base" />,
//   },
//   autoComplete: "off",
// };
