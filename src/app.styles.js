import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const LightHalf = styled(Container)`
  flex: 1;
  background-color: #fff; ;
`;

export const DarkHalf = styled(LightHalf)`
  background-color: #000; ;
`;

export const ButtonOne = styled.div`
  padding: 12px 40px;
  background: rgb(58, 184, 160);
  background: linear-gradient(
    90deg,
    rgba(58, 184, 160, 1) 0%,
    rgba(63, 198, 171, 1) 35%,
    rgba(68, 215, 162, 1) 100%
  );
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  :hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.1);
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const ButtonTwo = styled(ButtonOne)`
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
`;
