import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
/* Layouts 
import TablesPage from "./pages/Tables";
import FormsWizard from "./pages/FormsWizard";
import UsersPage from "./pages/Users";
import RolesPage from "./pages/Roles";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import ComponentShowcase from "./pages/ComponentShowcase";
import ComponentShowcaseIndex from "./pages/showcase/ComponentShowcaseIndex";
import StatsCards from "./pages/showcase/StatsCards";
import DataTables from "./pages/showcase/DataTables";
import ActivityFeeds from "./pages/showcase/ActivityFeeds";
import Charts from "./pages/showcase/Charts";
import FeatureCards from "./pages/showcase/FeatureCards";
import LoadingStates from "./pages/showcase/LoadingStates";
import InteractiveForms from "./pages/showcase/InteractiveForms";
import DashboardWidgets from "./pages/showcase/DashboardWidgets";
import ModernGallery from "./pages/showcase/ModernGallery";
import AnimationShowcase from "./pages/showcase/AnimationShowcase";
*/

import Dashboard from "./admin/pages/Dashboard";
import TablesPage from "./admin/pages/Tables";
import FormsWizard from "./admin/pages/FormsWizard";
import UsersPage from "./admin/pages/Users";
import RolesPage from "./admin/pages/Roles";
import Analytics from "./admin/pages/Analytics";
import Settings from "./admin/pages/Settings";
import Profile from "./admin/pages/Profile";
import Notifications from "./admin/pages/Notifications";
import ComponentShowcase from "./admin/pages/ComponentShowcase";
import ComponentShowcaseIndex from "./admin/pages/showcase/ComponentShowcaseIndex";
import StatsCards from "./admin/pages/showcase/StatsCards";
import DataTables from "./admin/pages/showcase/DataTables";
import ActivityFeeds from "./admin/pages/showcase/ActivityFeeds";
import Charts from "./admin/pages/showcase/Charts";
import FeatureCards from "./admin/pages/showcase/FeatureCards";
import LoadingStates from "./admin/pages/showcase/LoadingStates";
import InteractiveForms from "./admin/pages/showcase/InteractiveForms";
import DashboardWidgets from "./admin/pages/showcase/DashboardWidgets";
import ModernGallery from "./admin/pages/showcase/ModernGallery";
import AnimationShowcase from "./admin/pages/showcase/AnimationShowcase";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Auth Routes - Outside AppLayout */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes - Inside AppLayout */}
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Home />} />

                  //* Protected Routes - Admin AppLayout */
                  <Route path="/admin" element={<Dashboard />} />
                  <Route path="/admin/tables" element={<TablesPage />} />
                  <Route path="/admin/forms" element={<FormsWizard />} />
                  <Route path="/admin/users" element={<UsersPage />} />
                  <Route path="/admin/roles" element={<RolesPage />} />
                  <Route path="/admin/analytics" element={<Analytics />} />
                  <Route path="/admin/settings" element={<Settings />} />
                  <Route path="/admin/profile" element={<Profile />} />
                  <Route path="/admin/notifications" element={<Notifications />} />
                  <Route path="/admin/showcase" element={<ComponentShowcaseIndex />} />
                  <Route path="/admin/showcase/stats" element={<StatsCards />} />
                  <Route path="/admin/showcase/tables" element={<DataTables />} />
                  <Route path="/admin/showcase/activity" element={<ActivityFeeds />} />
                  <Route path="/admin/showcase/charts" element={<Charts />} />
                  <Route path="/admin/showcase/features" element={<FeatureCards />} />
                  <Route path="/admin/showcase/loading" element={<LoadingStates />} />
                  <Route path="/admin/showcase/forms" element={<InteractiveForms />} />
                  <Route path="/admin/showcase/widgets" element={<DashboardWidgets />} />
                  <Route path="/admin/showcase/gallery" element={<ModernGallery />} />
                  <Route path="/admin/showcase/animations" element={<AnimationShowcase />} />
                  <Route path="/admin/old-showcase" element={<ComponentShowcase />} />
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
