import { Box, Flex, Heading, Text, Button, Image, styled } from 'minerva-ui';

const ImageOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);
`;

// Todo -- image & color
const BackgroundImage = styled(Image)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('starry_sky.jpeg');
`;

const SubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  max-width: 234px;
  height: 250px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  text-align: center;
  padding: 24px;
  border: 1px solid #fff;
`;

const SubHeading = styled(Heading)`
  font-family: tiempos;
  font-size: 38px;
  font-weight: 400;
  color: #fff;
  margin-top: 0;
`;

export default function HomeBody() {
  return (
    <Box>
      <Flex>
        <Box flex="1">
          <Box m="24">
            <Heading
              as="h3"
              fontFamily="tiempos"
              fontSize="46px"
              fontWeight="400"
              lineHeight="1"
            >
              Your new favorite React component library
            </Heading>
            <Text my="8" color="secondary" fontSize="lg">
              Professionally designed and built by a team of savvy React
              developers and product designers—Minerva gives you the components
              needed to start building your React app stat.{' '}
            </Text>
            <Button variant="tertiary" mr="2" minWidth="140px">
              Get started
            </Button>
            <Button variant="primary" minWidth="140px">
              Examples
            </Button>
          </Box>
        </Box>
        <Box position="relative" flex="1">
          <Image src="homepage_example.png" />
          <ImageOverlay />
        </Box>
      </Flex>

      <Flex
        position="relative"
        background="#651fff"
        flexDirection="column"
        alignItems="center"
        py="16"
      >
        <BackgroundImage />
        <Flex justifyContent="space-between" width="100%" maxWidth="900px">
          <SubContainer>
            <Box>
              <Image src="explore_icon.svg" m="auto" />
              <SubHeading as="h4">Explore</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0">
              Accessible. Globally themed. Completely customizable.
            </Text>
          </SubContainer>
          <SubContainer>
            <Box>
              <Image src="install_icon.svg" m="auto" />
              <SubHeading as="h4">Install</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0">
              Boom. Now you’ve got the building blocks to knock it out of the
              park.
            </Text>
          </SubContainer>
          <SubContainer>
            <Box>
              <Image src="trust_icon.svg" m="auto" />
              <SubHeading as="h4">Trust</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0">
              We keep our docs up to date and beginner-friendly.
            </Text>
          </SubContainer>
        </Flex>
        <Button variant="tertiary" mt="8" mb="4" minWidth="140px">
          Get Started
        </Button>
      </Flex>

      {/* Could possibly map over each of these containers */}
      <Box background="#fff">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="900px"
          mx="auto"
          py="16"
        >
          <Heading as="h4" fontFamily="tiempos">
            Accessibility for all
          </Heading>
          <Text color="secondary">
            We believe that accessible apps should be the standard. In this
            library, we try to leverage the great work in Reach UI as a
            foundation for making our components as WAI-ARIA compliant as
            possible.
          </Text>
          <Button variant="tertiary" my="8" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%">
            <Box width="100%">Box 1</Box>
            <Box width="100%">Box 2</Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#f5f5f5">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="900px"
          mx="auto"
          py="16"
        >
          <Heading as="h4">Built by developers, for developers</Heading>
          <Text color="secondary">
            Whether you’re working on a solo project and need components with
            solid design, or you’re building an app for a client and need to
            move faster using a reliable component foundation—Minerva UI was
            built to make your life as a developer easier.
          </Text>
          <Button variant="tertiary" my="8" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%">
            <Box width="100%">Box 1</Box>
            <Box width="100%">Box 2</Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#fff">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="900px"
          mx="auto"
          py="16"
        >
          <Heading as="h4">Delightfully designed</Heading>
          <Text color="secondary">
            Backed by simple, clean code, each component has a corresponding
            element in our Figma design system allowing product designers and
            developers to make product magic happen with the tiniest margin of
            error possible.
          </Text>
          <Button variant="tertiary" my="8" minWidth="140px">
            Check out the Figma components
          </Button>
          <Flex width="100%">
            <Box width="100%">Box 1</Box>
            <Box width="100%">Box 2</Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#f5f5f5">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="900px"
          mx="auto"
          py="16"
        >
          <Heading as="h4">Globally themed</Heading>
          <Text color="secondary">{`Each component is styled, giving you the opportunity to start your project quickly. Using our >defaultTheme<, you’re able to overwrite and manually style each component in the library as needed.`}</Text>
          <Button variant="tertiary" my="8" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%">
            <Box width="100%">Box 1</Box>
            <Box width="100%">Box 2</Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#fff">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="900px"
          mx="auto"
          py="16"
        >
          <Heading as="h4">Fully customizable</Heading>
          <Text color="secondary">
            Minerva UI is built to give the developers flexibility and speed.
            Our components are unopinionated, allowing you to build custom
            designs without excess CSS.
          </Text>
          <Button variant="tertiary" my="8" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%">
            <Box width="100%">Box 1</Box>
            <Box width="100%">Box 2</Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
