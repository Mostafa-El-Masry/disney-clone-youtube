import React from "react";

const Reviewid = ({
  params,
}: {
  params: { pornstarsid: string; reviewid: string };
}) => {
  return (
    <div>
      reviw {params.reviewid} product {params.pornstarsid}
    </div>
  );
};

export default Reviewid;
