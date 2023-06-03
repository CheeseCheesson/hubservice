import { FC } from "react"

const Header: FC = () => {

  return (
    <div className="bg-midnight-blue mb-9">
      <div className="w-full h-32 max-w-container mx-auto text-white px-9 flex justify-between items-center text-4xl md:text-xl md:px-2">
        <div className="logo">Сервис OK</div>
        <div className="contact">8(962) 880-82-56</div>
      </div>
    </div>

  )
}

export default Header
