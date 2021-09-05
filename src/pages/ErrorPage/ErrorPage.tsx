import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button, Text } from "views";
import { PageLayout, ButtonSection, NoticeWrap } from "./style";

export const ErrorPage: React.FC = (): JSX.Element => {
  const history = useHistory();
  return (
    <PageLayout>
      <NoticeWrap>
        <Text
          appearance="span"
          colorText="light"
          caption="Что то пошло не так, но мы уже все исправляем!"
        />
      </NoticeWrap>
      <ButtonSection>
        <Button
          type="button"
          appearance="primary"
          caption="Попробовать еще"
          onClick={() => history.push("/")}
        />
      </ButtonSection>
    </PageLayout>
  );
};
