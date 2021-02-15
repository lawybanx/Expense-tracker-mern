import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>ヒストリー</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default Transactions;
