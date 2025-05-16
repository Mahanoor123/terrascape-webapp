import { Palette, SunIcon } from "lucide-react";
import logo from "../assets/ts-logo.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#0D1B2A] font-[Jakarta sans] fixed top-0 left-0 right-0 z-50 px-12 flex justify-between text-white items-center">
        <button className="bg-blue-100 text-blue-950 px-2 py-1 rounded-lg cursor-pointer">Guess Country</button>
        <img src={logo} alt="Terrascape" className="w-[6rem]" />
        <button><Palette /></button>
      </div>
    </>
  );
};

export default Header;
