import type { NextPage } from "next";
import Home from "components/features/Home/Home";
import TrendingCollections from "components/features/Home/TrendingCollections";
import TrendingNFTS from "components/features/Home/TrendingNFTS";
import { Fragment } from "react";

const Index: NextPage = () => {
  return (
    <Fragment>
      <Home />
      <TrendingCollections />
      <TrendingNFTS />
    </Fragment>
  );
};

export default Index;
