import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();

  const termToUse = decodeURI(term);
  return <div>SearchPage {termToUse}</div>;
};

export default SearchPage;
