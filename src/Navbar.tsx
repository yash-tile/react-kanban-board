import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return <div className="container">{children}</div>;
}

export default Navbar;
