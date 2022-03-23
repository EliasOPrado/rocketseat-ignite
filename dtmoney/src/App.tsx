import React from "react";
import Header from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/globals";
import NewTransactionModal from "./components/NewTransactionModal/index";
import { TransactionsProvider } from './hooks/useTransactions';
// block root element to be interacted.
Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}