import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home/index";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Auth from "./utils/auth";

// create theme
const theme = createTheme({
  palette: {
        mode: 'dark',
  },
});

// graphql link
const httpLink = createHttpLink({
  uri: "/graphql",
});

// auth link to add token to request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// create apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <div>
            <main className="mainSize">
              <Routes>
                <Route path="/" element={<Home title="VisioMetrics" />} />
                <Route path="/signup" element={<Signup title="Sign-Up" />} />
                <Route path="/login" element={<Login title="Login" />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
