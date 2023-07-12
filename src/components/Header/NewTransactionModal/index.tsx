import * as Dialog from '@radix-ui/react-dialog';


import { CloseButton, Content, Overley, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {

  return (
    <Dialog.Portal>
      <Overley />

      <Content>
        

        {/* o Dialog.Title vai indicar ao leitor de tela que um novo modal abriu, e que é um modal de "nova transação" */}
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action=''>
          <input type='text' placeholder='Descrição' required />
          <input type='number' placeholder='Preço' required />
          <input type='text' placeholder='Categoria' required />

          <TransactionType>
           
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit"></button>
        </form>

        
     
      </Content>

    </Dialog.Portal>

  )
}