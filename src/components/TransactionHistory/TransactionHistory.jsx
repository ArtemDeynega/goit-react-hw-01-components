import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '.';
export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <TransactionHistoryItem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

//  <tr>
//           <td>Invoice</td>
//           <td>125</td>
//           <td>USD</td>
//         </tr>
//         <tr>
//           <td>Withdrawal</td>
//           <td>85</td>
//           <td>USD</td>
//         </tr>
