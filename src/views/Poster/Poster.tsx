import * as React from "react";
import img from "./img/dog.png";
import { Background } from "./style";

export const Poster: React.FC = (props): JSX.Element => {
  return (
    <Background {...props}>
      <img src={img} alt="Собака"></img>
    </Background>
  );
};
