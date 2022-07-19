import { Box } from 'minerva-ui';
import Nav from './Nav';
import Footer from './Footer';

import '@docsearch/css';

export default function Layout({ children }) {
  return (
    <Box bg="#fafafa" minHeight="100vh">
      <Nav />
      {children}
      <Footer />
    </Box>
  );
}
