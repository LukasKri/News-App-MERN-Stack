import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Link } from "@material-ui/core";

const ArticleCard = ({ article }) => {
  const classes = useStyles();

  const date = article.publishedAt.slice(0, 10);
  const time = article.publishedAt.slice(11, 16);

  const handleMouseClick = (e) => {
    // If article is clicked with left or middle mouse button.
    if (e.button === 0 || e.button === 1) {
      fetchClickedArticleToTheServer(article);
    }
  };

  const fetchClickedArticleToTheServer = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data }),
    };

    fetch("/clickedArticle", requestOptions).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Link
      className={classes.cardContent}
      href={article.url}
      target="blank_"
      rel="noopener noreferrer"
      onMouseDown={handleMouseClick}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={article.image}
            title="Article-image"
          />
          <CardContent>
            <Typography
              className={classes.title}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              {article.title}
            </Typography>
            <Box className={classes.textbox}>
              <Typography
                className={classes.description}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {article.description}
              </Typography>
              <Typography
                className={classes.published}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {date + " " + time}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  root: {
    maxWidth: 260,
    height: 332,
    margin: 5,
    [theme.breakpoints.up("md")]: {
      maxWidth: 290,
      height: 350,
      margin: 8,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 350,
      height: 390,
      margin: 10,
    },
  },
  image: {
    height: 140,
    [theme.breakpoints.up("md")]: {
      height: 160,
    },
    [theme.breakpoints.up("lg")]: {
      height: 200,
    },
  },
  title: {
    letterSpacing: -1,
    fontSize: 18,
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
  },
  description: {
    height: 105,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  published: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default ArticleCard;
