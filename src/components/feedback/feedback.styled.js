import styled from "@emotion/styled";

export const FeedbackBtn = styled.button`
  display: inline-block;
  font-family: arial, sans-serif;
  font-size: 14px;
  width: 100px;
  color: rgb(205, 216, 228);
  text-shadow: 0 -1px rgb(46, 53, 58);
  text-decoration: none;
  user-select: none;
  line-height: 2em;
  margin: 10px;
  padding: 1px 1.2em;
  outline: none;
  border: 1px solid rgba(33, 43, 52, 1);
  border-radius: 3px;
  background: rgb(81, 92, 102)
    linear-gradient(rgb(81, 92, 102), rgb(69, 78, 87));
  box-shadow: inset 0 1px rgba(101, 114, 126, 1),
    inset 0 0 1px rgba(140, 150, 170, 0.8), 0 1px rgb(83, 94, 104),
    0 0 1px rgb(86, 96, 106);
  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 10, 20, 0.5), 0 1px rgb(83, 94, 104),
      0 0 1px rgb(86, 96, 106);
  }
  &:focus:not(:active) {
    border: 1px solid rgb(22, 32, 43);
    border-bottom: 1px solid rgb(25, 34, 45);
    background: rgb(53, 61, 71);
    box-shadow: inset 0 1px 3px rgba(0, 10, 20, 0.5), 0 1px rgb(83, 94, 104),
      0 0 1px rgb(86, 96, 106);
    pointer-events: none;
  }
`;
