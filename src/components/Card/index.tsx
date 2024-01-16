import { Wrapper } from "./styles"

export function Card() {
  return (
    <Wrapper>
      <div className="titleContainer">
        <h2>FEEDBACK</h2>
        <div className="curve"></div>
      </div>

      <div className="infoContainer">
        <div></div>
        <p>
          Nome<span> Aqui</span>
        </p>
      </div>

      <div className="feedbackContainer">
        <span>Frase aqui</span>
        <span>Frase aqui</span>
        <span>Frase aqui</span>
      </div>

      <div className="linkedinContainer">
        <a href="#" target="_blank">
          Linkedin
        </a>
        <hr />
      </div>
    </Wrapper>
  )
}
