import React, { useState } from "react";
import styled from "styled-components";
import Development from "../components/Development";
import ProductDesign from "../components/ProductDesign";
import WebDesign from "../components/WebDesign";

const data = [
  "Web Design",
  "Development",
  "Product Design",
];

const Section = styled.div`
  min-height: 93vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 14px;
  font-weight: 300;
  scroll-padding-top: 60px;
  scroll-padding-bottom: 60px;
  top: 70px;
  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;


  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 968px) {
    flex-direction: column;
   }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  
  
  @media only screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
    height: 50vh;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px rebeccapurple;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    color: #da4ea2;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(225,192,255);
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`

 
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
 
`;

const Projects = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="projects">
      <Container id="project-container">
        <Left id="left-container">
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;