import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  // Note: There isn't a dedicated <Table> component in the core library,
  // instead you use Section, Row, and Column for layout.
  Row,
  Column,
} from "@react-email/components";

interface Props {
  username?: string;
  email?: string;
  phone?: string;
  couch?: string;
}

export const ManagerTable = ({ username, email, phone, couch }: Props) => {
  const previewText = "Your recent order summary";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>Order Summary</Text>
          </Section>

          {/* Table Header Row */}
          <Section style={sectionBorder}>
            <Row>
              <Column style={headerCell}>{username}</Column>
              <Column style={headerCell}>{email}</Column>
              <Column style={headerCell} align="right">
                {phone}
              </Column>
              <Column style={headerCell} align="right">
                {couch}
              </Column>
            </Row>
          </Section>

          {/* Table Data Rows */}
          <Section>
            <Row>
              <Column style={dataCell}>React Email T-Shirt</Column>
              <Column style={dataCell}>1</Column>
              <Column style={dataCell} align="right">
                $25.00
              </Column>
            </Row>
            <Row>
              <Column style={dataCell}>Sticker Pack</Column>
              <Column style={dataCell}>2</Column>
              <Column style={dataCell} align="right">
                $5.00
              </Column>
            </Row>
          </Section>

          {/* Total Row */}
          <Section style={sectionBorderTop}>
            <Row>
              <Column colSpan={2} style={totalCell}>
                Total:
              </Column>
              <Column style={{ ...totalCell, ...totalAmount }} align="right">
                $35.00
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Basic inline styles (React Email handles inlining these into the final HTML)
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 15px",
  textAlign: "center" as const,
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  paddingBottom: "10px",
};

const sectionBorderTop = {
  borderTop: "1px solid rgb(238,238,238)",
  paddingTop: "10px",
  marginTop: "20px",
};

const headerCell = {
  padding: "0 10px",
  fontWeight: "bold" as const,
};

const dataCell = {
  padding: "10px",
};

const totalCell = {
  padding: "10px 10px 0",
  fontWeight: "bold" as const,
};

const totalAmount = {
  color: "#000000",
  fontSize: "18px",
};
