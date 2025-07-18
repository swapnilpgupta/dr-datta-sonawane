
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
import MaleInfertility from "./pages/MaleInfertility";
import LaparoscopicSurgery from "./pages/LaparoscopicSurgery";
import UroOncology from "./pages/UroOncology";
import ReconstructiveUrology from "./pages/ReconstructiveUrology";
import GeneralUrology from "./pages/GeneralUrology";


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
            <Route path="/treatment/kidney-stones-prostate-disorders" element={<KidneyStonesTreatment />} />
            <Route path="/treatment/male-infertility-sexual-health" element={<MaleInfertility />} />
            <Route path="/treatment/laparoscopic-minimally-invasive" element={<LaparoscopicSurgery />} />
            <Route path="/treatment/uro-oncology" element={<UroOncology />} />
            <Route path="/treatment/reconstructive-urology" element={<ReconstructiveUrology />} />
            <Route path="/treatment/general-urological-disorders" element={<GeneralUrology />} />
            <Route path="/treatment/kidney-stones" element={<KidneyStonesTreatment />} />
            <Route path="/treatment/prostate-treatment" element={<ProstateTreatment />} />
            <Route path="/treatment/urinary-incontinence" element={<UrinaryIncontinence />} />
            <Route path="/treatment/erectile-dysfunction" element={<ErectileDysfunction />} />
            <Route path="/treatment/male-infertility" element={<MaleInfertility />} />
            <Route path="/doctor" element={<DoctorProfile />} />
            <Route path="/affiliate-hospitals" element={<AffiliateHospitalsPage />} />
            
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
