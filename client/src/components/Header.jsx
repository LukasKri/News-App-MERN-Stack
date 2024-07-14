import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
import NoArticleError from "./NoArticleError";
import Loading from "./Loading";

import { useSearch } from "../context/SearchContext";

const Header = () => {
  const classes = useStyles();
  const { loading, articles, submitted, query } = useSearch();

  return (
    <Box>
      <Box className={classes.header}>
        <SearchBar />
      </Box>
      {submitted && !loading && articles?.length === 0 && <NoArticleError />}
      {loading && query.length !== 0 && <Loading />}
      <ArticleList />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 90,
    marginBottom: 15,
    backgroundColor: "#c9ced6",
    [theme.breakpoints.up("md")]: {
      height: 140,
      marginBottom: 32,
    },
  },
}));

export default Header;
