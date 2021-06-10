import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Container, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <header>
      <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
          <HeaderLogo src={"/img/logos/logo.svg"} alt="e-diaristas" />
        </Toolbar>
      </HeaderAppBar>
    </header>
  );
}
