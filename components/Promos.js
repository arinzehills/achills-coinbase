import React from "react";
import styled from "styled-components";

const Promos = () => {
  return (
    <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description> Earn up to 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: "1.5rem" }}>
          $0.0000066 <span>2.84%</span>
        </Additional>
      </OfferCard>
      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description> Earn up to 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: "#f600b5" }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
  );
};

export default Promos;
const Wrapper = styled.div`
  height: calc(100vh);
  border: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;
const OfferCard = styled.div`
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  width: 20rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`;
const Description = styled.div``;

const Placeholder = styled.div`
  flex: 1;
`;
const Additional = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`;
