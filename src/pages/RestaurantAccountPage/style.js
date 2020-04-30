import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.div`
  width: 30%;
`;

export const Feed = styled.div`
  height: 60vh;
  flex: 1;
  overflow: auto;
`;

export const ImageContainer = styled.div`
  width: 100%
  display: flex;
  flex-direction: row
  flex-wrap: wrap;
  & > img {
    max-width: 30px;
  }
`;
