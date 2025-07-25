import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Listing from "./pages/Listing";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/listing" component={Listing} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;