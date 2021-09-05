import * as React from "react";
import { Checkbox, Text } from "views";
import { ISelectListProps } from "./SelectList.props";
import { ItemWrap } from "./style";

export const SelectList: React.FC<ISelectListProps> = ({
  items,
  onChange,
  selectedName,
}): JSX.Element => {
  return (
    <>
      {items &&
        !!items.length &&
        items.map(({ id, name, category }) => (
          <ItemWrap key={id}>
            <Checkbox
              checked={name === selectedName}
              caption={() => (
                <Text appearance="h3" colorText="light" caption={name} />
              )}
              onChange={() => onChange(name)}
            />
            {category.length > 0 && (
              <Text
                as="p"
                appearance="p"
                colorText="neutral"
                caption={category}
              />
            )}
          </ItemWrap>
        ))}
    </>
  );
};
