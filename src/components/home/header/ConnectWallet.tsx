import { ethers } from "ethers";
import { useEffect } from "react";
import { useWalletContext } from "../../../providers/WalletProvider";

declare var window: any

const ConnectWallet = () => {

  const {  setAccount, setChain, provider, setProvider } = useWalletContext();
  

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
    debugger
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
    <button className='w-full md:w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] tracking-wide cursor-pointer p-[2px]'
    onClick={handleConnectWallet}
    ><p className='bg-black px-8 py-5 rounded-full'>Connect Wallet</p>
    </button>

  )
}

export default ConnectWallet