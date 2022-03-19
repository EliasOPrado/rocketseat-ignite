import React from 'react'
import Modal from 'react-modal'

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
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  )
}
