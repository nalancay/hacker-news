# Link webSite

[Clickear este enlace para ver webSite de hacker-news](https://nalancay-hacker-news.netlify.app).

## Functional Use Cases

✓ Show from the API the first 10 comments indexed in the list, retrieving information from the API of both the stories and their comments.\
✓ When a story is clicked, you should see the comments and their children.\
✓ Implementation of an infinite scroll for the 'top story'.\
✓ Relative time elapsed in year, month, day, hour, minute and second, of the comments.

## Technical requirements

✓ [x] Use the [Hacker News API] (https://github.com/HackerNews/API), which is complex because of the way we have to get data using the ids.\
✓ [x] Use components with style.\
✓ [x] Implementation of React.Lazy so that it loads components when needed or is visible in the UI and wraps components with 'Suspense' since its calls are asynchronous.\
✓ [x] Use placeholder (skeleton) while components are being loaded, ie it appears when you download certain data from the API being loaded and each placeholder is removed when each is finished loading. For this we use the react-content-loader library that allows you to create a skeleton of what it has to load. [link for React Content Loader](https://skeletonreact.com/) see the StoryLoader component.\
✓ [x] Respect the comment indexation list, because we use "component level recursion" since they call themselves, then make a component recursive of a comment if it has children, re-fetch data and re-render a comment.\
✓ [x] Make a SPA with wouter library for the router.\
✓ [x] SWR library that helps us make API calls.\
✓ [x] project made with React-TypeScript + SWR + styled-components
