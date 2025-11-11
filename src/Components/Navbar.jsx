import logo from "./reminihi.png";
function Navbar() {
  const navitems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav>
      <div className="w-full flex justify-between items-center top-4 right-4 z-50 p-2">
        <img src={logo} alt="Logo" className="size-7" />

        <ul className="flex justify-center space-x-4">
          {navitems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-primary hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
