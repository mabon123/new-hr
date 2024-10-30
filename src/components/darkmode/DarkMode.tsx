import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function Index() {
  const [dark, setDark] = useState(false);
  const darkModeHandle = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <div>Dark Mode</div>
      <button onClick={() => darkModeHandle()}>
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
}

export default Index;
