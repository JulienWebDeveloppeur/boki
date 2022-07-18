import { ReactNode } from "react";
import ImgCard from "components/UI/shared/ImgCard";
import TheSage from "assets/img/TheSage.png";
import Spring from "assets/img/Spring.png";
import Laroche from "assets/img/Laroche.png";
import Azure from "assets/img/Azure.png";
import Wooly from "assets/img/Wooly.png";
import BokiMascot from "assets/img/Boki_Mascot.png";
import Carousel, { CarouselItem } from "components/UI/shared/Carousel";

type Props = { children?: ReactNode };

const items = [
  {
    src: TheSage.src,
    title: "The Sage",
    description:
      "The oldest Boki in Boki Village, The Sage is a wise leader with a chid-at-heart demeanor who mentors all of the Boki people. The Sage raised Boki after his parents left for their Adventure; Boki thinks of The Sage as his grandparent, in a way. <br> <br>  The Sage upholds the values and decrees of the Boki, but is also paradoxically the one to help push Boki to go out on his Adventure. Deep down, The Sage has a dream of going out and seeing their World for themselves; but alas, they are a Dreamer and leader who must say. <br> <br>  Are there other Sages in the World of Boki?",
  },
  {
    src: Spring.src,
    title: "Spring",
    description:
      "Named after The Forever Spring, Spring is a Dreamer in Boki Village. He and Boki are close childhood friends, and Boki taught Spring how to be a Dreamer: draw maps, plan adventures, and communicate with Adventurers both at home and away in their World. <br> <br> However, he and Boki have a fundamental disagreement: Spring believes Dreamers and Adventurers should strictly stick to their given roles. When Boki goes out on his Adventure, Spring resents but envies  him. Yet, he helps Boki and his friends as they travel across their World. <br> <br> What is Spring's backstory...?",
  },
  {
    src: Laroche.src,
    title: "Laroche",
    description:
      "Laroche is a competitive Adventurer, experienced in the art of flight with the World’s creatures. Laroche accompanied her family on adventures from a young age, bucking tradition dictating that Adventurers must come of age before going out into their World. <br> <br> She offers her expertise to the fledgling Adventurers as they embark on their adventure, but has trouble emotionally connecting to creatures like Wooly. She joins Boki’s adventure to visit Aerostation and learn how to truly connect with their World’s flying creatures. <br> <br> The logo on Laroche's Captain's Hat sure looks familiar...",
  },
  {
    src: Azure.src,
    title: "Azure",
    description:
      "Azure has never ventured beyond her village, but she is ready to go on her first adventure; Boki has given her the perfect opportunity. Azure and Boki grew up together, with Azure’s top-of-class performance contrasting with Boki’s inconsistent performance. <br> <br> Azure is of two minds about her first adventure: excited to leave her village and explore, but nervous to to see how her book smarts translate to the real World. Her dream is to fulfill the destiny of her family’s Adventurer line, renowned for creating Mushroom Meadow. <br> <br> Mushroom Meadow and Shroom Mascot Clothing...could those be connected?",
  },
  {
    src: Wooly.src,
    title: "Wooly",
    description:
      'Wooly is Boki’s loyal sheep companion. Boki found Wooly as a lamb, lost in the forest neighboring his village. Wooly took to Boki quickly, and Adventurers in the Village attempted to teach Wooly how to fly—much like the other flying creatures of their World. <br> <br> However, Wooly deathly fears flying for unknown but deeply personal reasons. Despite her fear, Wooly is full of energy and loves to cuddle—so much so she doesn’t know her own size when plopping down on Boki and other friends for wool-filled cuddle sessions. <br> <br> Boki, always understanding, accepts Wooly—fear of flying and all—and welcomes her on his journey across the World of Boki. Though she can\'t speak, Wooly and Boki have developed their own unique way to communicate. It may or may not involve Boki secretly "baa·ing" like a sheep <br> <br> Wait...who are those flying mushrooms?',
  },
  {
    src: BokiMascot.src,
    title: "Boki Mascot",
    description:
      "Boki follows a long line of Dreamers. His mother and father revolutionized exploration in the World of Boki, creating technology that logged and saved all of the Adventurers’ handcrafted maps into an evolving world map back at home. <br> <br> Boki is his parents' only son, named after their World and the Boki people. They loved Boki so very much, but adventure called to them, including a rumor of a new Seed—the Second Seed—growing beyond the world they knew. <br> <br> Boki's parents broke tradition and followed in the Adventurers’ footsteps, determined to see their entire World themselves. They left Boki in the care of their home’s Boki Sage. They were never seen again. <br> <br> Inspired by his parents, Boki dedicated his childhood to poring over the history of their World. He refined his parents’ technology and built a portable map accessible to all Adventurers. <br> <br> Sometimes Boki's thirst for outside knowledge conflicted with his studies, but he held fast in his love of learning. He made friends with his fellow Boki and creatures, growing up alongside a young sheep, naming her Wooly, and forging a lifelong bond. <br> <br> Now, Boki dreams about the mystery of his parents. Are they still out there? Did they find the Second Seed? Where are they now? <br> <br> Adventure calls to Boki. And with Wooly and his friends, Boki steps in the path paved by his parents to be a Dreamer AND Adventurer and discover the World of Boki with his own eyes…and, by some miracle, find his parents along the way.",
  },
];

const TrendingCollections = (props: Props) => {
  return (
    <section className="TrendingCollections container p-12 mt-8 mx-auto">
      <h2 className="text-center">Boki Lore</h2>
      <div className="flex justify-between">
        <Carousel itemWidth={389}>
          {items.map((item, index) => (
            <CarouselItem key={item.title + index.toString()}>
              <article className="mt-8" style={{ padding: "0 12px" }}>
                <ImgCard item={item} />
              </article>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingCollections;
