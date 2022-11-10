import { Box } from 'minerva-ui';
import Nav from './Nav';
import Footer from './Footer';

import '@docsearch/css';

export default function Layout({ children }) {
  return (
    <Box bg="#fafafa" minHeight="100vh" className="main-layout">
      <Nav />
      {children}
      <Footer />
    </Box>
  );
}
