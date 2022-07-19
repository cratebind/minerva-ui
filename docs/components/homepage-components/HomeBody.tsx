import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  ModalHeader,
  Tag,
  styled,
} from 'minerva-ui';
import CodeSnippet from '../CodeSnippet';
import TableExample from './TableExample';

const ImageOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);
`;

const SubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  max-width: 234px;
  width: 30%;
  height: 250px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  text-align: center;
  padding: 32px;
  border: 1px solid #fff;
  margin: 0 0.5rem;

  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
    margin: 0.75rem 0;
    height: 100%;
    padding: 1.5rem 2rem;
    p {
      margin-top: 1rem;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-family: Tiempos-Headline;
  font-size: 38px;
  font-weight: 400;
  color: #fff;
  margin-top: 0;
`;

const StyledModalHeader = styled(ModalHeader)`
  p {
    width: 100%;
    margin-right: -30px;
    font-weight: 400;
  }
`;

const SnippetContainer = styled(Box)`
  pre {
    margin-top: 0;
    overflow: hidden;
  }
`;

const StyledButton = styled(Button)`
  width: max-content;
  @media (max-width: 640px) {
    width: 100%;
    min-width: unset;
  }
`;

const snippetText = `() => {
  const { isOpen, onOpen, onClose } =
  useDisclosure();
  
    return (
      <Flex bg="gray.500" justifyContent="center" p={6}>
        <Button onClick={onOpen}>Deactivate Account</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Box
            bg="white"
            borderRadius="lg"
            shadow="xl"
          >
          <Box p={6} pb={4} bg="white">`;

export default function HomeBody() {
  return (
    <Box>
      <Flex className="flex-col sm:flex-row pt-6">
        <Box className="flex-1 mb-4 sm:mb-0">
          <Box className="mx-12 mt-8 sm:mt-32 mb-24 lg:m-24">
            <Heading
              as="h3"
              fontFamily="Tiempos-Headline"
              fontSize="46px"
              fontWeight="400"
              lineHeight="1"
            >
              Your new favorite React component library
            </Heading>
            <div className="my-8 sm:mt-6 sm:mb-16">
              <Text color="secondary" fontSize="lg" lineHeight="26px">
                Professionally designed and built by a team of React developers
                and product designers—Minerva gives you the components needed to
                start building your React app stat.{' '}
              </Text>
            </div>
            <StyledButton
              variant="tertiary"
              mr="2"
              minWidth="140px"
              className="mb-4 sm:mb-0"
            >
              Get started
            </StyledButton>
            <StyledButton variant="primary" minWidth="140px" bg="#651FFF">
              Examples
            </StyledButton>
          </Box>
        </Box>
        <Box className="relative flex-1 overflow-hidden -mt-32 sm:mt-0">
          <Image
            src="homepage_example.png"
            minWidth="650px"
            alt="sky-background-image"
          />
          <ImageOverlay />
        </Box>
      </Flex>

      <Flex
        background="linear-gradient(180deg, #651fff 36.3%, rgba(30, 6, 84, 0) 200%), center / cover no-repeat url(starry_sky.jpeg)"
        className="relative flex-col items-center px-6 py-16 sm:pt-20 sm:pb-16 lg:py-24 sm:px-4"
      >
        <Flex
          justifyContent="space-between"
          width="100%"
          maxWidth="900px"
          className="flex-col sm:flex-row"
        >
          <SubContainer>
            <Box>
              <Image src="explore_icon.svg" m="auto" alt="explore-icon" />
              <SubHeading as="h4">Explore</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0" fontSize="md">
              Accessible. Globally themed. Completely customizable.
            </Text>
          </SubContainer>
          <SubContainer>
            <Box>
              <Image src="install_icon.svg" m="auto" alt="install-icon" />
              <SubHeading as="h4">Install</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0" fontSize="md">
              Boom. Now you’ve got the building blocks to knock it out of the
              park.
            </Text>
          </SubContainer>
          <SubContainer>
            <Box>
              <Image src="trust_icon.svg" m="auto" alt="trust-icon" />
              <SubHeading as="h4">Trust</SubHeading>
            </Box>
            <Text lineHeight="1.25" color="#e0e0e0" fontSize="md">
              We keep our docs up to date and beginner-friendly.
            </Text>
          </SubContainer>
        </Flex>
        <StyledButton variant="tertiary" mt="8" minWidth="140px">
          Get Started
        </StyledButton>
      </Flex>

      {/* Could possibly map over each of these containers */}
      <Box background="#fff" className="px-6 sm:px-8">
        <Flex
          maxWidth="900px"
          mx="auto"
          py="16"
          className="flex-col items-start"
        >
          <Heading
            as="h4"
            fontSize="46px"
            mb="4"
            fontWeight="400"
            fontFamily="Tiempos-Headline"
          >
            Accessibility for all
          </Heading>
          <Text color="secondary" fontSize="lg">
            We believe that accessible apps should be the standard. In this
            library, we try to leverage the great work in Reach UI as a
            foundation for making our components as WAI-ARIA compliant as
            possible.
          </Text>
          <Button variant="tertiary" mb="8" mt="6" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%" mt="8" className="flex-col md:flex-row">
            <Box width="100%" mr="8" className="max-w-md">
              <Box shadow="lg" borderRadius="md">
                <StyledModalHeader textAlign="center">
                  Modal title
                </StyledModalHeader>
                <Flex flexDirection="column" alignItems="center" px="4">
                  <Text textAlign="center" fontWeight="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum id ante vitae eros suscipit pulvinar.
                  </Text>
                  <Flex my="4" width="100%">
                    <Button variant="primary" flex="1" mr="1" bg="#651FFF">
                      Button
                    </Button>
                    <Button flex="1" ml="1">
                      Cancel
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Box>

            <SnippetContainer
              width="100%"
              className="ml-0 mt-4 md:ml-8 md:mt-0"
            >
              <CodeSnippet
                snippetBackground="#F7F4FF"
                style={{ fontSize: '12px' }}
              >
                {snippetText}
              </CodeSnippet>
            </SnippetContainer>
          </Flex>
        </Flex>
      </Box>

      <Box background="#f5f5f5" className="px-6 sm:px-8">
        <Flex
          maxWidth="900px"
          mx="auto"
          py="16"
          className="flex-col items-start"
        >
          <Heading
            as="h4"
            fontSize="46px"
            mb="6"
            fontWeight="400"
            fontFamily="Tiempos-Headline"
            lineHeight="1"
          >
            Built by developers, for developers
          </Heading>
          <Text color="secondary" fontSize="lg">
            Whether you’re working on a solo project and need components with
            solid design, or you’re building an app for a client and need to
            move faster using a reliable component foundation—Minerva UI was
            built to make your life as a developer easier.
          </Text>
          <Button variant="tertiary" mb="8" mt="6" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%" mt="8" className="flex-col-reverse md:flex-row md:flex-row-reverse lg:flex-row">
            <SnippetContainer width="100%" mr="8">
              <CodeSnippet
                snippetBackground="#1F1B29"
                style={{ fontSize: '12px', color: '#fff' }}
              >
                {snippetText}
              </CodeSnippet>
            </SnippetContainer>

            <Box width="100%" className="ml-0 mb-4 lg:ml-12 md:mt-0">
              <Box shadow="lg" borderRadius="md" p="2" maxWidth="264px">
                <Image
                  src="mountain_sky.png"
                  width="100%"
                  height="162px"
                  alt="mountain-background"
                />
                <Heading as="h4" fontSize="sm" fontWeight="500" mt="4">
                  The Coldest Sunset
                </Heading>
                <Text fontSize="sm" my="4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id ante vitae eros suscipit pulvinar.
                </Text>
                <Flex justifyContent="space-between">
                  <Tag background="#ECECEE" px="2">
                    #photography
                  </Tag>
                  <Tag background="#ECECEE" px="2">
                    #nature
                  </Tag>
                  <Tag background="#ECECEE" px="2">
                    #inspiration
                  </Tag>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#fff" className="px-6 sm:px-8">
        <Flex
          maxWidth="900px"
          mx="auto"
          py="16"
          className="flex-col items-start"
        >
          <Heading
            as="h4"
            fontSize="46px"
            mb="6"
            fontWeight="400"
            fontFamily="Tiempos-Headline"
            lineHeight="1"
          >
            Delightfully designed
          </Heading>
          <Text color="secondary" fontSize="lg">
            Backed by simple, clean code, each component has a corresponding
            element in our Figma design system allowing product designers and
            developers to make product magic happen with the tiniest margin of
            error possible.
          </Text>
          <Button variant="tertiary" mb="8" mt="6" minWidth="140px">
            Check out the Figma components
          </Button>
          <Flex width="100%" mt="8" className="flex-col lg:flex-row">
            <TableExample />

            <SnippetContainer width="100%" className="ml-0 mt-4 lg:ml-8 mt-0">
              <CodeSnippet
                snippetBackground="#F7F4FF"
                style={{ fontSize: '12px' }}
              >
                {snippetText}
              </CodeSnippet>
            </SnippetContainer>
          </Flex>
        </Flex>
      </Box>

      <Box background="#f5f5f5" className="px-6 sm:px-8">
        <Flex
          maxWidth="900px"
          mx="auto"
          py="16"
          className="flex-col items-start"
        >
          <Heading
            as="h4"
            fontSize="46px"
            mb="2"
            fontWeight="400"
            fontFamily="Tiempos-Headline"
          >
            Globally themed
          </Heading>
          <Text
            color="secondary"
            fontSize="lg"
          >{`Each component is styled, giving you the opportunity to start your project quickly. Using our >defaultTheme<, you’re able to overwrite and manually style each component in the library as needed.`}</Text>
          <Button variant="tertiary" mb="8" mt="6" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%" mt="8" className="flex-col-reverse md:flex-row">
            <SnippetContainer width="100%" mr="8">
              <CodeSnippet
                snippetBackground="#1F1B29"
                style={{ fontSize: '12px', color: '#fff' }}
              >
                {snippetText}
              </CodeSnippet>
            </SnippetContainer>

            <Box width="100%" className="ml-0 mb-4 md:ml-12">
              <Flex
                shadow="lg"
                borderRadius="md"
                p="2"
                maxHeight="242px"
                maxWidth="432px"
              >
                <Image
                  src="coffee.png"
                  width="100%"
                  maxWidth="156px"
                  alt="coffee"
                />
                <Box ml="4">
                  <Heading as="h4" fontSize="sm" fontWeight="500" mt="2">
                    Can Coffee Make You a Better Developer?
                  </Heading>
                  <Text fontSize="sm" my="4" lineHeight="20px" fontWeight="300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum id ante vitae eros suscipit pulvinar.
                  </Text>
                  <Flex alignItems="center">
                    <Image src="jonathan_profile.png" alt="Jonathan avatar" />
                    <Box ml="4">
                      <Text fontSize="xs" lineHeight="20px">
                        Jonathan Reinink
                      </Text>
                      <Text fontSize="xs" lineHeight="20px">
                        Aug 18
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box background="#fff" className="px-6 sm:px-8">
        <Flex
          maxWidth="900px"
          mx="auto"
          py="16"
          className="flex-col items-start"
        >
          <Heading
            as="h4"
            fontSize="46px"
            mb="2"
            fontWeight="400"
            fontFamily="Tiempos-Headline"
          >
            Fully customizable
          </Heading>
          <Text color="secondary" fontSize="lg">
            Minerva UI is built to give the developers flexibility and speed.
            Our components are unopinionated, allowing you to build custom
            designs without excess CSS.
          </Text>
          <Button variant="tertiary" mb="8" mt="6" minWidth="140px">
            Learn more
          </Button>
          <Flex width="100%" mt="8" className="flex-col lg:flex-row">
            <TableExample />
            <SnippetContainer
              width="100%"
              className="ml-0 mt-4 lg:ml-8 lg:mt-0"
            >
              <CodeSnippet
                snippetBackground="#F7F4FF"
                style={{ fontSize: '12px', fontFamily: 'Roboto Mono' }}
              >
                {snippetText}
              </CodeSnippet>
            </SnippetContainer>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
