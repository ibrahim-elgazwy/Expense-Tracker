import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/global-state';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    function handleFormSubmit(e){
        e.preventDefault();
        const transaction = {
            id: Math.random() * 10000000,
            text,
            amount: +amount
        };
        addTransaction(transaction);
        setAmount(0);
        setText('');
    }


    return ( 
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" 
                           placeholder="Enter text..." 
                           value={text} 
                           onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" 
                           placeholder="Enter amount..." 
                           value={amount} 
                           onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
     );
}
 
export default AddTransaction;