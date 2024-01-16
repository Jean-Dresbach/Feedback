import jeanImg from "../assets/foto-perfil-jean.png"
import eduardoImg from "../assets/foto-perfil-eduardo.jpg"
import felipeImg from "../assets/foto-perfil-felipe.jpg"
import mateusImg from "../assets/foto-perfil-mateus.jpeg"

interface Person {
  name: string
  surname: string
  qualities: string[]
  color: string
  linkedin: string
  image: string
}

export const people: Person[] = [
  {
    name: "Jean",
    surname: "Dresbach",
    color: "#30b5f0",
    qualities: ["Colaborativo", "Raciocinio lógico", "Inteligente"],
    linkedin: "www.linkedin.com/in/jean-dresbach-a98a90293",
    image: jeanImg,
  },
  {
    name: "Eduardo",
    surname: "Faria",
    color: "#1cc013",
    qualities: ["Colaborativo", "Esforcado", "Relacionamento interpessoal"],
    linkedin: "https://www.linkedin.com/in/eduardo-vaz-de-faria-5573bb196/",
    image: eduardoImg,
  },
  {
    name: "Mateus",
    surname: "Luz",
    color: "#d41548",
    qualities: ["Colaborativo", "Prestativo", "Comunicativo"],
    linkedin: "https://www.linkedin.com/in/matheus-prates-da-luz-08a531259/",
    image: mateusImg,
  },
  {
    name: "Felipe",
    surname: "Sinn",
    color: "#ffa300",
    qualities: ["Prestativo", "Trabalho em equipe", "Motivação"],
    linkedin:
      "https://www.linkedin.com/in/felipe-sinn?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS7%2Bnw6uWQP2KASNP%2B37P4w%3D%3D",
    image: felipeImg,
  },
]
