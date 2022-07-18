import { ethers } from "ethers";
import React from "react";

interface EthersProviders {
  provider?: ethers.providers.Web3Provider;
  signer?: ethers.providers.JsonRpcSigner;
  setProvider: (provider: ethers.providers.Web3Provider) => void;
  setSigner: (signer: ethers.providers.JsonRpcSigner) => void;
}

export const EthersProviders: EthersProviders = {
  provider: undefined,
  signer: undefined,
  setProvider: () => {},
  setSigner: () => {},
};

export const EthersProvidersContext = React.createContext(EthersProviders);
