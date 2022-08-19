import React, { useState } from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Recieve from "./Recieve";
import Transfer from "./Transfer";
import TransferStatus from "./TransferStatus";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);
  const selectedStyle = {
    color: "#f600b5",
    border: "1px solid #f600b5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };
  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "receive":
        return (
          <Recieve
            selectedToken={selectedToken}
            walletAddress={walletAddress}
            setAction={setAction}
          />
        );
      case "transferring":
        return <TransferStatus messageStatus={"transferring..."} />;
      case "transferred":
        return <TransferStatus messageStatus={"transfer complete"} />;
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            setSelectedToken={setSelectedToken}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );

      default:
        return <Transfer selectedToken={selectedToken} />;
    }
  };
  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p style={{}}>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Recieve</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;
const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
