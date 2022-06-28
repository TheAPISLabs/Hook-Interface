import React, { useState } from "react";
import styled from "styled-components";
import Blockie from "./Blockie";
import { ellipseAddress, getChainData } from "../helpers/utilities";
import { fonts, transitions } from "../styles";
import Button from "./Button";
import { isMobile } from "../../src/helpers/utilities";
// import ContractAddress from "src/utils/contract";
// import ClaimAbi from "../abi/Claim.js";
// import { useConnect } from "src/hooks/useConnect.js";
import { useWeb3React } from "@web3-react/core";
// import MetamaskConnect from "./MetamaskConnect";
// import { useEagerConnect } from "src/hooks/useMatemask.js";
// import Modal from "./Modal";
import aplImgs from "../assets/Group.png";
import WalletModal from "./WalletModal";
const SHeaderBox = styled.div`
  width: 100%;
  height: 120px;
  align-items: center;
  background: #000000;
`;
const SHeader = styled.div`
  margin-top: -1px;
  width: 1210px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  //   max-width: 100%;
  background: #000000;
  margin: 0 auto;
`;
const HowAndFaq = styled.div`
  width: 520px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 165px;
`;
const About = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #fafafa;
`;
const MSHeader = styled.div`
  margin-top: -1px;
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  background: #161426;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
`;
const AplImg = styled.img`
  width: 139px;
  height: 38px;
`;
const MAplImg = styled.img`
  width: 100%;
`;

const SActiveChain = styled(SActiveAccount as any)`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  & p {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  & p:nth-child(2) {
    font-weight: bold;
  }
`;

const SBlockie = styled(Blockie as any)`
  margin-right: 10px;
`;

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
  color: #fff;
`;

// const SUnsupportedChain = styled.div`
//   transition: ${transitions.base};
//   font-weight: bold;
//   color: red;
// `;

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    // transform: translateY(-1px);
    opacity: 0.5;
  }
  color: #fff;
`;
const SConnectButton = styled(Button as any)`
  font-size: ${fonts.size.large};
  background: #7651ff;
  width: 186px;
  height: 54px;
  color: #fff;
  & > div {
    background: transparent !important;
  }
`;
const MSConnectButton = styled(Button as any)`
  font-size: ${fonts.size.medium};
  background: #7651ff;
  border-radius: 16px;
  width: 160px;
  height: 64px;
  color: #fff;
  & > div {
    background: transparent !important;
  }
`;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  connect: () => void;
  fetching: boolean;
}

const Header = ({ connected, killSession, connect, fetching }: IHeaderProps) => {
  let activeChain = null;
  const { account, chainId, deactivate } = useWeb3React();
  const [isShowModal, setIsShowModal] = useState(false);
  //   const triedEager = useEagerConnect();
  try {
    activeChain = chainId ? getChainData(chainId).name : null;
    console.log(activeChain);
  } catch (error) {
    console.error(error);
  }

  //   const ClaimContract = useConnect(ClaimAbi, ContractAddress.claim[chainId ?? 1]);
  //   const claimToken = () => {
  //     ClaimContract.methods.claimTokens().send({ from: account });
  //   };

  return isMobile() ? (
    <>
      <MSHeader>
        {account ? (
          <SActiveAccount>
            <SBlockie address={account} />
            {activeChain ? (
              <SAddress connected={connected}>{ellipseAddress(account)}</SAddress>
            ) : (
              <SAddress connected={connected}>Chain not supported.</SAddress>
            )}
            <SDisconnect
              connected={connected}
              onClick={() => {
                killSession();
                deactivate();
              }}
            >
              {activeChain} {"Disconnect"}
            </SDisconnect>
          </SActiveAccount>
        ) : (
          <>
            <MSConnectButton
              onClick={() => {
                setIsShowModal(true);
              }}
            >
              {" "}
              {"Connect"}
            </MSConnectButton>
          </>
        )}
        <SActiveChain>
          <a href="https://www.theapis.xyz/">
            <MAplImg src="https://etherscan.io/token/images/theapis_32.png" />
          </a>
        </SActiveChain>

        <WalletModal
          setIsShowModal={setIsShowModal}
          isShowModal={isShowModal}
          connect={connect}
          fetching={fetching}
        />
      </MSHeader>
    </>
  ) : (
    <>
      <SHeaderBox>
        <SHeader>
          <SActiveChain>
            <a href="https://www.theapis.xyz/">
              {/* <p>Connected to</p>
              <p>{activeChain}</p> */}
              {/* <SConnectButton onClick={claimToken} left fetching={fetching}>
            {"Claim"}
          </SConnectButton> */}
              <AplImg src={aplImgs} />
            </a>
          </SActiveChain>
          <HowAndFaq>
            <About>Discover</About>
            <About>Artwork</About>
            <About>About</About>
            <About>FAQ</About>
          </HowAndFaq>
          {account ? (
            <SActiveAccount>
              <SBlockie address={account} />
              {activeChain ? (
                <SAddress connected={connected}>{ellipseAddress(account)}</SAddress>
              ) : (
                <SAddress connected={connected}>Chain not supported.</SAddress>
              )}
              <SDisconnect
                connected={connected}
                onClick={() => {
                  killSession();
                  deactivate();
                }}
              >
                {activeChain} {"Disconnect"}
              </SDisconnect>
            </SActiveAccount>
          ) : (
            <>
              <SConnectButton
                onClick={() => {
                  setIsShowModal(true);
                }}
              >
                {" "}
                {"Connect"}
              </SConnectButton>
            </>
          )}
          {/* <Modal
        show={isShowModal}
        opacity={0.2}
        toggleModal={() => {
          setIsShowModal(false);
        }}
      >
        <MetamaskConnect triedEager={triedEager} />
        <SConnectButton right onClick={connect} fetching={fetching}>
          {"Connect"}
        </SConnectButton>
      </Modal> */}
          <WalletModal
            setIsShowModal={setIsShowModal}
            isShowModal={isShowModal}
            connect={connect}
            fetching={fetching}
          />
        </SHeader>
      </SHeaderBox>
    </>
  );
};

export default Header;
