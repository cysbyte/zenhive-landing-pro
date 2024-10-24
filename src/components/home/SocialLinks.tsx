import twitter from '../../assets/home/header/twitter.svg'
import telegram from '../../assets/home/header/telegram.svg'
import youtube from '../../assets/home/header/youtube.svg'
import medium from '../../assets/home/header/medium.svg'
import email from '../../assets/home/header/email.svg'
import linkedin from '../../assets/home/header/linkedin.svg'


const SocialLinks = () => {
    const icons = [
        {
          id: 1,
          icon: twitter
        },
        {
          id: 2,
          icon: telegram
        },
        {
          id: 3,
          icon: youtube
        },
        {
          id: 4,
          icon: medium
        },
        {
          id: 5,
          icon: email
        },
        {
          id: 6,
          icon: linkedin
        },
      ]
  return (
    <div className='z-10 flex justify-center items-center gap-[0.88rem] md:gap-4'>
          {
            icons.map((item)=>(
              <img className='w-[28px] md:w-auto' key={item.id} src={item.icon}/>
            ))
          }
        </div>
  )
}

export default SocialLinks