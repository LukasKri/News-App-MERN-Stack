import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
  const classes = useStyles();
  const { query, notAllowedInputValue, handleInputChange, handleFormSubmit } =
    useSearch();

  return (
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
          notAllowedInputValue && "Special characters are not allowed."
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
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

export default SearchBar;
