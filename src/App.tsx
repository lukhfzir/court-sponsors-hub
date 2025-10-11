import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Services
import Services from "./pages/Services";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import BusinessStrategy from "./pages/services/BusinessStrategy";
import TechnologyConsulting from "./pages/services/TechnologyConsulting";
import ProcessOptimization from "./pages/services/ProcessOptimization";

// Insights
import Insights from "./pages/Insights";
import IndustryTrends from "./pages/insights/IndustryTrends";
import BestPractices from "./pages/insights/BestPractices";
import CaseStudies from "./pages/insights/CaseStudies";
import ThoughtLeadership from "./pages/insights/ThoughtLeadership";

// Resources
import Resources from "./pages/Resources";
import WhitePapers from "./pages/resources/WhitePapers";
import Frameworks from "./pages/resources/Frameworks";
import ToolsTemplates from "./pages/resources/ToolsTemplates";
import ROICalculators from "./pages/resources/ROICalculators";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/business-strategy" element={<BusinessStrategy />} />
            <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
            <Route path="/services/process-optimization" element={<ProcessOptimization />} />
            
            {/* Insights */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/industry-trends" element={<IndustryTrends />} />
            <Route path="/insights/best-practices" element={<BestPractices />} />
            <Route path="/insights/case-studies" element={<CaseStudies />} />
            <Route path="/insights/thought-leadership" element={<ThoughtLeadership />} />
            
            {/* Resources */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/white-papers" element={<WhitePapers />} />
            <Route path="/resources/frameworks" element={<Frameworks />} />
            <Route path="/resources/tools-templates" element={<ToolsTemplates />} />
            <Route path="/resources/roi-calculators" element={<ROICalculators />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
