import { Wrapper } from "./styles"

interface CardProps {
  htmlFor: string
  id: string
  name: string
  surname: string
  qualities: string[]
  linkedin: string
  image: string
}

export function Card({
  htmlFor,
  id,
  name,
  surname,
  qualities,
  image,
  linkedin,
}: CardProps) {
  return (
    <Wrapper htmlFor={htmlFor} id={id}>
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
