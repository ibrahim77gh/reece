import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import MiniDrawer from "./pages/Planner";
import RoomElement from "./components/SideBarComponents/RoomElements";
import {
  cat1,
  cat2,
  cat3,
} from "./components/SideBarComponents/BathroomProducts/data";
import { BathroomProductData } from "./components/SideBarComponents/BathroomProducts/data";
import BathroomProducts from "./components/SideBarComponents/BathroomProducts";
import RoomLayout from "./components/SideBarComponents/RoomLayout";
import { RoomElementData } from "./components/SideBarComponents/RoomElements/data";
import BathroomAllData from "./components/SideBarComponents/BathroomProducts/BathroomAllData";
import CategoryItems from "./components/SideBarComponents/BathroomProducts/CategoryItems";
import UploadModel from "./pages/UploadModel";
import ContactForm from "./pages/ContactForm";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/planner" element={<MiniDrawer />}>
        <Route path="bathroom" element={<BathroomProducts />}>
          <Route
            path=""
            element={<BathroomAllData data={BathroomProductData} />}
          />
          <Route
            path="mirror"
            element={<CategoryItems data={cat1} path="mirror" />}
          />
          <Route
            path="bath"
            element={<CategoryItems data={cat2} path="bath" />}
          />
          <Route
            path="shower"
            element={<CategoryItems data={cat3} path="shower" />}
          />
          <Route
            path="toilet"
            element={<CategoryItems data={cat1} path="toilet" />}
          />
          <Route
            path="basins"
            element={<CategoryItems data={cat2} path="basins" />}
          />
          <Route
            path="tapware"
            element={<CategoryItems data={cat3} path="tapware" />}
          />
          <Route
            path="block"
            element={<CategoryItems data={cat1} path="block" />}
          />
        </Route>
        <Route path="room-layout" element={<RoomLayout />} />
        <Route
          path="room-element"
          element={<RoomElement data={RoomElementData} />}
        />
      </Route>
      <Route path="/upload-model" element={<UploadModel />} />
      <Route path="/contact" element={<ContactForm/>}/>
    </Routes>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
