import * as React from "react";
import { useHistory } from "react-router-dom";
import { useNames, useQuery } from "hooks";
import { Button, Text } from "views";
import { SelectList } from "containers";
import { ButtonSection, PageLayout, SelectListWrap } from "./style";
import { addNameToStat, setExpire } from "firestore";

export const ChoicePage: React.FC = (): JSX.Element => {
  const history = useHistory();
  const gender = useQuery("gender");
  const { data, error, reset } = useNames(gender);
  const [selectedName, setSelectedName] = React.useState<string>("");

  const isSelectedName: boolean = !!selectedName;

  const reserve = async () => {
    const selectedNameObj = data?.find((name) => name.name === selectedName);
    history.push("/result?name=" + selectedName);
    try {
      await setExpire(selectedNameObj, gender);
      await addNameToStat(gender, selectedName, new Date().getTime());
    } catch (e) {
      console.log("Мы не смогли забронировать кличку. Простите");
    }
  };

  if (error !== null) {
    history.push("/404");
  }

  return (
    <PageLayout>
      <SelectListWrap>
        {data === null ? (
          <Text appearance="span" colorText="light" caption="Подбираем.." />
        ) : (
          <>
            {" "}
            <Text appearance="span" colorText="light" caption="Выбери кличку" />
            <SelectList
              items={data}
              onChange={setSelectedName}
              selectedName={selectedName}
            />{" "}
          </>
        )}
      </SelectListWrap>
      <ButtonSection>
        <Text
          as="p"
          appearance="p"
          colorText="neutral"
          caption="Бронь убирает кличку из раздачи на некоторое время"
        />
        <Text appearance="span" colorText="light" caption="Ты можешь" />
        <Button
          type="button"
          disabled={!isSelectedName}
          appearance="primary"
          caption="Бронировать кличку"
          onClick={reserve}
        />
      </ButtonSection>
      <ButtonSection>
        <Text appearance="span" colorText="light" caption="Или" />
        <Button
          type="button"
          appearance="outline"
          caption="Попробовать еще раз"
          onClick={reset}
        />
      </ButtonSection>
    </PageLayout>
  );
};
