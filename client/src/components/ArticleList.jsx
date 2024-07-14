import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArticleCard from "./ArticleCard";
import { useSearch } from "../context/SearchContext";

const ArticleList = () => {
  const classes = useStyles();
  const { articles, error, submitted } = useSearch();

  return (
    <Box className={classes.cardsContainer}>
      {!error &&
        articles &&
        submitted &&
        articles.map((article) => (
          <ArticleCard article={article} key={article.url} />
        ))}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: 320,
    margin: "0 auto",
    minHeight: "calc(100vh - 160px)",
    [theme.breakpoints.up("sm")]: {
      width: 550,
    },
    [theme.breakpoints.up("md")]: {
      width: 920,
      minHeight: "calc(100vh - 247px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: 1200,
    },
  },
}));

export default ArticleList;
