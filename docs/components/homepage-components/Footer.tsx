import { Flex, Box, Heading, Text, Link, styled } from 'minerva-ui';
import DocSearch from './DocSearch';

const StyledFooter = styled(Flex)`
  flex-direction: column;
  background: linear-gradient(180deg, #1e0654 36.3%, rgba(30, 6, 84, 0) 200%),
    url(unsplash_sky.jpeg);
  opacity: 0.85;
`;

const FooterTitle = styled(Text)`
  color: #fff;
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
      <Flex justifyContent="space-between" alignItems="flex-start" mb="20">
        <DocSearch />
        <Flex>
          {FOOTER_LINKS.map(({ title, links }) => (
            <Flex key={title} flexDirection="column" mr="12">
              <FooterTitle>{title}</FooterTitle>
              {links.map(({ name, href }) => (
                <SubLink key="name" my="2">
                  {name}
                </SubLink>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box textAlign="center" color="#fff">
        © {new Date().getFullYear()} CrateBind. All rights reserved.
      </Box>
    </StyledFooter>
  );
}
