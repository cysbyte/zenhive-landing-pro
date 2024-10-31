import { useWalletContext } from "../../providers/WalletProvider";
import Avatar from "./header/Avatar";
import ConnectWallet from "./header/ConnectWallet"

const Header = () => {

  const { account,  } = useWalletContext();

  return (
    <div className='z-10 pt-5 bg-transparent flex justify-between items-center px-10 md:px-24 py-4'>
      <h3 className='z-10 font-chillax font-[500] text-2xl text-white leading-[34px] cursor-pointer'>ZenHive</h3>
      <div className="block md:block z-10">
        {/* <SocialLinks /> */}
        {account ?  <Avatar/>
        : <ConnectWallet/>}
      </div>
    </div>

  )
}

export default Header