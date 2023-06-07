import { FC } from "react"

const Header: FC = () => {

  return (
    <div className="bg-midnight-blue mb-10">
      <div className="w-full h-32 max-w-container mx-auto text-white px-9 flex justify-between items-center text-4xl md:text-xl md:px-2">
        <div className="logo">Сервис OK</div>
        <a href="tel:+79628808256" className="contact">8(962) 880-82-56</a>
      </div>
    </div>

  )
}

export default Header
