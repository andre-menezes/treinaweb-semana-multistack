import React from "react";
import { SafeEnvironmentContainer } from "./safeEnvironment.style";
import { Container } from "@material-ui/core";

export default function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
}
