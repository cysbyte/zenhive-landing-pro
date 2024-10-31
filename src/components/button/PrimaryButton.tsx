interface PrimaryButtonProps {
    text: string
    onClick: () => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className='w-full md:w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] px-8 py-5 rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] cursor-pointer'>{props.text}</button>
    )
}

export default PrimaryButton