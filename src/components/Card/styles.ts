import styled from "styled-components"

export const Wrapper = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.5);

  .titleContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    font-size: x-large;
    width: 100%;
    height: 30%;
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
      border-radius: 50%;
      width: 28%;
      height: 119px;
      transform: translate(262%, 176%) rotate(190deg);
      background-color: red;
    }

    .curve::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 50%;
      width: 28%;
      height: 119px;
      transform: translate(-4%, 169%) rotate(94deg);
      background-color: red;
    }
  }

  .infoContainer {
    position: relative;
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    background-color: #122222;
    border-radius: 16px;
    z-index: 2;
    margin-top: -30px;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    div {
      width: 40%;
      aspect-ratio: 1/1;
      margin-top: -40px;
      border: 5px solid red;
      border-radius: 50%;
      background-color: blue;
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
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    a {
      display: block;
      text-decoration: none;
      width: min-content;
      background-color: red;
      color: white;
      padding: 2px 20px;
      border-radius: 16px;
      cursor: pointer;
    }

    a:hover {
      transform: scale(1.1);
    }

    hr {
      position: absolute;
      z-index: -1;
      top: 14px;
      width: 100%;
    }
  }
`
