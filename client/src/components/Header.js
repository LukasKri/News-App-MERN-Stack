import { Box, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import { useState } from "react";

import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import NoArticleError from "./NoArticleError";

const Header = () => {
    const classes = useStyles();

    // State for input query.
    const [query, setQuery] = useState("");
    // State for articles array.
    const [articles, setArticles] = useState([]);
    // State for form submission.
    const [submitted, setSubmitted] = useState(false);
    // State for loading.
    const [loading, setLoading] = useState(false);
    // State for error on form submission.
    const [error, setError] = useState(false);
    // State for error on input validation.
    const [notAllowedInputValue, setNotAllowedInputValue] = useState(false);

    const allowedInputValues = /^[0-9a-zA-Z-\s]+$/;

    // Function for input validation - only alphanumeric values and spaces are allowed.
    const validateInput = (input) => {
        if (input.match(allowedInputValues) || input === "") {
            setNotAllowedInputValue(false);
        } else {
            setNotAllowedInputValue(true);
        }
    };

    // Function for user input handling and setting query.
    const handleInputChange = (e) => {
        let value = e.target.value;
        validateInput(value);
        setQuery(value);
    };

    // Function for form submission.
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const API_KEY = process.env.REACT_APP_API_KEY;

        const SEARCH_ENDPOINT = `https://gnews.io/api/v4/search?q=${query}&max=9&token=${API_KEY}`;

        if (!query || notAllowedInputValue) {
            return;
        } else {
            try {
                setError(false);
                setLoading(true);
                setArticles([]);
                fetchSearchValueToTheServer(query);

                const res = await fetch(SEARCH_ENDPOINT);
                const data = await res.json();

                setArticles(data.articles);
                setLoading(false);
                setSubmitted(true);
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err.message);
            }
        }
    };

    // Function fetching search value to the server.
    const fetchSearchValueToTheServer = (data) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ data }),
        };

        fetch("/searchValue", requestOptions).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Box>
            <Box className={classes.header}>
                <form
                    onSubmit={handleFormSubmit}
                    className={classes.form}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        className={classes.input}
                        error={notAllowedInputValue}
                        id="outlined-error"
                        label={notAllowedInputValue && "Error"}
                        variant="outlined"
                        helperText={
                            notAllowedInputValue &&
                            "Special characters are not allowed."
                        }
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search for article"
                        inputProps={{ maxLength: 40 }}
                        autoFocus
                    />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        disabled={notAllowedInputValue}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </form>
            </Box>
            {submitted && !loading && articles.length === 0 && (
                <NoArticleError />
            )}
            {loading && query.length !== 0 && <Loading />}
            <Box className={classes.cardsContainer}>
                {!error &&
                    articles &&
                    submitted &&
                    articles.map((article) => (
                        <ArticleCard article={article} key={article.url} />
                    ))}
            </Box>
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
    form: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: 12,
        [theme.breakpoints.up("md")]: {
            paddingTop: 40,
        },
    },
    input: {
        width: "50%",
    },
    button: {
        width: 64,
        height: 56,
        marginLeft: 15,
    },
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

export default Header;
