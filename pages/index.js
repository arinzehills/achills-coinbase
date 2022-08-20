import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import { keyframes } from "styled-components";
import { ConnectWallet } from "@3rdweb/react";
import MainDashboard from "./MainDashboard";
export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper
    // style={{
    //   height: "100vh",
    //   maxWidth: "100vw",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignContent: "center",
    // }}
    >
      {address ? (
        <MainDashboard address={address} />
      ) : (
        <WalletConnect>
          <AnimatedGradientText>
            Hi, I am Arinze Chris Hills,Welcome to the achills coinbase platform
          </AnimatedGradientText>
          <img src="/images/manwithpc.png" height={"242px"} />
          <h1>Welcome to the achills coinbase platform </h1>
          <p style={{}}>Connect your wallet to login</p>
          <Button
            style={{
              background: "linear-gradient(#f600b5,#ff0000)",
            }}
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </Button>
          <Details>
            You need to have Metamask and be on Chrome to be able to run this
            app
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  height: 100vh;
  maxwidth: 100vw;
  display: grid;
  place-items: center;
`;
const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;
const Button = styled.div`
  background: linear-gradient(#f600b5, #ff0000);
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
  }
`;
const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #f600b5, #ff0000);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #63686f;
`;
