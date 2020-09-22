import React, {createContext, useReducer} from 'react';
import AppReducer from './app-reducer';
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './actions';

const intialState = {
    transactions: [
        {id: 1, text: 'Salary', amount: 8000},
        {id: 2, text: 'Flower', amount: -300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150}
    ]
};

// Create Context
export const GlobalContext = createContext(intialState);

// create Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    function deleteTransaction(id) {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: ADD_TRANSACTION,
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider 
            value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
}


