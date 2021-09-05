import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button, Text, Poster, OutsideLink } from "views";
import { BannerWrap, PageLayout, ButtonSection } from "./style";

export const WelcomePage: React.FC = (): JSX.Element => {
  const history = useHistory();

  const handleClick = (str: string) => () => {
    history.push(str);
  };

  return (
    <PageLayout>
      <BannerWrap>
        <Poster />
      </BannerWrap>
      <ButtonSection>
        <Text appearance="span" colorText="light" caption="Выбери пол" />
        <Button
          type="button"
          appearance="primary"
          caption="Мальчик"
          onClick={handleClick("/choice?gender=male")}
        />
        <Button
          type="button"
          appearance="primary"
          caption="Девочка"
          onClick={handleClick("/choice?gender=female")}
        />
      </ButtonSection>
      <ButtonSection>
        <OutsideLink
          href="https://github.com/addnsk/whosaidwoof_mvp/"
          caption="GitHub"
        />
      </ButtonSection>
    </PageLayout>
  );
};
