import GlobalStyle from "../styles/global"
import { Card } from "../components/Card"
import { Main } from "./styles"

export function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Card />
      </Main>
    </>
  )
}
