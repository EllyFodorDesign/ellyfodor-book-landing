"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fafafa;
  text-align: center;
`;

const HeroSection = () => {
  return (
    <Section>
      <h1>Ellinor Fodor Johansson</h1>
      <p>Författare till böcker om NPF – med insikt, empati och erfarenhet.</p>
    </Section>
  );
};

export default HeroSection;
