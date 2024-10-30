import { Navigate, Route,  Routes } from "react-router-dom";
// import NoPage from "./View/Error/NoPage";
// import LanguageSwitcher from "./components/languageSwitcher"
// import routes from "./routes";
import AdminLayout from "./Layout/admin"


// const base = '/:locale(en|fr)?';

const App = () => (

  // <>
  //   {/* <LanguageSwitcher/> */}
  //   <RouterProvider router={routes}/>
  // </>
      <Routes>
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
)

export default App;