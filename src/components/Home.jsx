import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import fetchWeather from "../redux/weather/weatherAction";

// loader
import Loader from "react-loader-spinner";
import Information from "./Information";

// style
import styled from "styled-components";

import start from "../assets/start.jpg";

const Home = () => {
  const [value, setValue] = useState("");
  const [colors, setColors] = useState({
    color: "#fff",
    img: start,
    txt: "#000",
  });

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.weatherState);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(value));
  };

  return (
    <Container image={colors.img}>
      <Content color={colors.color}>
        <Form onSubmit={submitHandler} colors={colors}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </Form>
        <CTA>
          {loading && (
            <Loader
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              type="Bars"
              color={colors.color}
              height={50}
              width={50}
            />
          )}
          {!error && data && (
            <Information city={data} colors={colors} setColors={setColors} />
          )}
          {error && <Error>{error}</Error>}
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.image}`});

  display: flex;
  padding: 50px 80px;

  @media (max-width: 540px) {
    padding: 25px 20px;
  }
`;

const Content = styled.div`
  margin: auto;

  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 12px;
  box-shadow: 0 0 12px ${(props) => `${props.color}`};
  backdrop-filter: blur(20px);
  background: ${(props) => `${props.color}22`};

  width: 100%;
  height: fit-content;

  padding: 20px;
`;

const CTA = styled.div`
  text-align: center;
  width: 100%;
  div {
    margin-left: calc(50%-80px);
    display: flex;
  }
`;

const Form = styled.form`
  display: flex;
  input {
    color: var(--white);
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    border: none;
    padding: 10px 8px;
    width: 90%;
    font-size: 20px;
    transition: all 0.2s ease;
    border-radius: 6px 0 0 6px;
    &:focus {
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
      border-radius: 10px 0 0 10px;
    }
  }

  button {
    width: 10%;
    background: ${(props) => props.colors.color};
    color: ${(props) => props.colors.txt};
    padding: 10px 5px;
    transition: all 0.2s ease;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
      border-radius: 0 10px 10px 0;
      background: ${(props) => props.colors.txt};
      color: ${(props) => props.colors.color};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    input {
      width: 100%;
      text-align: center;
      border-radius: 6px 6px 0 0;
      &:focus {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
        border-radius: 10px 10px 0 0;
      }
    }
    button {
      width: 100%;
      &:hover {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
        border-radius: 0 0 10px 10px;
      }
    }
  }
`;

const Error = styled.p`
  margin: 50px auto 40px;
  color: red;
  background: rgba(100, 0, 0, 0.8);
  width: fit-content;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 12px red;
`;

export default Home;
