import defaultAvatar from '../../../assets/home/header/default-avatar.svg'
import profileIcon from '../../../assets/home/menu/profile.svg'
import shareIcon from '../../../assets/home/menu/share.svg'
import disconnectIcon from '../../../assets/home/menu/disconnect.svg'

import { useNavigate } from "react-router-dom";
import { useWalletContext } from '../../../providers/WalletProvider';

const Avatar = () => {
    const navigate = useNavigate()
    const { showMenu, setShowMenu, setAccount, provider, setProvider } = useWalletContext();
    const menu = [
        {
            id: 1,
            name: 'Profile',
            icon: profileIcon,
        },
        {
            id: 2,
            name: 'Share and Earn',
            icon: shareIcon
        },
        {
            id: 3,
            name: 'Disconnect',
            icon: disconnectIcon
        },
    ]
    const handleItemClick = (itemId: number)=>{
        if(itemId === 1) {
            navigate('/profile')
        }
        if(itemId === 3) {
            setProvider(null)
            setAccount(null)
            provider?.pause()
            sessionStorage.setItem('MetaMaskConnected', '0')
        }
    }
    return (
        <div className='relative cursor-pointer'
            tabIndex={0}
            onClick={() => setShowMenu(!showMenu)}
            onBlur={() => setShowMenu(false)}
        >
            <img src={defaultAvatar} alt="" />
            {
                showMenu && <div className='absolute flex flex-col gap-0 bg-[#202020] top-[110%] left-0 rounded-lg p-4 w-56'>
                    {
                        menu.map((item) => (
                            <div className='flex items-center justify-start gap-3 cursor-pointer hover:bg-[#404040] px-4 py-4 rounded-md' key={item.id}
                            onClick={()=>handleItemClick(item.id)}>
                                <img src={item.icon} alt='' />
                                <p className='text-white text-nowrap text-[18px] leading-[22px]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Avatar