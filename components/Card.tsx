import P from "./P"



export default function Card ({imageText, title, text}:{imageText: string, title:string, text:string}) {
    return (
        <div className=' m-2 rounded-lg border-[1px] bg-[#090909]/[0.8] border-[#343434] py-3 px-5 w-[300px]'>
          <h2 className="text-[#E4E4E7] py-3 pb-0 text-[22px] md:text-[23px]">{title}</h2>
          <P text={text} className="" />
          <div>
            <img src={`/../img/${imageText}.png`} alt="fladf" className="pb-3" />
          </div>
        </div>
    )
}


export const LineCard = ({imageText, title}:{imageText: string, title:string}) => {
    return (
        <div className='m-2 rounded-full border-[1px] border-[#343434] p-1 w-[250px] flex'>
          <div>
            <img src={`/../icons/${imageText}.png`} alt="fladf" className="" width={55} height={55} />
          </div>
          <h2 className="text-[#E4E4E7] pt-4 text-[14px] md:text-[16px] pl-3 pr-0
          bg-gradient-to-r from-[#2D2D2D] to-[#ABABAB] inline-block text-transparent bg-clip-text">{title} </h2>
        </div>
    )
}

export const SingleLineCard = ({title}:{title:string}) => {
    return (
        <div className='m-2 rounded-full border-[1px] border-[#343434] px-5 py-2 flex'>
          <h2 className="font-semibold text-[#E4E4E7] text-[14px] md:text-[16px]
          bg-gradient-to-r from-[#2D2D2D] to-[#ABABAB] inline-block text-transparent bg-clip-text">{title} </h2>
        </div>
    )
}
