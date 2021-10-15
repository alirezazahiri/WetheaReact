import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import fetchWeather from "../redux/weather/weatherAction";

// loader
import Loader from "react-loader-spinner";
import Information from "./Information";

// style
import styled from "styled-components";

const Home = () => {
  const [value, setValue] = useState("");
  const [bg, setBg] = useState("#fff");

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.weatherState);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(value));
  };

  return (
    <Container bg={bg}>
      <Content>
        <Form onSubmit={submitHandler}>
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
              color="#00345F"
              height={50}
              width={50}
            />
          )}
          {!error && data && <Information city={data} setBg={setBg} />}
          {error && error}
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: scroll;

  background-color: ${(props) => props.bg};
  display: flex;
  padding: 50px 80px;
`;

const Content = styled.div`
  margin: auto;

  border: 1px solid var(--secondary-color);
  border-radius: 12px;
  box-shadow: 0 0 12px var(--secondary-color);
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.3);

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
    color: var(--primary-color);
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    border: none;
    padding: 10px 8px;
    width: 90%;
    transition: all 0.2s ease;
    border-radius: 6px 0 0 6px;
    &:focus {
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
      border-radius: 10px 0 0 10px;
    }
  }

  button {
    width: 10%;
    background: var(--secondary-color);
    padding: 10px 5px;
    color: var(--primary-color);
    transition: all 0.2s ease;

    &:hover {
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
      border-radius: 0 10px 10px 0;
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

export default Home;
