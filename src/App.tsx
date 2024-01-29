import Projetos from './containers/Projetos'
import Sobre from './containers/Sobre'
import Sidebar from './containers/sidebar'
import EstiloGLobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGLobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
