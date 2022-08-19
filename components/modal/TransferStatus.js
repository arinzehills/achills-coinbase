import React from "react";
import { Audio } from "react-loader-spinner";
const TransferStatus = ({ messageStatus }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(70vh)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {messageStatus === "transferring..." ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#41f1b6"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          <img src="/images/transferring.png" height={"142px"} />
        )}
        <h3
          style={{
            color: messageStatus !== "transferring..." && "#41f1b6",
            textTransform: "capitalize",
            letterSpacing: "0.3rem",
          }}
        >
          {messageStatus ?? ""}
        </h3>
      </div>
    </div>
  );
};

export default TransferStatus;
