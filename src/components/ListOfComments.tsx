import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import { CommentLoader } from "./CommentLoader";
import { getRelativeTime } from "../utils/getRelativeTime";

const Comment = (props: { id: number }) => {
  const { id } = props;
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <CommentLoader />;
  }

  const { by, text, time, kids } = data;
  const relativeTime = getRelativeTime(time);

  return (
    <>
      <details
        style={{
          cursor: "pointer",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          transition: "background .3s ease",
        }}
      >
        <summary
          style={{ fontWeight: "bold", cursor: "pointer", color: "#f97807" }}
        >
          <small>
            <span>{by}</span>
            <span>·</span>
            <span>{relativeTime}</span>
          </small>
        </summary>

        <p>{text}</p>
      </details>

      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  );
};

export const ListOfComments = (props: { ids: number[] }) => {
  const { ids } = props;

  return (
    <ul style={{ listStyle: "none" }}>
      {ids?.map((id: number) => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
};
