import { Wrapper } from "./styles"

interface CardProps {
  name: string
  surname: string
  qualities: string[]
  color: string
  linkedin: string
  image: string
}

export function Card({
  name,
  surname,
  color,
  qualities,
  image,
  linkedin,
}: CardProps) {
  return (
    <Wrapper color={color}>
      <div className="titleContainer">
        <h2>FEEDBACK</h2>
        <div className="curve"></div>
      </div>

      <div className="infoContainer">
        <div>
          <img src={image} />
        </div>
        <p>
          {name}
          <span> {surname}</span>
        </p>
      </div>

      <div className="feedbackContainer">
        {qualities.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>

      <div className="linkedinContainer">
        <a href={linkedin} target="_blank">
          Linkedin
        </a>
        <hr />
      </div>
    </Wrapper>
  )
}
