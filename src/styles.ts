import styled from "styled-components";

export const Container = styled.div`
  width: 356px;
  padding: 54px 32px 32px 32px;

  background: #2d2a37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 48px;
`;

export const Calculate = styled.div``;

export const Result = styled.div`
  min-width: 288px;

  padding: 0 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #6b6b6b;
  }

  .calculate_result {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;
  }

  .result {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;

    color: #ebebeb;
  }
`;

export const Buttons = styled.div`
  min-width: 292px;
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 12px;

  button {
    width: 64px;
    height: 64px;
    border: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ebebeb;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #2d2a37;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06);

    border-radius: 999px;
  }

  .clean {
    color: #975dfa;
  }

  .button_operations {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0.01%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #462878;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }

  .button_equals {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #7f45e2;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }
`;
