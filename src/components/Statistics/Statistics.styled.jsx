import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;
export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  align-items: center;

  grid-gap: 1em;
  grid-auto-rows: 60px;
  padding: 0;
  list-style: none;
`;
export const Label = styled.li`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 30px;
  border-radius: 10px;
  width: 100px;
  list-style: none;
`;
// export const Statistics = styled.section``;
