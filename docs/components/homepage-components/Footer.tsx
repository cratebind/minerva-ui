import { Flex, Box, Text, Link, styled } from 'minerva-ui';
import DocSearch from './DocSearch';

const StyledFooter = styled(Flex)`
  flex-direction: column;
  background: linear-gradient(180deg, #1e0654 36.3%, rgba(30, 6, 84, 0) 200%),
    50% / cover no-repeat url(wood_sky.jpeg);
  opacity: 0.85;
  @media (max-width: 640px) {
    padding: 80px 24px 25px 24px;
  }
`;

const SubLink = styled(Link)`
  color: #8e82a9;
  text-decoration: none;
  cursor: pointer;
`;

type SubLinksType = {
  name: string;
  href: string;
};

type LinkType = {
  title: string;
  links: SubLinksType[];
};

const FOOTER_LINKS: LinkType[] = [
  {
    title: 'Use Minuerva',
    links: [
      { name: 'Installation', href: '/' },
      { name: 'Documentation', href: '/' },
      { name: 'Release Notes', href: '/' },
    ],
  },
  {
    title: 'Community',
    links: [],
  },
  {
    title: 'About',
    links: [],
  },
  {
    title: 'Contact Us',
    links: [],
  },
];

export default function Footer() {
  return (
    <StyledFooter as="footer" p="12" pb="4">
      <Flex
        mb="20"
        className="flex-col justify-between items-start lg:flex-row"
      >
        <DocSearch type="footer" />
        <Flex className="mt-16 flex-col lg:mt-0 sm:flex-row">
          {FOOTER_LINKS.map(({ title, links }) => (
            <Flex
              key={title}
              flexDirection="column"
              mr="12"
              className="mb-5 sm:mb-0"
            >
              <Text fontSize="md" color="white" mb="2">
                {title}
              </Text>
              {links.map(({ name, href }) => (
                <SubLink key={name} my="2" href={href}>
                  {name}
                </SubLink>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box color="#8E82A9" fontSize="xs">
        <Text width="max-content" m="auto">
          © {new Date().getFullYear()} CrateBind. All rights reserved.
        </Text>
      </Box>
    </StyledFooter>
  );
}
