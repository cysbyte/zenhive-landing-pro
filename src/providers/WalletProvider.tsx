import { ethers } from 'ethers';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface WalletContextType {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  account: string | null;
  setAccount: Dispatch<SetStateAction<string | null>>;
  chain: BigInt | null;
  setChain: Dispatch<SetStateAction<BigInt | null>>;
  provider: ethers.BrowserProvider | null;
  setProvider: Dispatch<SetStateAction<ethers.BrowserProvider | null>>;
}

const defaultContext: WalletContextType = {
  showMenu: false,
  setShowMenu: () => { },
  account: null,
  setAccount: () => { },
  chain: null,
  setChain: () => { },
  provider: null,
  setProvider: () => { }
};

const WalletContext = createContext<WalletContextType>(defaultContext);

export const AccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chain, setChain] = useState<BigInt | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  return (
    <WalletContext.Provider value={{
      account,
      setAccount,
      chain,
      setChain,
      showMenu,
      setShowMenu,
      provider,
      setProvider,
    }}>
      {children}
    </WalletContext.Provider>
  );
};

// Create a custom hook to use the context
export const useWalletContext = () => useContext(WalletContext);
