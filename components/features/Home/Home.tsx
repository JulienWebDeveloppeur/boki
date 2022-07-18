import { ReactNode } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BidCard from "components/UI/shared/BidCard";
import Link from "next/link";

type Props = { children?: ReactNode };

const Home = (props: Props) => {
  return (
    <section className="Home container p-4 flex lg:mt-8 mx-auto">
      <article className="w-full lg:w-1/2">
        <Stack direction="row" spacing={8} className="hidden lg:block">
          <Chip label="Discover" variant="outlined" />
          <Chip label="Share" variant="outlined" />
          <Chip label="Love" variant="outlined" />
        </Stack>
        <h1 className="mt-4 text-6xl lg:text-7xl">
          Discover And Share <br />
          <span className="text-primary">Boki</span> community <br /> ART & Lore{" "}
        </h1>
        <p className="mt-4">
          A place where boki can share and discover more about the community art
          and boki lore
        </p>
        <div className="mt-12 text-center lg:text-left">
          <Link href="/discover">
            <Button variant="contained" className="btn-xl mr-8">
              Discover
            </Button>
          </Link>
          {/* <Button variant="outlined" color="secondary" className="btn-xl">
            How it works
          </Button> */}
        </div>
      </article>
      <article className="w-1/2 hidden lg:flex justify-end">
        <BidCard />
      </article>
    </section>
  );
};

export default Home;
