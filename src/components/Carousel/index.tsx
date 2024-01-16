import { useState } from "react"
import { CustomCarousel, CarouselItem } from "./styles"

export function MyCustomCarousel() {
  const [activeCarousel, setActiveCarousel] = useState<number>(0)

  const nextSlide = () => {
    setActiveCarousel((prevIndex) => (prevIndex + 1) % 4)
  }

  const prevSlide = () => {
    setActiveCarousel((prevIndex) => (prevIndex - 1 + 4) % 4)
  }

  return (
    <>
      <CustomCarousel activeIndex={activeCarousel}>
        <CarouselItem>Felipe</CarouselItem>
        <CarouselItem>Matheus</CarouselItem>
        <CarouselItem>Jean</CarouselItem>
        <CarouselItem>Eduardo</CarouselItem>
      </CustomCarousel>
    </>
  )
}
