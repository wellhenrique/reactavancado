import * as S from "./styles";

const Main = ({
  title = "React Avançado ",
  description = "Typescript, ReactJS, NextJS e Styled Components"
}) => (
  <S.Wrapper>
    <S.Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/images/hero-illustration.svg"
      alt="desenvolvedor de frente para a tela com código. "
    />
  </S.Wrapper>
);

export default Main;
