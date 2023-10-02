import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Preview>Welcome Abroad</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="text-white text-3xl">Welcome to React Email</Text>
            <Link href="http://localhost:3000">Click Here</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
