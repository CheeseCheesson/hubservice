import { ImageFactory, ImageMap } from "../../assets";
import ImageItems from "../Widgets/ImageItems";

const Home = () => {
  const handleClick = () => {
    const destinationLat = 46.632851;
    const destinationLng = 38.668475;
  
    // Формирование ссылки с координатами места назначения
    const url = `https://yandex.ru/maps/?rtext=~${destinationLat},${destinationLng}&rtt=auto`;
  
    // Переход на Яндекс.Карты Навигатор с автоматическим маршрутом до места назначения
    window.location.href = url;
  };
  return (
    <>
      <div className="flex mb-28">
        <div className="px-9 py-16 bg-gunmetal">
          {/* <div className="flex flex-col gap-9 text-3xl text-white mb-28">
            <div className="">Главная</div>
            <div className="">Ремонтируем...</div>
            <div className="">Брэнды</div>
          </div> */}
          <div className="flex flex-col items-start gap-20  text-3xl text-white mb-28">
            <button className="flex items-center justify-center bg-vermilion py-10 px-16 dropShadow-3xl min-w-[286px]">Позвонить</button>
            <button onClick={handleClick} className="flex items-center justify-center bg-midnight-blue py-10 px-16 dropShadow-3xl min-w-[286px]">Доехать</button>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col bg-maize px-2 py-7">
              <div className="text-4xl text-center font-bold mb-6">Адрес</div>
              <div className="flex flex-col text-xl leading-[63px] mb-20">
                <div className="">ул. Первомайская 91,</div>
                <div className="whitespace-nowrap">станица Старощербиновская,</div>
                <div className="">Краснодарский край</div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl mb-4">с 09:00 до 21:00</span>
                <span className="text-xl mb-4">Без перерыва и выходных</span>
                <div className=""><img src={ImageMap.map} alt="" /></div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center bg-white-smoke">
          <div className="text-7xl mb-11">Ремонт любой сложности</div>
          <div className="text-6xl text-vermilion mb-9">Приём в ремонт:</div>
          <ImageItems />
          <div className="flex flex-col bg-black text-4xl text-white mx-9 py-10 px-8 gap-16 mt-auto">
            <span>Обслуживание компьютеров, ноутбуков, мониторов, телефонов, планшетов, принтеров, МФУ,  ЖК-телевизоров, DLP-проекторов, кондиционеров,  пылесосов, динамиков, мелкой бытовой техники.</span>
            <span className="underline">Заправка и обслуживание оргтехники.</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-72 bg-pumpkin-orange text-5xl text-white mb-28">
        <div className="h-5/6 bg-maroon w-full mx-7 flex justify-evenly items-center">
          <img src={ImageFactory.factory} alt="" className="w-60 h-52" />
          <span>Работаем в том числе и с предприятиями</span>
        </div>
      </div>
    </>

  );
};

export default Home;
