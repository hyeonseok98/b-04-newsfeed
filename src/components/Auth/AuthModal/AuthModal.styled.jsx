import styled from "styled-components";

export const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StDialog = styled.dialog`
  z-index: 1000;

  background-color: white;
  padding: 4rem;
  border-radius: 1.6rem;
`;
