type NFTItem = {
  src: string;
  title: string;
  artistTag: string;
};

type Props = { item: NFTItem };

const cardStyle = {
  width: "365px",
  height: "476px",
};

const imgStyle = {
  height: "365px",
};

const NFTCard = (props: Props) => {
  const { item } = props;
  return (
    <div
      style={cardStyle}
      className="NFTCard bg-light rounded-3xl flex flex-col"
    >
      <img
        src={item.src}
        className="rounded-t-3xl w-full object-cover"
        style={imgStyle}
      />
      <div className="p-6 py-4" style={{ borderTop: "solid #EBEBEB 1px" }}>
        <div>
          <p className="font-bold text-grey-700 text-2xl mb-2">{item.title}</p>
          {item.artistTag && (
            <p className="font-bold text-primary text-xl cursor-pointer">
              <a
                href={`https://twitter.com/${item.artistTag}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.artistTag}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
