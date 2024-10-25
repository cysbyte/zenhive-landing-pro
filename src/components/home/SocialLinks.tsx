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
          icon: twitter,
          link: 'https://x.com/azen_protocol'
        },
        {
          id: 2,
          icon: telegram,
          link: 'https://t.me/azenprotocol'
        },
        {
          id: 3,
          icon: youtube,
          link: ''
        },
        {
          id: 4,
          icon: medium,
          link: 'https://medium.com/@azenprotocol'
        },
        {
          id: 5,
          icon: email,
          link: 'mailto:Support@azenprotocol.io'
        },
        {
          id: 6,
          icon: linkedin,
          link: 'https://www.linkedin.com/company/azenprotocol/'
        },
      ]
  return (
    <div className='z-10 flex justify-center items-center gap-[0.88rem] md:gap-4'>
          {
            icons.map((item)=>(
              <a href={item.link} target='_blank'>
                <img className='w-[28px] md:w-auto' key={item.id} src={item.icon}/>
              </a>
            ))
          }
        </div>
  )
}

export default SocialLinks