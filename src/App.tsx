
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TreatmentDetail from "./pages/TreatmentDetail";
import DoctorProfile from "./pages/DoctorProfile";
import AffiliateHospitalsPage from "./pages/AffiliateHospitalsPage";
import KidneyStonesTreatment from "./pages/KidneyStonesTreatment";
import ProstateTreatment from "./pages/ProstateTreatment";
import UrinaryIncontinence from "./pages/UrinaryIncontinence";
import ErectileDysfunction from "./pages/ErectileDysfunction";
import Blog from "./pages/Blog";
import GoogleSheetsSetupPage from "./pages/GoogleSheetsSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/treatment/:id" element={<TreatmentDetail />} />
            <Route path="/treatment/kidney-stones" element={<KidneyStonesTreatment />} />
            <Route path="/treatment/prostate-treatment" element={<ProstateTreatment />} />
            <Route path="/treatment/urinary-incontinence" element={<UrinaryIncontinence />} />
            <Route path="/treatment/erectile-dysfunction" element={<ErectileDysfunction />} />
            <Route path="/doctor" element={<DoctorProfile />} />
            <Route path="/affiliate-hospitals" element={<AffiliateHospitalsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/google-sheets-setup" element={<GoogleSheetsSetupPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
