import * as React from "react";
import { ICheckboxProps } from "./Checkbos.props";
import { Label, VisbilityHidden, Division, Caption } from "./style";

export const Checkbox: React.FC<ICheckboxProps> = (props): JSX.Element => {
  const { caption, checked, disabled, onChange } = props;
  return (
    <Label>
      <VisbilityHidden
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Division />
      <Caption>{caption && caption()}</Caption>
    </Label>
  );
};
