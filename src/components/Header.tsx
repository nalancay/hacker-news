import { StyledHeader, StyledLink } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <img src="/logo.gif" alt="Logo de Hacker News" />
      <StyledLink href="/">Hacker News</StyledLink>
    </StyledHeader>
  );
};
