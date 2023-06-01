// import ButtonGroup from "./../Features/ButtonGroup";
// import Article from "../Features/Article";
// import Image from "../Features/Image";
// import Warranty from "../Features/Warranty";
// import Contacts from "../Features/Contacts";


const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="px-9 py-16 bg-gunmetal">
          <div className="flex flex-col gap-9 text-3xl text-white mb-28">
            <div className="">Главная</div>
            <div className="">Ремонтируем...</div>
            <div className="">Брэнды</div>
          </div>
          <div className="flex flex-col items-start gap-20  text-3xl text-white mb-28">
            <button className="flex items-center justify-center bg-vermilion py-10 px-16 dropShadow-3xl min-w-[286px]">Позвонить</button>
            <button className="flex items-center justify-center bg-midnight-blue py-10 px-16 dropShadow-3xl min-w-[286px]">Доехать</button>
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
                <span className="text-xl">Без перерыва и выходных</span>
                <div className="">map</div>
              </div>
            </div>
          </div>

        </div>
        <div className="">
          <div className="">Ремонт любой сложности</div>
          <div className="">Приём в ремонт:</div>
          <div className="">cardBlock</div>
          <div className="">
            <span>Обслуживание компьютеров, ноутбуков, мониторов, телефонов, планшетов, принтеров, МФУ,  ЖК-телевизоров, DLP-проекторов, кондиционеров,  пылесосов, динамиков, мелкой бытовой техники.</span>
            <span>Заправка и обслуживание оргтехники.</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <img src="" alt="" />
          <span>Работаем в том числе и с предприятиями</span>
        </div>
      </div>
    </>

  );
};

export default Home;
