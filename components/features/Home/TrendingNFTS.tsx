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

const TrendingNFTS = (props: Props) => {
  return (
    <section className="TrendingCollections container p-12 mt-8 mx-auto">
      <h2 className="text-center">Boki Fan Art</h2>
      <div className="flex justify-between">
        <Carousel itemWidth={389}>
          {items.map((item, index) => (
            <CarouselItem key={item.title + index.toString()}>
              <article className="mt-8" style={{ padding: "0 12px" }}>
                <NFTCard item={item} />
              </article>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingNFTS;
