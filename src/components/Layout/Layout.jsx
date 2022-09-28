import React from "react";
import { Footer, Navbar  } from "../";

const Layout = ({children, ...props}) => {
  return (
    <section {...props}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

export default Layout;
