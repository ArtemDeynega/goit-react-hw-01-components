import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bGcolorStandart};
  padding: 10px;

  list-style: none;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.bGcolorBlue};
  }
`;
const setBgColor = ({ online, theme }) => {
  if (online) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
