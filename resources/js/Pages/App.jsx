import Shop from "@/Components/Shop/Shop";
import Home from "./Home/Home";
import Route from "vendor/tightenco/ziggy/src/js/Route";
import Navbar from "@/Pages/Navbar/Navbar";

import LearnMorePage from "./LearnMore/LearnMore";
import LocationPage from "./User/Location/Location";

export const AppContent = () => {


  return (


    <>
      <Navbar />

      {/* Home Page (Protected) */}

      <Route path="/" element={<Home />} />


      {/* User Pages */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
      <Route path="/location" element={<LocationPage />} />



    </>
  );
};


function App() {


  return (

    <AppContent />

  );
}

export default App;