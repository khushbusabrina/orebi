import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import Homeindex from "./Pages/Home/Homeindex";
import Shopindex from "./Pages/shop/Shopindex";
import Contactsindex from "./Pages/contacts/Contactsindex";
import Journalindex from "./Pages/journal/Journalindex";
import Aboutindex from "./Pages/about/Aboutindex";
import Rootlayouts from "./Components/layout/Rootlayouts";
import CustomError from "./Components/common/CustomError";

const routes = createRoutesFromElements(
  <Route element ={<Rootlayouts/>}>
    <Route index element={<Homeindex/>} />
    <Route path="/About" element={<Aboutindex/>} />
    <Route path="/Shop" element={<Shopindex/>} />
    <Route path="/Contacts" element={<Contactsindex/>} />
    <Route path="/Journal" element={<Journalindex/>} />
    <Route path="*" element={<CustomError/>} />


  </Route>
);

const Router= createBrowserRouter(routes);

function App() {

  return (
     <RouterProvider router={Router} />
  )
}

export default App
