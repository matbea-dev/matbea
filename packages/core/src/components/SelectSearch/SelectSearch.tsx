import React from "react";
import cn from "classnames";
import Select, {
  SingleValue,
} from "react-select";
import { FormInputText } from "../Text";
import "./select-search.scss"

type SelectSearchProps = {
  label?: string;
  options: { value: string; label: React.ReactNode }[] | any;
  defaultValue?: React.ReactNode | any;
  placeholder?: string;
  noti?: string;
  onChange?: (
    e: { value: string; label: React.ReactNode } | SingleValue<any>
  ) => void;
  disabled?: boolean;
  error?: boolean;
  value?: any;
  instanceId?: any;
  isSearchable?: boolean;
};

export const SelectSearch: React.FC<SelectSearchProps> = ({
  label,
  options,
  defaultValue,
  placeholder,
  noti,
  onChange,
  disabled,
  error,
  isSearchable = false,
  ...props
}) => (
  <div
    className={cn("select-search", {
      "select-search--error": error,
    })}
  >
    {label && (
      <div className="select-search__label">
        <FormInputText>{label}</FormInputText>
      </div>
    )}

    <Select
      className="select-search__body"
      options={options}
      defaultValue={defaultValue}
      classNamePrefix="select-search"
      placeholder={placeholder}
      onChange={onChange}
      isDisabled={disabled}
      isSearchable={isSearchable}
      {...props}
    />

    {error && (
      <div className="select-search__error">
        <FormInputText tag="span">{noti}</FormInputText>
      </div>
    )}
  </div>
);
