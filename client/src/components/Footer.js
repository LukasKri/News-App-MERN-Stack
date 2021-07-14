import { Box, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Link
                href="https://github.com/LukasKri"
                className={classes.details}
                target="blank_"
                rel="noopener noreferrer"
            >
                <Typography className={classes.text} variant="body2">
                    Created by Lukas Krisikaitis, 2021
                </Typography>
            </Link>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        marginTop: 15,
        backgroundColor: "#c9ced6",
        [theme.breakpoints.up("md")]: {
            height: 55,
            marginTop: 20,
        },
    },
    details: {
        color: "#0f0f0f",
        "&:hover": {
            textDecoration: "none",
        },
    },
    text: {
        fontSize: 12,
        fontWeight: 700,
        [theme.breakpoints.up("md")]: {
            fontSize: 16,
        },
    },
}));

export default Footer;
