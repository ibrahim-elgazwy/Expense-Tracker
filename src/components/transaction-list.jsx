import React, {useContext} from 'react';
import Transaction from './transaction';

import {GlobalContext} from '../context/global-state';

const TransactionList = () => {
    debugger
    const { transactions } = useContext(GlobalContext);
    return ( 
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
     );
}
 
export default TransactionList;