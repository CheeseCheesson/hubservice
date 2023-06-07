import { ImageFactory, ImageMap } from "../../assets";
import { CurrentYear } from "../../utils";
import ImageItems from "../Widgets/ImageItems";

const Home = () => {
  const handleClick = () => {
    const destinationLat = 46.632851;
    const destinationLng = 38.668475;

    // Формирование ссылки с координатами места назначения
    const url = `https://yandex.ru/maps/?rtext=~${destinationLat},${destinationLng}&rtt=auto`;

    // Переход на Яндекс.Карты Навигатор с автоматическим маршрутом до места назначения
    window.open(url);
  };
  return (
    <>
      <div className="flex mb-28 sm:mb-10">
        <div className="px-9 py-16 bg-gunmetal xl:px-2 lg:flex lg:flex-col lg:justify-between lg:items-center sm:py-10 sm:px-1">
          {/* <div className="flex flex-col gap-9 text-3xl text-white mb-28">
            <div className="">Главная</div>
            <div className="">Ремонтируем...</div>
            <div className="">Брэнды</div>
          </div> */}
          <div className="flex flex-col items-start gap-20  text-3xl text-white mb-28 xl:items-center xl:gap-5 sm:mb-16">
            <a href="tel:+79628808256" className="flex items-center justify-center bg-vermilion py-10 px-16 dropShadow-3xl min-w-[286px] xl:min-w-[206px] xl:text-xl xl:py-5 xl:px-8 lg:px-4 lg:py-2 md:text-xl md:min-w-[156px]">Позвонить</a>
            <button onClick={handleClick} className="flex items-center justify-center bg-midnight-blue py-10 px-16 dropShadow-3xl min-w-[286px] xl:min-w-[206px] xl:text-xl xl:py-5 xl:px-8 lg:px-4 lg:py-2 md:text-xl md:min-w-[156px]">Доехать</button>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col bg-maize px-2 py-7 lg:py-2">
              <div className="text-4xl text-center font-bold mb-6 xl:text-3xl xl:mb-2 md:text-base">Адрес</div>
              <div className="flex flex-col text-xl leading-[63px] mb-20 xl:text-base xl:mb-5 xl:leading-[32px] md:text-xs md:leading-[24px]">
                <div className="">ул. Первомайская 91,</div>
                <div className="whitespace-nowrap">станица Старощербиновская,</div>
                <div className="">Краснодарский край</div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl mb-4 xl:text-xl">с 09:00 до 21:00</span>
                <span className="text-xl mb-4 xl:text-base">Без перерыва и выходных</span>
                <div className="lg:hidden"><img src={ImageMap.map} alt="" /></div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center bg-white-smoke">
          <div className="text-center text-7xl mb-11 xl:text-5xl lg:text-3xl lg:mt-4 lg:mb-5 md:text-base sm:text-sm">Ремонт любой сложности</div>
          <div className="text-6xl text-vermilion mb-9 xl:text-4xl lg:text-2xl md:text-sm md:mb-3 sm:hidden">Приём в ремонт:</div>
          <ImageItems />
          <div className="flex flex-col bg-black text-4xl text-white mx-9 py-10 px-8 gap-16 mt-auto xl:text-2xl lg:text-base lg:mx-2 lg:py-5 lg:px-4 lg:gap-8 sm:mt-0 sm:h-full xs:text-xs">
            <span>Обслуживание компьютеров, ноутбуков, мониторов, телефонов, планшетов, принтеров, МФУ,  ЖК-телевизоров, DLP-проекторов, кондиционеров,  пылесосов, динамиков, мелкой бытовой техники.</span>
            <span className="underline">Заправка и обслуживание оргтехники.</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-72 bg-pumpkin-orange text-3xl text-white mb-28  xl:text-xl xl:text-center sm:text-sm sm:h-36 sm:mb-10">
        <div className="h-5/6 bg-maroon w-full mx-7 flex justify-evenly items-center lg:mx-3">
          <img src={ImageFactory.factory} alt="" className="w-52 h-48  md:hidden" />
          <div className="lg:px-2">
            Мы сотрудничаем не только с частными лицами, но и с предприятиями</div>
        </div>
      </div>
      <footer className="bg-midnight-blue p-6 text-white text-center">
        © {CurrentYear} Все права защищены.
      </footer>
    </>
  );
};

export default Home;
