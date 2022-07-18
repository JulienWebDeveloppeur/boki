import Link from "next/link";

type ImgItem = { src: string; title: string };

type Props = { item: ImgItem };

const cardStyle = {
  width: "365px",
  height: "500px",
};

const ImgCard = (props: Props) => {
  const { item } = props;

  return (
    item && (
      <Link
        href={{
          pathname: "/boki",
          query: item,
        }}
      >
        <div
          style={cardStyle}
          className="ImgCard bg-blackLight rounded-3xl relative cursor-pointer"
        >
          <img
            src={item.src}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 p-8 ">
            <p
              className="font-bold text-light text-2xl text-right"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              {item.title}
            </p>
          </div>
        </div>
      </Link>
    )
  );
};

export default ImgCard;
