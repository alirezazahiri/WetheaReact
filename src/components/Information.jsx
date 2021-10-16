import React, { useEffect } from "react";

// services
import { convert } from "../services/fahrenheitToCentigrade";
import { mapIconToColors } from "../services/mapIconToColors";

// styled
import styled from "styled-components";

const Information = ({ city, setColors, colors }) => {
  const { name, weather, main, sys } = city;

  // destructure the needed data from each part
  const { country } = sys;
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  const { main: status, description, icon } = weather[0];

  // get weather status icon
  const ICON_SRC = `https://openweathermap.org/img/wn/${icon}.png`;

  useEffect(() => {
    setColors(mapIconToColors(icon));
  }, [icon, setColors]);
  
  return (
    <Container>
      <h1>
        {name}({country})
      </h1>
      <Title>
        <h3>{status}</h3>
        <p>{description}</p>
      </Title>
      <Icon src={ICON_SRC} alt="weather status" color={colors.color} />
      <Details colors={colors}>
        <div>
          <h3>Temperature</h3>
          <h4>{convert(temp)}</h4>
        </div>
        <div>
          <h3>Feels Like</h3>
          <h4>{convert(feels_like)}</h4>
        </div>
        <div>
          <h3>Lowest Temperature</h3>
          <h4>{convert(temp_min)}</h4>
        </div>
        <div>
          <h3>Highest Temperature</h3>
          <h4>{convert(temp_max)}</h4>
        </div>
        <div>
          <h3>Pressure</h3>
          <h4>{pressure}pa</h4>
        </div>
        <div>
          <h3>Humidity</h3>
          <h4>{humidity}%</h4>
        </div>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 40px;
  margin: auto;
  background: ${props => props.color};
  border-radius: 50%;
`;

const Details = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
  
  div {
    background: ${props => `${props.colors.color}44`};
    padding: 5px 5px 1px;
    h3, h4 {
      color: ${props => props.colors.txt};
    }
    h4 {
      font-style: italic;
    }
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.colors.color};
    margin-bottom: 4px;
    border-radius: 4px;
  }

  @media (max-width: 540px) {
    margin: 20px 10px;
    div {
      flex-direction: column;
    }
  }
`;

export default Information;
