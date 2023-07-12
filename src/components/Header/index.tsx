import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';


import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "./NewTransactionModal";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>

        <img src={logoImg} alt="" />

        <Dialog.Root>
          {/*o asChild vai fazer com que seja aproveitado o botão abaixo, e não crie outro botão*/}
          <Dialog.Trigger asChild>


            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          {/* o Portal faz com que o modal seja independente, sobreponha todos os elementos */}
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

