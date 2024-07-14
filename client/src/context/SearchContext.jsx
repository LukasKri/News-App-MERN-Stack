import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notAllowedInputValue, setNotAllowedInputValue] = useState(false);

  const allowedInputValues = /^[0-9a-zA-Z-\s]+$/;

  const validateInput = (input) => {
    if (input.match(allowedInputValues) || input === "") {
      setNotAllowedInputValue(false);
    } else {
      setNotAllowedInputValue(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    validateInput(value);
    setQuery(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const SEARCH_ENDPOINT = `https://gnews.io/api/v4/search?q=${query}&max=9&lang=en&apikey=${API_KEY}`;

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

  const fetchSearchValueToTheServer = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data }),
    };

    fetch("/api/searchValue", requestOptions).catch((error) => {
      console.log(error);
    });
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        articles,
        submitted,
        loading,
        error,
        notAllowedInputValue,
        handleInputChange,
        handleFormSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
