import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.loadingContainer}>
            <Typography className={classes.loadingText} variant="body2">
                Loading articles...
            </Typography>
        </Box>
    );
};

const useStyles = makeStyles({
    loadingContainer: {
        position: "absolute",
        left: "50%",
        width: 300,
        marginLeft: -150,
    },
    loadingText: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: 700,
    },
});

export default Loading;
