import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-around;
  border-radius: 10px;
  background-color: rgb(235, 225, 225);
  padding: 10px;

  list-style: none;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ online }) => {
    if (!online) {
      return 'crimson';
    }
    return 'chartreuse';
  }};
`;
