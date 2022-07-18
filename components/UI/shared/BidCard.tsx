import BokiWorld from "assets/img/BokiWorld.png";

type Props = { item?: any };

const cardStyle = {
  width: "100%",
  height: "100%",
};

const BidCard = (props: Props) => {
  return (
    <div
      style={cardStyle}
      className="BidCard pl-8 rounded-3xl flex flex-col justify-between"
    >
      <img src={BokiWorld.src} className="rounded-3xl" alt="boki world map" />
    </div>
  );
};

export default BidCard;
