import React from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import {api} from "../../services/api"
import {TransactionContext} from '../../TransactionsContext'
interface NewTransactionModalProps {
  // Type for props from App.tsx
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose,}: NewTransactionModalProps) {
  const {createTransaction} = React.useContext(TransactionContext);
  
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [type, setType] = React.useState("deposit");

  async function handleCreateNewTransaction(event: React.FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
        placeholder="Titulo"
        value={title}
        onChange={event => setTitle(event.target.value)} 
        />
        <input 
        type="number" 
        placeholder="Valor" 
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className={type === "deposit" ? "active" : ""}
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="income" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
        placeholder="Categoria" 
        value={category}
        onChange={event => setCategory(event.target.value)} 
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
