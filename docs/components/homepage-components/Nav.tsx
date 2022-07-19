import {
  Flex,
  Link,
  Image,
  MenuContainer,
  MenuButton,
  MenuList,
  MenuItem,
  styled,
} from 'minerva-ui';
import { useRouter } from 'next/router';
import DocSearch from './DocSearch';

const StyledMenuButton = styled(MenuButton)`
  border: none;
  background: inherit;
  &:focus {
    border: none;
    box-shadow: none;
  }
`;
export default function Nav() {
  const { pathname } = useRouter();

  return (
    <nav className="py-6 pt-8 px-4 sm:px-16 sm:pt-6 mx-auto flex space-between w-full">
      <DocSearch />
      <Flex className="items-center" minWidth="max-content">
        <div className="sm:hidden flex">
          <MenuContainer>
            <StyledMenuButton>
              <Image src="ellipsis.png" alt="menu ellipsis" />
            </StyledMenuButton>
            <MenuList menuPosition="right">
              <MenuItem onSelect={() => {}}>
                <Link
                  color={pathname === '/' ? '#331080' : 'secondary'}
                  fontWeight={pathname === '/' ? '500' : '400'}
                  textDecoration="none"
                  href="/"
                >
                  Get Started
                </Link>
              </MenuItem>
              <MenuItem onSelect={() => {}}>
                <Link
                  color={pathname === '/about' ? '#331080' : 'secondary'}
                  fontWeight={pathname === '/about' ? '500' : '400'}
                  textDecoration="none"
                  href="/about"
                >
                  About
                </Link>
              </MenuItem>
            </MenuList>
          </MenuContainer>
        </div>
        <div className="hidden sm:flex">
          <Flex
            borderRight="1px solid #DEDEE0"
            height="max-content"
            mr="4"
            py="2"
            minWidth="max-content"
          >
            <Link
              color={pathname === '/' ? '#331080' : 'secondary'}
              fontWeight={pathname === '/' ? '500' : '400'}
              mr="8"
              textDecoration="none"
              height="max-content"
              href="/"
              minWidth="max-content"
              className="min-w-max"
            >
              Get Started
            </Link>
            <Link
              color={pathname === '/about' ? '#331080' : 'secondary'}
              fontWeight={pathname === '/about' ? '500' : '400'}
              mr="8"
              textDecoration="none"
              height="max-content"
              href="/about"
            >
              About
            </Link>
          </Flex>
          <Link href="https://github.com/cratebind/minerva-ui" isExternal>
            <Image src="github_logo.png" alt="github" />
          </Link>
        </div>
      </Flex>
    </nav>
  );
}
