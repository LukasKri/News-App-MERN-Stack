import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footerContainer}>
            <a
                href="https://github.com/LukasKri"
                className={classes.footerDetails}
                target="blank_"
                rel="noopener noreferrer"
            >
                <Typography className={classes.footerText} variant="body2">
                    Created by Lukas Krisikaitis, 2021
                </Typography>
            </a>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    footerContainer: {
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
    footerDetails: {
        color: "rgb(15, 15, 15)",
        textDecoration: "none",
    },
    footerText: {
        fontSize: 12,
        fontWeight: 700,
        [theme.breakpoints.up("md")]: {
            fontSize: 16,
        },
    },
}));

export default Footer;
