import React from "react";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    genre: string;
  };
};

const genrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      genrePage {id} {genre}
    </div>
  );
};

export default genrePage;
