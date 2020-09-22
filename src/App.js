import React from 'react';
import './App.css';
import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/income-expenses';
import TransactionList from './components/transaction-list';
import AddTransaction from './components/add-transaction';

import {GlobalProvider} from './context/global-state'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
