import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please Add a task');
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>新しいトランザクションを追加する</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="text"
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="text"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
