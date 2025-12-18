import {
  Row,
  Column,
  Img,
  Container,
  Heading,
  Html,
  Tailwind,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";
type WelcomeType = {
  username?: string;
  phone?: string;
  email?: string;
  couch?: string;
};
export default function Welcome({
  username,
  phone,
  email,
  couch,
}: WelcomeType) {
  return (
    <Tailwind>
      <Html>
        <Container>
          <Heading>Hello {username}</Heading>
          <Text className="text-xl">
            Thank you for contacting Angara Steamers! We will contact you as
            soon as possible.
          </Text>
          <Row className="mt-12">
            <Column align="center">
              <Link href="https://playacleaning.com">
                <Row className="w-auto table-fixed border-collapse border-spacing-0">
                  <Column className="h-12 w-12 overflow-hidden rounded-full p-0 text-center align-middle leading-0">
                    <Img
                      src="http://localhost:3000/images/avatar1.png"
                      width="48"
                      height="48"
                      alt="Zeh Fernandes"
                      className="h-full w-full object-cover object-center"
                    />
                  </Column>
                  <Column className="pl-3 text-[14px] leading-5 font-medium text-gray-500">
                    <p className="m-0 text-gray-700">Vlad Vostikov</p>
                    <p className="m-0 text-[12px] leading-3.5">
                      Founder of Angara Steamers
                    </p>
                  </Column>
                </Row>
              </Link>
            </Column>
          </Row>
        </Container>
      </Html>
    </Tailwind>
  );
}
