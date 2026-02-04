import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import DiagnosticoPage from "@/pages/diagnostico";
import ContatoPage from "@/pages/contato";
import LinksPage from "@/pages/links";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/diagnostico" component={DiagnosticoPage} />
      <Route path="/contato" component={ContatoPage} />
      <Route path="/links" component={LinksPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
