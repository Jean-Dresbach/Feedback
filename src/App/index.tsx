import { Carousel } from "../components/Carousel"
import GlobalStyle from "../styles/global"
import { Main } from "./styles"

export function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Carousel />
      </Main>
    </>
  )
}
