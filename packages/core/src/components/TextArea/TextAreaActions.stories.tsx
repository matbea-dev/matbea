import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaActions } from "../TextArea";

const meta = {
	title: "Kit/TextArea/TextAreaActions",
	component: TextAreaActions,
	tags: ["autodocs"],
	argTypes: {
		name: {
			description: "Имя(ID) поля в DOM",
			table: {
				disable: true,
			},
		},
		label: {
			description: "Лейбл к полю ввода",
			table: {
				category: "Текстовые поля",
			},
		},
		value: {
			description: "Определяет значение элемента формы",
			table: {
				disable: true,
			},
		},
		cols: {
			description: "Ширина поля в символах",
			table: {
				category: "Настройки размера текстового поля",
			},
		},
		rows: {
			description: "Высота поля в строках текста",
			table: {
				category: "Настройки размера текстового поля",
			},
		},
		placeholder: {
			description: "Подсказка внутри поля",
			table: {
				category: "Текстовые поля",
			},
		},
		onChange: {
			description: "Действие при изменении текстового поля",
			table: {
				disable: true,
			},
		},
		inputMode: {
			description: "Атрибут inputmode говорит браузеру на устройствах с экранной клавиатурой какой набор символов показать при вводе данных в конкретное поле.",
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
		error: {
			description: "Состояние ошибки поля",
			table: {
				category: "Типы состояний",
			},
		},
	},
} satisfies Meta<typeof TextAreaActions>;

export default meta;
type Story = StoryObj<typeof TextAreaActions>;

export const Default: Story = {
	args: {
		label: "Лейбл",
		cols: 5,
		rows: 5,
		placeholder: "Введите текст",
		name: "TextAreaActionsTest",
	},
};
