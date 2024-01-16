import jeanImg from "../assets/foto-perfil-jean.png"

interface Person {
  name: string
  surname: string
  qualities: string[]
  color: string
  linkdin: string
  image: string
}

export const people: Person[] = [
  {
    name: "Jean",
    surname: "Dresbach",
    color: "#30b5f0",
    qualities: ["Colaborativo", "Raciocinio lógico", "Inteligente"],
    linkdin: "www.linkedin.com/in/jean-dresbach-a98a90293",
    image: jeanImg,
  },
  {
    name: "Eduardo",
    surname: "Faria",
    color: "#1cc013",
    qualities: ["Colaborativo", "Esforcado", "Relacionamento interpessoal"],
    linkdin: "https://www.linkedin.com/in/eduardo-vaz-de-faria-5573bb196/",
    image: "",
  },
  {
    name: "Mateus",
    surname: "Luz",
    color: "#d41548",
    qualities: ["Colaborativo", "Prestativo", "Comunicativo"],
    linkdin: "#",
    image: "",
  },
  {
    name: "Felipe",
    surname: "Sinn",
    color: "#ffa300",
    qualities: ["", "", ""],
    linkdin: "#",
    image: "",
  },
]
