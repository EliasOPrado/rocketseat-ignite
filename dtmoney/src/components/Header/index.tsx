import React from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import {Container, Content} from './styles'

interface HeaderProps {
  // Type for props from App.tsx
  onOpenNewTransactionModal: () => void;
}

export default function Header({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <Container>
        <Content>
        <img src={logoImg} alt="dt money" />
        <button type='button'onClick={onOpenNewTransactionModal}> 
            Nova transação
        </button>
      
        </Content>
    </Container>
  )
}
