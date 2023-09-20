import "./App.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import PortfolioPage from "./pages/Portfolio";
import RootPage from "./pages/Root";
import PersonaPage from "./pages/Persona";
import EducationPage from "./pages/Education";
import ProfessionalPage from "./pages/Professional";
import ErrorPage from "./pages/Error";
import ScrollToTop from "./pages/ScrollToTop";

/* const router = createBrowserRouter([
  {
    path: "/muszelus",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "persona",
        element: <PersonaPage />,
      },
      {
        path: "profession",
        element: <ProfessionalPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
    ],
  },
]); */

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route path='portfolio' element={<PortfolioPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="profession" element={<ProfessionalPage />} />
          <Route path="persona" element={<PersonaPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return <RouterProvider router={router} />;
}

export default App;
