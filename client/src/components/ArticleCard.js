import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const ArticleCard = ({ article }) => {
    const classes = useStyles();

    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);

    const handleClick = (e) => {
        // If article is clicked with left or middle mouse button.
        if (e.button === 0 || e.button === 1) {
            console.log("Article clicked: " + article.url);
            fetchClickedArticleToTheServer(article.url);
        }
    };

    const fetchClickedArticleToTheServer = (data) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ clicked_article: data }),
        };

        fetch("/clickedArticle", requestOptions).catch((error) => {
            console.log(error);
        });
    };

    return (
        <a
            className={classes.cardContent}
            href={article.url}
            target="blank_"
            rel="noopener noreferrer"
            onMouseDown={handleClick}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        image={article.image}
                        title="Article-image"
                        alt="article-poster"
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
                        <Box className={classes.descPub}>
                            <Typography
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
        </a>
    );
};

const useStyles = makeStyles((theme) => ({
    cardContent: {
        textDecoration: "none",
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
    descPub: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 130,
    },
    published: {
        display: "flex",
        justifyContent: "flex-end",
    },
}));

export default ArticleCard;
