import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider';
declare var window: any

const Wallet = () => {

    const [account, setAccount] = useState<string | null>(null);
    const [chain, setChain] = useState<BigInt | null>(null);
    const [_, setProvider] = useState<ethers.BrowserProvider | null>(null);


    const connectWallet = async () => {
        if (typeof window === "undefined") {
            throw new Error("Cannot get Metamask without a window");
        }
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const userAddress = await (await signer).getAddress();

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

    const handleAccountChange = (accounts: string[]) => {
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

    const setAccountListener = (provider: any) => {
        provider.on("accountsChanged", handleAccountChange)
        provider.on("chainChanged", handleChainChange)
    }

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

            const ethereumProvider = await detectEthereumProvider()
            if (ethereumProvider) {
                setAccountListener(ethereumProvider)
            }

            // if (window.ethereum) {
            //     // Listen for account changes
            //     window.ethereum.on('accountsChanged', handleAccountChange)

            //     // Listen for network changes
            //     window.ethereum.on('chainChanged', handleChainChange);

            //     return () => {
            //         window.ethereum.removeListener('accountsChanged', handleAccountChange);
            //         window.ethereum.removeListener('chainChanged', handleChainChange);
            //     };
            // }

        }
        loadProvider()
    }, []);


    return (
        <div className='w-screen h-screen flex flex-col gap-2 justify-center items-center'>
            <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded">
                {!account ? 'Connect MetaMask' : 'MetaMask is connected'}
            </button>
            {account && <p>Connected account: {account}</p>}
            {chain && <p>Connected chain: {chain.toString(16)}</p>}
        </div>
    )
}

export default Wallet