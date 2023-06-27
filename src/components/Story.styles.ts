import styled from "styled-components";
import { Link } from "wouter";

export const StyledStory = styled.article`
  color: #374151;
  margin-bottom: 8px;
`;

export const StyledStoryTitle = styled.a`
  text-decoration: none;
  color: #111;
  font-size: 18px;
`;

export const StyledStoryHeader = styled.header`
  display: flex;
  alignitems: center;
  gap: 8px;
  margin-bottom: 2px;
  line-height: 24px;
`;

export const StyledStoryFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 24px;
  font-size: 12px;
`;

export const StyledStoryLink = styled.a`
  color: #888;
  text-decoration: none;
  &.hover: {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  color: #888;
  text-decoration: none;
  &.hover: {
    text-decoration: underline;
  }
`;
