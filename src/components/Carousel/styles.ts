import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;

  [type="radio"] {
    display: none;
  }

  height: 300px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;

  label {
    margin: auto;
    width: 350px;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
    -moz-transition: transform 0.4s ease;
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    filter: blur(1.5px);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-80%, 0, 0);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    filter: blur(0.5px);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-40%, 0, 100px);
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 200px);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    filter: blur(0.5px);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(40%, 0, 100px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    filter: blur(1.5px);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(80%, 0, 0);
  }

  #slide1 {
    background: #00bcd4;
  }
  #slide2 {
    background: #4caf50;
  }
  #slide3 {
    background: #cddc39;
  }
  #slide4 {
    background: #ffc107;
  }
  #slide5 {
    background: #ff5722;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
      font-size: 35px;
      transform: rotate(-30deg);
    }
  }

  @media (min-width: 1000px) {
    height: 400px;

    label {
      width: 450px;
    }

    #slide5 {
      span {
        font-size: 45px;
      }
    }
  }

  @media (max-width: 700px) {
    height: 200px;

    label {
      width: 250px;
    }

    #slide5 {
      span {
        font-size: 25px;
      }
    }
  }
`
