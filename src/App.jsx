import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box, Skeleton } from "@chakra-ui/react";

// Lazy load components
const Home = lazy(() => import("./Pages/Home"));
const ListingPage = lazy(() => import("./Pages/ListingPage"));
const About = lazy(() => import("./Pages/About"));
import Navbar from "./Components/Navbar"; // Corrected import statement
const Mission = lazy(() => import("./Pages/Mission"));
const Vision = lazy(() => import("./Pages/Vision"));
const Login = lazy(() => import("./Pages/Login"));
const DetailBlog = lazy(() => import("./Pages/DetailBlog"));
const DetailsPage = lazy(() => import("./Pages/DetailPages"));
const Register = lazy(() => import("./Pages/Register"));
import ScrollToTop from "./Components/ScrollToTop";


const LoadingSkeleton = () => (
  <Box display="flex" flexDirection="column" alignItems="center" p={2}>
    {Array.from({ length: 10 }).map((_, index) => (
      <Box key={index} width="100%" mb={2}>
        <Skeleton height="40px" />
        <Skeleton height="200px" />
      </Box>
    ))}
  </Box>
);

const App = () => {
  return (
    <ChakraProvider>
      <Router>
      <ScrollToTop />
        <Navbar />
        <div>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listing" element={<ListingPage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<DetailBlog />} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
