
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { ParticleNetwork } from "@particle-network/auth";
import { ParticleProvider } from "@particle-network/provider";
import { ParticleSigner } from "@alchemy/aa-signers/particle";
import { LocalAccountSigner } from "@alchemy/aa-core";
import { polygonMumbai } from "viem/chains";
import { WalletClientSigner,  SmartAccountSigner } from "@alchemy/aa-core";
import { createWalletClient, custom } from "viem";
import { ethers } from "ethers";
import React, { useState, useMemo, useEffect, useContext } from "react";
const chain = polygonMumbai;
const PRIVATE_KEY = "0x4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3"; // Replace with the private key of your EOA that will be the owner of Light Account


const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const eoaSigner =
  LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY); 




const AlchmeyContext = React.createContext({
  ownerAddress: undefined,
  accountAddress: undefined,
  provider: undefined,
  handleLogin:undefined,
  userInfo:undefined,

})

export const UseAlchemy = () => {
  return useContext(AlchmeyContext)
}

export const BiconomyProvider = ({ children }) => {
  useEffect(() => {
    return () => {
    };
  }, []); 


  

  const [loading, setLoading] = useState(false)
  const [smartAccountAddress, setSmartAccountAddress] = useState()
  const [providerState, setProviderState] = useState(null);
  const [accountAddress, setAccountAddress] = useState(null);
  const [ownerAddress, setOwnerAddress] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  console.log('BiconomyProvider rendering...');


  const handleLogin= async () => {
    alert("Heyy")
    const particleSigner = await createParticleSigner();
    setUserInfo(await particleSigner.getAuthDetails());

    const provider = await initializeProvider(particleSigner);
    setProviderState(provider);

    if (provider?.account?.owner) {
      const owner = await provider.account.owner.getAddress();
      const smart  = await provider.getAddress();
      setOwnerAddress(owner);
      setAccountAddress(smart);
    }
    console.log(await provider.account.owner.getAddress());
    console.log(await provider.getAddress())
  }



  const createParticleSigner = async () => {
    const particleSigner = new ParticleSigner({
       projectId: "2509d133-0dd5-409a-bf0d-7db2b6648bbf",
      clientKey: "cbdskjEjAxMDhYksv0ubDZo51l599QCOHZqBpPA0",
      appId: "efb5c91d-cfae-49d5-bacb-8b30e35e83f9",
      chainName: "polygon",
      chainId: 80001,
    });
  
    await particleSigner.authenticate({
      loginOptions: {},
      login: async (loginOptions) => {
        await particleSigner.inner.auth.login(loginOptions);
      },
    });
  
    return particleSigner;
  };


  const initializeProvider = async (particleSigner) => {
    return new AlchemyProvider({
      apiKey: "D5xSFqtTLJe_xdCJ24O4A8S6z2tafhCv",
      chain: polygonMumbai,
      entryPointAddress,
    }).connect(rpcClient => new LightSmartContractAccount({
      entryPointAddress,
      chain: rpcClient.chain,
      owner: particleSigner,
      factoryAddress: "0x000000893A26168158fbeaDD9335Be5bC96592E2",
      rpcClient,
    }));
  };
  

  return (
    <AlchmeyContext.Provider
      value={{
        ownerAddress: ownerAddress,
        accountAddress: accountAddress,
        provider: providerState,
        userInfo:userInfo,
        handleLogin,
      }}
    >
      {children}
    </AlchmeyContext.Provider>
  )
}