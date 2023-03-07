import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const HireMeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(90deg, rgba(183,103,255,1) 0%, rgba(222,75,255,1) 92%);;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #b767ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const ContactButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #b767ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #b767ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <HireMeButton>Hire Me</HireMeButton>
      <ContactButton>Contact</ContactButton>
    </AccessibilityContainer>
  );
}