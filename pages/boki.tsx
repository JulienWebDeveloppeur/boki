import type { NextPage } from "next";
import { Fragment } from "react";
import { useRouter } from "next/router";

const Boki: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const item = query;
  const description = item.description?.toString() || "";
  return (
    <Fragment>
      <div className="Boki container p-4 flex flex-col lg:flex-row mt-8 mx-auto">
        <div className="w-full lg:w-1/3 p-12">
          <img
            src={item.src?.toString()}
            className="rounded-3xl w-96 mx-auto"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center">
          <h1>{item.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Boki;
