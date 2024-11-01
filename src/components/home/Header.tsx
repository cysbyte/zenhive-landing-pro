import { useCallback, useMemo } from "react";
import { useWalletContext } from "../../providers/WalletProvider";
import Avatar from "./header/Avatar";
import ConnectWallet from "./header/ConnectWallet"
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  const { account,  } = useWalletContext();
  const handleLogoClick = useCallback(()=>{
    navigate('/')
  }, [])

  const AccountComponent = useMemo(() => {
    return account ? <Avatar /> : <ConnectWallet />;
  }, [account]);

  return (
    <div className='z-10 pt-5 bg-transparent flex justify-between items-center px-10 md:px-24 py-4'>
      <h3 className='z-10 font-chillax font-[500] text-2xl text-white leading-[34px] cursor-pointer'
      onClick={handleLogoClick}
      >ZenHive</h3>
      <div className="block md:block z-10">
      {AccountComponent}
      </div>
    </div>

  )
}

export default Header