import { Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import AdoptionProcess from "./Pages/AdoptionProcess";
import Home from "./Pages/Home";
import PetProfile from "./Pages/PetProfile";
import PetSearch from "./Pages/PetSearch";
import ShelterSearch from "./Pages/ShelterSearch";
import NotFound from "./Pages/NotFound";
import Foster from "./Pages/Foster";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import Contact from "./Pages/Contact";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";
import UserProfile from "./Pages/UserProfile";
import GiveForAdoptionForm from "./Pages/GiveForAdoptionForm";
import UserProfileSettings from "./Pages/UserProfileSettings"
import { PetContextProvider } from "./context/petsContextProvider";


function App() {

  return (
    <>
      <PetContextProvider>
        <NavbarComp  />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<LogInPage />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/shelter" element={<ShelterSearch />} />
          <Route path="/petprofile" element={<PetProfile />} />
          <Route path="/adoptionprocess" element={<AdoptionProcess />} />
          <Route path="/petsearch" element={<PetSearch />} />
          <Route path="/sheltersearch" element={<ShelterSearch />} />
          <Route path="/foster" element={<Foster />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/giveforadoption" element={<GiveForAdoptionForm />} />
          <Route path="/userprofilesettings" element={<UserProfileSettings />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </PetContextProvider>
    </>
  );
}

export default App;
