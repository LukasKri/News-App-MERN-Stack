import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const NoArticleError = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Typography className={classes.text} variant="body2">
                Sorry, no article was found,
            </Typography>
            <Typography className={classes.text} variant="body2">
                please try other keywords.
            </Typography>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "absolute",
        left: "50%",
        width: 360,
        marginLeft: -180,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
        [theme.breakpoints.up("md")]: {
            fontSize: 26,
        },
    },
}));

export default NoArticleError;
