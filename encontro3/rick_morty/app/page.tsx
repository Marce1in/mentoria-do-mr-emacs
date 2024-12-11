'use client'
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const [evento, setEvento] = useState({ img: "", msg: "", on: false })


  const check = () => {
    switch (count) {
      case 13:
        setEvento(
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Lula_LGBT.jpg",
            msg: "LULAAAAA",
            on: true,
          }
        )
        break

      case 22:
        setEvento(
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfOzkSFlvDrfXqN48nD76ASaufuloQXNdHA&s",
            msg: "Bolsonaro é norte, bolsonaro é nordeste VAI 17 VAI 17",
            on: true,
          }
        )
        break

      case 24:
        setEvento(
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nuvola_LGBT_flag_borderless.svg/2560px-Nuvola_LGBT_flag_borderless.svg.png",
            msg: "Veio de quatro né? gay.",
            on: true,
          }
        )
        break

      case 41:
        setEvento(
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Td9wcUVnyOvsDLdxQI1UfzYdBwVYz9eL_w&s",
            msg: "perfeito",
            on: true,
          }
        )
        break

      case 56:
        setEvento(
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Td9wcUVnyOvsDLdxQI1UfzYdBwVYz9eL_w&s",
            msg: "EU QUERIA QUE GAROTAS PALHACO FOSSEM UMA RAÇA REAL, SEUS LABIOS...",
            on: true,
          }
        )
        break

      case 69:
        setEvento(
          {
            img: "https://emojiisland.com/products/flushed-face-emoji-icon",
            msg: ":O",
            on: true,
          }
        )
        break

      default:
        setEvento(
          {
            img: "",
            msg: "",
            on: false,
          }
        )
    }
  }



  return (
    <>
      <h1 className="text-center">Tente chegar até o número 13</h1>
      <h2 className="text-center text-yellow-400">{count}</h2>
      <div className="flex gap-10 justify-center">
        <button
          className="border px-12 py-1 rounded"
          onClick={() => {setCount(count + 1); check()}}
        >+1
        </button>
        <button
          className="border px-12 py-1 rounded"
          onClick={() => {setCount(count - 1); check()}}
        >-1
        </button>
      </div>
      {true &&
        <>
          <img
            src={evento.img}
            alt="nao quero por"
          />
          <h1>
            {evento.msg}
          </h1>
        </>
      }
    </>
  )
}
