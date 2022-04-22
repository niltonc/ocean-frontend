import React from "react";
import Logo from "../../assets/logo";

import {
  Box,
  Container,
  Copyright,
  Svg
} from "./styles";
  
function Footer () {
  return (
    <Box>
        <Svg>
        <Logo/>
        </Svg>
        
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Tincidunt hendrerit nunc eget urna. Eget amet
        volutpat dictumst gravida. Pellentesque ultrices
        enim congue enim.
      </Container>
      <Copyright>
      Copyright (c) Samsung Electronics 2022. All Rights Reserved
      </Copyright>
    </Box>
  );
};

export default Footer;