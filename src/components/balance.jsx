import React, { useContext } from 'react';
import {GlobalContext} from '../context/global-state';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(trans => trans.amount);
    const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return ( 
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${totalAmount}</h1>
        </div>
     );
}
 
export default Balance;