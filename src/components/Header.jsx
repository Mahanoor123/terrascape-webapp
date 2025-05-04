import logo from "../assets/ts-logo.png"

const Header = () => {
  return (
    <>
    <div className="bg-[#0D1B2A] flex justify-center items-center">
    <img src={logo} alt="Terrascape" className="w-[6rem]"/>
    </div>
    </>
  )
};

export default Header;
