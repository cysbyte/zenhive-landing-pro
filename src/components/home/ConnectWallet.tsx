import { ethers } from "ethers";
import { useEffect, useState } from "react";
import bgConnectWallet from '../../assets/home/header/bg-connect-wallet.svg'
declare var window: any

const ConnectWallet = () => {

  const [, setAccount] = useState<string | null>(null);
  const [, setChain] = useState<BigInt | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const handleAccountChange = (accounts: string[]) => {
    // window.location.reload()
    console.log(accounts)
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      console.log("Account changed to:", accounts[0]);

    } else {
      setAccount(null);
      console.log("MetaMask is locked or no accounts are available.");
    }
  };
  const handleChainChange = (chainId: BigInt) => {
    setChain(chainId)
  };

  const handleConnectWallet = async () => {
    if (typeof window === "undefined") {
      throw new Error("Cannot get Metamask without a window");
    }
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();

        setProvider(provider);
        setAccount(userAddress);
        setChain((await provider.getNetwork()).chainId)
        sessionStorage.setItem('MetaMaskConnected', '1')
        console.log("Connected account:", userAddress);
      } catch (error) {
        console.error("Failed to connect MetaMask", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  useEffect(() => {
    const loadProvider = async () => {
      if (sessionStorage.getItem('MetaMaskConnected') === '1') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await (await signer).getAddress();

        setProvider(provider);
        setAccount(userAddress);
        setChain((await provider.getNetwork()).chainId)
      }

      if (window.ethereum) {
        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountChange)

        // Listen for network changes
        window.ethereum.on('chainChanged', handleChainChange);
        // window.ethereum.on('connect', ()=>console.log('connected'));
        // window.ethereum.on('disconnect', ()=>console.log('disconnected'));

        return () => {
          window.ethereum.removeListener('accountsChanged', handleAccountChange);
          window.ethereum.removeListener('chainChanged', handleChainChange);
        };
      }

    }
    loadProvider()
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const signer = await provider?.getSigner();
      const userAddress = await signer?.getAddress();
      if (userAddress) {
        setAccount(userAddress)
      }
    }
    provider && getAccount()
  }, [provider])

  return (
    <img className="cursor-pointer z-10" onClick={handleConnectWallet} src={bgConnectWallet} alt=""/>
  )
}

export default ConnectWallet