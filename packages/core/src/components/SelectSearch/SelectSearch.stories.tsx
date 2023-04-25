import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectSearch } from "./SelectSearch";

const meta =  {
  title: "Kit/SelectSearch",
  component: SelectSearch,
  argTypes: {
    label: {
      description: "Лейбл селекта",
      table: {
        category: "Текстовые поля",
      },
    },
    options: {
      description:
        "Элемент <option> используется для определения пункта списка контейнера <select>",
    },
    defaultValue: {
      description: "Значение по умолчанию, которое выводится в поле <select>",
    },
    placeholder: {
      description: "Подсказка внутри поля <select>",
      table: {
        category: "Текстовые поля",
      },
    },
    noti: {
      description: "Уведомление, которое появляется только при ошибке",
      table: {
        category: "Текстовые поля",
      },
    },
    onChange: {
      description: "Уведомление",
      table: {
        disable: true,
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
  },
} satisfies Meta<typeof SelectSearch>;

export default meta;
type Story = StoryObj<typeof SelectSearch>;

const optionDropDown = [
	{
		value: "Пункт 1",
		label: "Пункт 1",
	},
	{
		value: "Пункт 2",
		label: "Пункт 2",
	},
	{
		value: "Пункт 3",
		label: "Пункт 3",
	},
	{
		value: "Пункт 4",
		label: "Пункт 4",
	},
	{
		value: "Пункт 5",
		label: "Пункт 5",
	},
];

export const Default: Story = {
	args: {
		label: "Название",
		placeholder: "Селект",
		options: optionDropDown,
		disabled: false,
		error: false,
	},
};
