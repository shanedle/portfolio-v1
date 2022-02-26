import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const ListIconContainer = styled.div``;

export const ListIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 40px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ListIconText = styled.span`
  margin-left: 6px;
`;
