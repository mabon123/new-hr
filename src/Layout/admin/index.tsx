import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import routes from "../../routes";

const Admin = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  useEffect(()=>{
    getActiveRoute(routes);
  },[location.pathname]);


  const getActiveRoute = (routes: RoutesType[]) => {
    const getActive = "Main Dashboard";
    for(let i=0; i < routes.length; i++){
      if(
        window.location.href.indexOf(routes[i].layout + "/" + routes[i].path)!==-1
      ){
        setCurrentRoute(routes[i].name)
      }
    }
    return getActive;
  }

  const getActiveNavbar = (routes: RoutesType[]) =>{
    const activeNabar = false;
    for(let i = 0; i<routes.length;i++){
      if(
        window.location.href.indexOf(routes[i].layout + routes[i].path)!==-1
      ){
        return routes[i].secondary
      }
    }
    return activeNabar;
  }

  const getRoutes =(routes: RoutesType[])=> {
    return routes.map((prop, key)=>{
      if(prop.layout === "/admin"){
        return(
          <Route path={`/${prop.path}`} element={prop.component} key={key}/>
        )
      } else{
        return null;
      }
    });
  }

  return (
    <div className="flex h-full w-full">
      {/* sidebar start */}
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* sidebar end */}
      {/* {navbar and Main Content start} */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-[#0b14374d]">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* {navbar start} */}
          <Navbar
            onOpenSidenav={() => setOpen(true)}
            brandText={currentRoute}
            secondary={getActiveNavbar(routes)}
          />
          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/admin/default" replace />}
              />
            </Routes>
          </div>
          {/* footer start */}
          <div className="p-3">
            <Footer/>
          </div>
          {/* footer end */}

          {/* navbar end */}
        </main>
        {/* navbar and main content end */}
      </div>
    </div>
  );
};

export default Admin;
