import * as React from "react";
import { useQuery } from "hooks";
import { OutsideLink, Text } from "views";
import { ResultWrap, PageLayout, ButtonSection } from "./style";

export const ResultPage: React.FC = (): JSX.Element => {
  const name = useQuery("name");
  return (
    <PageLayout>
      <ResultWrap>
        <Text appearance="span" colorText="light" caption="Забронировано:" />
        <Text as="h2" appearance="h2" colorText="light" caption={name} />
      </ResultWrap>
      <ButtonSection>
        <OutsideLink href="https://github.com/" caption="GitHub" />
      </ButtonSection>
    </PageLayout>
  );
};
