import styled from "styled-components"

export const Wrapper = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  .titleContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    font-size: x-large;
    width: 100%;
    height: 40%;
    background-color: red;

    .curve {
      position: absolute;
      height: 250px;
      width: 100%;
      bottom: 0;
      text-align: center;
    }

    .curve::before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 35% 48%;
      width: 28%;
      height: 119px;
      transform: translate(262%, 186%) rotate(190deg);
      background-color: red;
    }

    .curve::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 44% 46%;
      width: 28%;
      height: 119px;
      transform: translate(-4%, 169%) rotate(94deg);
      background-color: red;
    }
  }

  .infoContainer {
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    background-color: #122222;
    z-index: 2;
    clip-path: polygon(50% 50%);

    div {
      width: 30%;
      margin-top: -30px;
      aspect-ratio: 1/1;
      border: 5px solid red;
      border-radius: 50%;
    }

    p {
      color: white;

      span {
        color: red;
      }
    }
  }

  .feedbackContainer {
    span {
      display: block;
      margin: 5px 0;
    }
  }

  .linkedinContainer {
    position: relative;
    width: 100%;
    text-align: center;

    span {
      background-color: red;
      color: white;
      padding: 2px 20px;
      border-radius: 16px;
    }

    hr {
      position: absolute;
      z-index: -1;
      top: 9px;
      width: 100%;
    }
  }

  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    width: 150px;
  }
`
