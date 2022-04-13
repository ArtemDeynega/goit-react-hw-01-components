import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: #afb1b8;
  margin-top: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 150px;
  border: 3px solid black;
  border-radius: 50%;
  margin: 0;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-auto-rows: minmax(10px, auto);
`;

export const Item = styled.span`
  font-size: 24px;
  color: black;
  margin-left: 10px;
`;
export const ListItem = styled.li`
  list-style: none;
`;
