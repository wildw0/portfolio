import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string //sem "?" obrigatório com opcional
}

// defino o padrão; com ":" dou opção se não for usado o padrão
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

//botao perigo eu posso usar tags de html para transformá-lo, no caso em "a"
