import { Box } from "@material-ui/core";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <Box>
        <Header />
        <Footer />
      </Box>
    </SearchProvider>
  );
};

export default App;
