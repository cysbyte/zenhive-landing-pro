import SocialLinks from "./SocialLinks"

const Header = () => {

  return (
    <div className='z-10 pt-8 bg-transparent flex justify-between items-center px-10 md:px-24 py-4'>
      <h3 className='z-10 font-chillax font-[500] text-2xl text-white leading-[34px] cursor-pointer'>ZenHive</h3>
      <div className="hidden md:block">
        <SocialLinks />
      </div>
    </div>

  )
}

export default Header