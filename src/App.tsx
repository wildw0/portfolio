import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGLobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGLobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

//ThemeProvider foi no lugar do fragmento <></>
