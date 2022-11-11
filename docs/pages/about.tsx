import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Icon,
  styled,
} from 'minerva-ui';
import Layout from '../components/homepage-components/Layout';

import Head from 'next/head';

const MidSection = styled(Box)`
  margin-top: -8rem;
`;

const OwlImage = styled(Image)`
  bottom: -25%;
  right: 2rem;
`;

const SubContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border: 1px solid #fff;
  /* flex: 1; */

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

const MainHeading = styled(Heading)`
  margin-top: 69px;
  font-family: 'Tiempos-Headline';
  line-height: 44px;
  font-size: 36px;
  font-weight: 400;
  color: #fff;
  @media (min-width: 640px) {
    margin-top: 90px;
    font-size: 46px;
    line-height: 56px;
  }

  @media (min-width: 1024px) {
    margin-top: 155px;
  }
`;

const SubHeading = styled(Heading)`
  font-family: 'Tiempos-Headline';
  line-height: 34px;
  font-size: 28px;
  font-weight: 400;
  margin-top: 0px;
  @media (min-width: 640px) {
    font-size: 38px;
    line-height: 46px;
  }
`;

const MainText = styled(Text)`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 22.4px;
  }
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Minerva UI</title>
        <meta
          name="description"
          content="We’re a team of product people passionate about building apps that work seamlessly and look amazing"
        />
        <meta
          name="og:description"
          content="We’re a team of product people passionate about building apps that work seamlessly and look amazing"
        />
        <meta name="og:image" content="../public/minerva_logo_purple.png" />
      </Head>
      <Flex
        // className="lg:align-items-center"
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
        minHeight="700px"
        background="linear-gradient(180deg, #651fff 36.3%, rgba(30, 6, 84, 0) 200%), center / cover no-repeat url(unsplash.jpeg)"
      >
        <Box
          maxWidth="820px"
          textAlign="center"
          className="px-6 sm:px-24 lg:px-0"
        >
          <MainHeading as="h3">
            We’re a team of product people passionate about building apps that
            work seamlessly and look amazing
          </MainHeading>
          <MainText my="8" color="#eee" fontSize="lg" fontFamily="Roboto">
            Working at an agency, we have the opportunity to work with a host of
            different types of clients and products. Though the majority of what
            we build is custom, we appreciate component libraries for their
            speed and ease of use. Over the years though, we found that we
            needed more customization for individual components and gradually,
            Minerva UI became our working toolkit.
          </MainText>
        </Box>
      </Flex>
      <Box m="auto">
        <MidSection
          width="100%"
          background="top / auto no-repeat url(aboutpage_example.png)"
          minHeight="560px"
        />
        <Flex justifyContent="center">
          <Link
            display="flex"
            alignItems="center"
            textDecoration="none"
            color="#651FFF"
            fontFamily="'Roboto Condensed', sans-serif"
            cursor="pointer"
            mt="8"
          >
            Why we chose an owl{' '}
            <Icon name="chevron-right" color="#651FFF" size="20px" />
          </Link>
        </Flex>
        <Box className="relative overflow-hidden pb-24 pt-16 sm:pt-24 lg:pt-48 lg:pb-32">
          {/* pb="88px" pt="166px" */}
          <Flex maxWidth="1500px" m="auto" className="flex-col lg:flex-row">
            <Box className="flex-1 max-w-large m-auto p-6 md:p-0 lg:ml-32 sm:max-w-2xl lg:max-w-lg">
              <SubHeading as="h3">
                Minerva is built, and maintained by a core team of React
                developers and product designers...
              </SubHeading>
              <MainText
                my="7"
                color="secondary"
                fontSize="lg"
                fontFamily="Roboto"
              >
                who get jazzed about things like customizable themes, the latest
                release of FigJam reactions and accessibility for all.
              </MainText>
              <MainText
                my="7"
                color="secondary"
                fontSize="lg"
                fontFamily="Roboto"
                className="mb-16"
              >
                Their full-time gig is at an agency named{' '}
                <Link
                  textDecoration="none"
                  color="#651FFF"
                  fontFamily="'Roboto Condensed', sans-serif"
                  cursor="pointer"
                  href="https://www.cratebind.com/"
                  isExternal
                >
                  CrateBind
                </Link>
                .
              </MainText>
              <Button variant="tertiary" px="8" mt="9" minWidth="168px">
                Get started
              </Button>
            </Box>
            <OwlImage flex="1" src="owl.png" className="absolute lg:hidden" />
            <Image
              flex="1"
              src="about_minerva_logo.png"
              className="hidden lg:block"
              alt="about hero"
            />
          </Flex>
        </Box>

        <Flex
          background="white"
          flexDirection="column"
          alignItems="center"
          className="text-center py-10 sm:py-20 px-6"
        >
          <SubHeading as="h3" style={{ color: '#651FFF' }}>
            Minerva UI offers a 1-1 Figma component library
          </SubHeading>
          <MainText my="6" color="secondary" fontSize="lg" fontFamily="Roboto">
            Clean code meets delightful design so that you can build quickly
            without compromising a pixel.
          </MainText>
          <Button
            background="#651FFF"
            color="#fff"
            px="8"
            minWidth="185px"
            _hover={{ background: '#651fff' }}
          >
            View in Figma
          </Button>
        </Flex>
      </Box>

      <Flex
        background="#FFAB91"
        py="16"
        justifyContent="center"
        className="flex-col px-2 sm:flex-row sm:p-0"
      >
        <SubContainer
          borderRadius="md"
          p="8"
          className="m-3 max-w-full lg:mr-6 sm:max-w-xs lg:max-w-sm"
        >
          <Text
            color="white"
            fontSize="2xl"
            mb="4"
            className="w-full"
            fontFamily="Roboto"
            lineHeight="32px"
          >
            Have feedback or questions for the team?
          </Text>
          <Text
            color="white"
            textAlign="end"
            fontSize="base"
            display="flex"
            alignItems="center"
          >
            Drop us a line{' '}
            <Icon name="chevron-right" color="white" size="20px" />
          </Text>
        </SubContainer>
        <SubContainer
          borderRadius="md"
          p="8"
          className="m-3 max-w-full lg:ml-6 sm:max-w-xs lg:max-w-sm"
        >
          <Text
            color="white"
            fontSize="2xl"
            mb="4"
            className="w-full"
            fontFamily="Roboto"
            lineHeight="32px"
          >
            Ready to build your React app? We've got you.
          </Text>
          <Text
            color="white"
            textAlign="end"
            fontSize="base"
            display="flex"
            alignItems="center"
          >
            Explore the components{' '}
            <Icon name="chevron-right" color="white" size="20px" />
          </Text>
        </SubContainer>
      </Flex>
    </Layout>
  );
}
