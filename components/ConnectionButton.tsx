import { ConnectKitButton } from "connectkit";
import React from "react";


import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: linear-gradient(90deg, #902784 27.93%, #68299A 71.62%, #68299A 100%);
  font-size: 14px;
  letter-spacing: 0.32em;
  font-weight: 700;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ConnectionButton = () => {
    return (
        <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "CONNECT WALLET"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
       )
    };
export default ConnectionButton