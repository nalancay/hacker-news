import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import {
  StyledLink,
  StyledStoryLink,
  StyledStory,
  StyledStoryFooter,
  StyledStoryHeader,
  StyledStoryTitle,
} from "./Story.styles";
import { StoryLoader } from "./StoryLoader";
import { getRelativeTime } from "../utils/getRelativeTime";

export const Story = (props: { id: number; index: number }) => {
  const { id, index } = props;

  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <StoryLoader />;
  }

  const { by, kids, score, title, url, time } = data;
  console.log(data);

  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {}

  // TODO: Create relativeTime
  const relativeTime = getRelativeTime(time);

  return (
    <StyledStory>
      <StyledStoryHeader>
        <small>{index + 1}.</small>
        <StyledStoryTitle href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </StyledStoryTitle>

        <StyledStoryLink href={url} target="_blank" rel="noopener noreferrer">
          ({domain})
        </StyledStoryLink>
      </StyledStoryHeader>

      <StyledStoryFooter>
        <span>{score} points</span>

        <StyledLink href={`/article/${id}`}>by {by}</StyledLink>
        <StyledLink href={`/article/${id}`}>
          <time dateTime={new Date(time * 1000).toISOString()}>
            {relativeTime}
          </time>
        </StyledLink>
        <StyledLink href={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </StyledLink>
      </StyledStoryFooter>
    </StyledStory>
  );
};
