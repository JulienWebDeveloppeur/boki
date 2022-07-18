import { IconButton } from "@mui/material";
import {
  ReactNode,
  useState,
  Children,
  cloneElement,
  useRef,
  useEffect,
} from "react";
import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";

type CarouselProps = { children?: ReactNode; itemWidth: number };

type CarouselItemProps = { children?: ReactNode };

const innerStyle = {
  margin: "0 auto",
};

const carouselItemStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

export const CarouselItem = ({ children }: CarouselItemProps) => {
  return <div style={{ ...carouselItemStyle }}>{children}</div>;
};

const Carousel = ({ children, itemWidth = 0 }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsDisplayed, setItemsDisplayed] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current?.offsetWidth) {
      const carouselWidth = ref?.current.offsetWidth;
      const carouselHeight = ref?.current.offsetHeight;
      const itemsDisplayed = Math.floor(carouselWidth / itemWidth);
      setCarouselHeight(carouselHeight);
      setItemsDisplayed(itemsDisplayed);
    }
  }, []);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      const number = Children.count(children) / itemsDisplayed;
      newIndex = number - 1;
    } else if (newIndex >= Children.count(children) / itemsDisplayed) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="w-full" ref={ref}>
      <div
        className="relative mx-auto"
        style={{
          width: `${itemWidth * itemsDisplayed}px`,
        }}
      >
        <IconButton
          color="secondary"
          className="absolute arrow-btn z-10"
          style={{ top: carouselHeight / 2, left: "-1.25rem" }}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowBackIosNewOutlined />
        </IconButton>
        <IconButton
          style={{ top: carouselHeight / 2, right: "-1.25rem" }}
          color="secondary"
          className="absolute arrow-btn top-0 z-10"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowForwardIosOutlined />
        </IconButton>
        <div
          className="overflow-hidden"
          style={{
            ...innerStyle,
            width: `${itemWidth * itemsDisplayed}px`,
          }}
        >
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              transition: "transform 0.5s",
              transform: `translateX(-${
                // prettier-ignore
                (itemsDisplayed * itemWidth) * activeIndex
              }px)`,
            }}
          >
            {Children.map(children, (child: any, index) => {
              return cloneElement(child, { width: `${itemWidth}px` });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
