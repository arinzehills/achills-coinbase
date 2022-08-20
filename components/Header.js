import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import TransferModal from "./modal/TransferModal";

Modal.setAppElement("#__next");

const Header = ({
  walletAddress,
  connectWallet,
  sanityTokens,
  thirdWebTokens,
}) => {
  const router = useRouter();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%,-50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10,11,13,0.75)",
    },
  };
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
        )}
        <Button>Buy / Sell</Button>
        <Link href={"/?transfer=1"}>
          <Button2>Send / Recieve</Button2>
        </Link>
      </ButtonContainer>

      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 0.5px solid #e7e8f1;
  display: flex;
  align-items: center;
  // margin-top: 44rem;
`;
const Button = styled.div`
  background: linear-gradient(#f600b5, #ff0000);
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
  }
`;
const Button2 = styled.div`
  background: #000;
  border: 1px solid #f600b5;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`;
const WalletAddress = styled.div`
  font-size: 0.8rem;
`;

export default Header;
