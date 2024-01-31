import { useState } from "react"
import { people } from "../../database"
import { Card } from "../Card"
import { Wrapper } from "./styles"

export function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  function handleSlideChange(index: number) {
    setActiveSlide(index)
  }

  return (
    <Wrapper id="slider">
      <input type="radio" name="slider" id="s1" checked={activeSlide === 1} />
      <input type="radio" name="slider" id="s2" checked={activeSlide === 2} />
      <input type="radio" name="slider" id="s3" checked={activeSlide === 3} />
      <input type="radio" name="slider" id="s4" checked={activeSlide === 4} />
      <input
        type="radio"
        name="slider"
        id="s5"
        checked={activeSlide === 5 || activeSlide === 0}
      />
      {people.map((person, index) => (
        <Card
          key={person.id}
          htmlFor={"s" + (index + 1)}
          id={"slide" + (index + 1)}
          image={person.image}
          name={person.name}
          surname={person.surname}
          qualities={person.qualities}
          linkedin={person.linkedin}
          handleSlideChange={handleSlideChange}
          index={index + 1}
        ></Card>
      ))}
      <label htmlFor="s5" id="slide5">
        <span>
          CARROSSEL <br />
          DE FEEDBACKS
        </span>
      </label>
    </Wrapper>
  )
}
