import { Button, Heading, Html, Tailwind, Text } from "@react-email/components";
import * as React from "react";
type WelcomeType = {
  username?: string;
  phone?: string;
};
export default function Welcome({ username, phone }: WelcomeType) {
  return (
    <Tailwind>
      <Html>
        <Heading>Hello {username}</Heading>
        <Text>Your Phone: {phone}</Text>
        <Button
          className="px-12 py-6 bg-blue-600 rounded-2xl text-white"
          href="#"
        >
          Click me
        </Button>
      </Html>
    </Tailwind>
  );
}
