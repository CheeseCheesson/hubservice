import { useState, useEffect, FC } from "react";
import { ImageItemsSrc } from "../../assets";
interface ImageItem {
  color: string;
  src: string;
}

const imageItems: ImageItem[] = [
  { color: "rgba(236, 106, 210, 0.2)", src: ImageItemsSrc.cartridgewithprinter },
  { color: "rgba(137, 236, 153, 0.2)", src: ImageItemsSrc.computer },
  { color: "rgba(82, 168, 236, 0.2)", src: ImageItemsSrc.laptop },
  { color: "rgba(195, 224, 49, 0.2)", src: ImageItemsSrc.machine },
  { color: "rgba(247, 134, 77, 0.2)", src: ImageItemsSrc.microwave },
  { color: "rgba(132, 255, 56, 0.2)", src: ImageItemsSrc.monic },
  { color: "rgba(236, 106, 210, 0.2)", src: ImageItemsSrc.phone },
  { color: "rgba(137, 236, 153, 0.2)", src: ImageItemsSrc.printer },
  { color: "rgba(82, 168, 236, 0.2)", src: ImageItemsSrc.tablet },
];

const ImageItems: FC = () => {
  const [items, setItems] = useState<ImageItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = imageItems.map((item) => ({
        ...item,
        color: getRandomColor(),
      }));
      setItems(newItems);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRandomColor = (): string => {
    const colors = ["rgba(236, 106, 210, 0.2)", "rgba(137, 236, 153, 0.2)", "rgba(82, 168, 236, 0.2)", "rgba(195, 224, 49, 0.2)", "rgba(247, 134, 77, 0.2)", "rgba(132, 255, 56, 0.2)"];
    const randomIndex: number = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="flex flex-wrap mx-9 justify-center gap-12 mb-5">
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt=""
          className="w-64 h-56 rounded-3xl px-2 py-4"
          style={{ backgroundColor: item.color, transition: "background-color 0.7s" }}
        />
      ))}
    </div>
  );
};

export default ImageItems;
