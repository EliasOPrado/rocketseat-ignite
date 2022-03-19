import React from 'react'
import Modal from 'react-modal'
import {Container} from './style'
interface NewTransactionModalProps {
    // Type for props from App.tsx
    isOpen: boolean;
    onRequestClose: () => void;
  }

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
    >
      <Container>
      <h2>Cadastrar Transação</h2>

      <input placeholder='Titulo' />
      <input type="number" placeholder='Valor' />
      <input type="number" placeholder='Categoria' />
      <button type="submit">Cadastrar</button>
      </Container>
      

    </Modal>
  )
}
