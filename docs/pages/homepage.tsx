import Layout from '../components/homepage-components/Layout';
import HomeBody from '../components/homepage-components/HomeBody';
import Head from 'next/head';


export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home - Minerva UI</title>
        <meta
          name="description"
          content="Your new favorite React component library. Professionally designed and built by a team of React developers and product designers—Minerva gives you the components needed to start building your React app stat."
        />
        <meta
          name="og:description"
          content="Your new favorite React component library. Professionally designed and built by a team of React developers and product designers—Minerva gives you the components needed to start building your React app stat."
        />
        {/* <meta name="og:image" content="../public/minerva_logo_purple.png" /> */}
      </Head>
      <HomeBody />
    </Layout>
  );
}
