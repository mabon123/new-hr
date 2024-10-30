

import MainDashboard from "./View/Admin/Default";
// import NoPage from "./View/Error/NoPage";
// import AdminLayout from "./Layout/admin"
import { MdHome } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
// import NoPage from "./View/Error/NoPage";
import StaffTable from "./View/Admin/Tables/components/StaffTable";


const routes = [
  {
      name: "Main Dashboard",
      layout: "/admin",
      path: "default",
      icon: <MdHome className="h-6 w-6" />,
      component: <MainDashboard />,
  },
  {
    name: "Data Staff",
    layout: "/admin",
    path: "staffs",
    icon: <BsPeople className="h-6 w-6" />,
    component: <StaffTable/>,
},


];

export default routes;
