import styled from "styled-components"

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  .infoContainer {
    width: 90%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #122222;
    border-radius: 16px;

    div {
      width: 100px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      border: 5px solid #122222;
      overflow: hidden;

      img {
        height: 120%;
        width: 100%;
        object-fit: cover;
      }
    }

    p {
      flex-grow: 1;
      font-family: "Lemon", serif;
      font-size: 20px;
      color: white;
      text-align: center;

      span {
        fill: currentColor;
      }
    }
  }

  .feedbackContainer {
    span {
      text-align: center;
      display: block;
      margin: 5px 0;
    }
  }

  .linkedinContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    a {
      display: block;
      text-decoration: none;
      width: min-content;
      background-color: #122222;
      border: 2px solid transparent;
      color: white;
      padding: 2px 20px;
      border-radius: 16px;
      cursor: pointer;
      z-index: 2;
      transition: border 0.2s ease;
    }

    a:hover {
      border: 2px solid white;
    }

    hr {
      position: absolute;
      width: 0;
      height: 4px;
      border: none;
      outline: none;
      background-color: white;
      transform: translateY(300%);
      border-radius: 5px;
      transition: width 0.5s ease 0.1s;
    }

    a:hover ~ hr {
      width: 100%;
    }
  }

  @media (min-width: 1000px) {
    .infoContainer {
      div {
        width: 120px;
      }
      p {
        font-size: 20px;
      }
    }

    .feedbackContainer {
      span {
        font-size: 20px;
      }
    }

    .linkedinContainer {
      a {
        font-size: 20px;
      }

      hr {
        transform: translateY(400%);
      }
    }
  }

  @media (max-width: 700px) {
    .infoContainer {
      div {
        width: 65px;
      }
      p {
        font-size: 15px;
      }
    }

    .feedbackContainer {
      span {
        font-size: 10px;
      }
    }

    .linkedinContainer {
      a {
        font-size: 10px;
      }

      hr {
        transform: translateY(200%);
      }
    }
  }
`
