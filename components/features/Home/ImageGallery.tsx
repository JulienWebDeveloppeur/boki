import { ReactNode } from "react";
import BeastQuit from "assets/img/BeastQuit.jpeg";
import Evee from "assets/img/Evee.jpeg";
import Darth from "assets/img/Darth.jpeg";
import Nyx from "assets/img/Nyx.jpg";
import Pixelsbykay from "assets/img/pixelsbykay.jpeg";
import RocSol from "assets/img/RocSol.jpeg";
import Carousel, { CarouselItem } from "components/UI/shared/Carousel";
import NFTCard from "components/UI/shared/NFTCard";

type Props = { children?: ReactNode };

const items = [
  {
    src: Evee.src,
    title: "Evee.eth",
    artistTag: "@eveexeeve",
  },
  {
    src: Nyx.src,
    title: "Nyx",
    artistTag: "@Nyxomnic",
  },
  {
    src: Darth.src,
    title: "Darth",
    artistTag: "@DarthNode",
  },
  {
    src: BeastQuit.src,
    title: "BeastQuit",
    artistTag: "@BeastQuit_Art",
  },
  {
    src: RocSol.src,
    title: "RocSol",
    artistTag: "@rocsolmiami",
  },
  {
    src: Pixelsbykay.src,
    title: "Pixelsbykay",
    artistTag: "@pixelsbykay",
  },
];

const ImageGallery = (props: Props) => {
  return (
    <section className="Discover container p-4 flex mt-8 mx-auto">
      <div className="grid grid-cols-5 gap-2 mx-auto">
        {items.map((item) => (
          <div className="w-full rounded" key={item.title}>
            <img
              src={item.src}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
