import PropTypes from 'prop-types';

import { Line, Value } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <Line>
        <Value>{type}</Value>
        <Value>{amount}</Value>
        <Value>{currency}</Value>
      </Line>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
