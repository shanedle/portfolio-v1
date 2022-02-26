import Footer from "../components/Footer/Footer";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
