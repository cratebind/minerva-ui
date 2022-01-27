import { Box } from 'minerva-ui';
import Nav from '../components/homepage-components/Nav';
import Footer from '../components/homepage-components/Footer';
import HomeBody from '../components/homepage-components/HomeBody';

import '@docsearch/css';

export default function HomePage() {
  return (
    <Box bg="#fafafa" minHeight="100vh">
      <Nav />
      <HomeBody />
      <Footer />
    </Box>
  );
}
