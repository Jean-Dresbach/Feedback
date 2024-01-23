// import { useState } from "react"
import { people } from "../../database"
import { Card } from "../Card"
import { Wrapper } from "./styles"

export function Carousel() {
  // const [activeCarousel, setActiveCarousel] = useState<number>(0)

  // const nextSlide = () => {
  //   setActiveCarousel((prevIndex) => (prevIndex + 1) % 4)
  // }

  // const prevSlide = () => {
  //   setActiveCarousel((prevIndex) => (prevIndex - 1 + 4) % 4)
  // }

  return (
    <Wrapper id="slider">
      <input type="radio" name="slider" id="s1" />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" />
      <input type="radio" name="slider" id="s4" />
      <input type="radio" name="slider" id="s5" defaultChecked />
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
