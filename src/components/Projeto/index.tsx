import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo> Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao> Visualizar</LinkBotao>
  </Card>
)

export default Projeto

//poderia ser assim, mas no projeto esta no styles, em cima da const Projeto
// const Card = styled.div`
//   border: 1px solid #c1c1c1;
//   padding: 16px;
// `
