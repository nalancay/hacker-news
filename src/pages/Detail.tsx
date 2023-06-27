import useSWR from "swr";

import { getItemInfo } from "../services/hacker-news";
import { ListOfComments } from "../components/ListOfComments";
import { useEffect } from "react";
import { ContainerLoad, SVGLoader } from "../components/SVGLoader";

export default function DetailPage(props: {
  params: {
    id: string;
  };
}) {
  const {
    params: { id },
  } = props;

  const { data, isLoading } = useSWR(`/story/${id}`, () =>
    getItemInfo(Number(id))
  );

  const { kids, title }: { kids: number[]; title: string } = data ?? {};
  const commentIds = kids?.slice(0, 10) ?? [];

  useEffect(() => {
    document.title = `Hacker News - ${title}`;
  }, [title]);

  return (
    <div>
      {isLoading ? (
        <ContainerLoad>
          <SVGLoader viewBox="25 25 50 50" stroke-width="5">
            <circle cx="50" cy="50" r="20" />
          </SVGLoader>
        </ContainerLoad>
      ) : (
        <ListOfComments ids={commentIds} />
      )}
    </div>
  );
}
