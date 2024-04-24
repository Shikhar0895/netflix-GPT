import { RxMagnifyingGlass } from "react-icons/rx";
type options = {
  method: string;
  headers: {
    accept: string;
    Authorization: string | undefined;
  };
};
const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options: options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGVkN2JmZmM3NjM2YjRiNTNmZDM2MjY0M2ZlYjgzYiIsInN1YiI6IjY1YmEwNjEyNzM5MGMwMDE0OGNmYjFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8JFni69D2xECWAVICT5EVoHkwAZfflD38TvIICiogY",
  },
};

const urlList = [
  {
    title: "Now Playing",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  },
  {
    title: "Popular",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  },
  {
    title: "Top Rated",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
  {
    title: "Upcoming",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  },
];

export { RxMagnifyingGlass, url, options, urlList };
