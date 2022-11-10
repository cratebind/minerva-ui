import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import slugify from '@sindresorhus/slugify';
import 'focus-visible';

import flatten from './utils/flatten';
import reorderBasedOnMeta from './utils/reorder';

import ArrowRight from './arrow-right';
import CloseIcon from './close-icon';
import Hamburger from './hamburger';
import MinervaLogo from './minerva-logo-side';
import HomePageLayout from '../components/homepage-components/Layout';

import Theme from './misc/theme';
import defaultConfig from './misc/default.config';

const TreeState = new Map();
const titleType = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const MenuContext = createContext(false);

function Folder({ item, anchors }) {
  const route = useRouter().route + '/';
  const active = route.startsWith(item.route + '/');
  const open = TreeState[item.route] ?? active;
  const [_, render] = useState(false);

  useEffect(() => {
    if (active) {
      TreeState[item.route] = true;
    }
  }, [active]);

  return (
    <li className={open ? 'active' : ''}>
      <button
        onClick={() => {
          if (active) return;
          TreeState[item.route] = !open;
          render((x) => !x);
        }}
        style={{ color: '#000000', fontWeight: '700' }}
        className="text-black"
      >
        {item.title}
      </button>
      <div
        style={{
          display: open ? '' : 'none',
        }}
      >
        <Menu dir={item.children} anchors={anchors} />
      </div>
    </li>
  );
}

function File({ item, anchors }) {
  const { setMenu } = useContext(MenuContext);
  const route = useRouter().route + '/';
  const active = route.startsWith(item.route + '/');

  const title = item.title;
  // if (item.title.startsWith('> ')) {
  // title = title.substr(2)
  if (anchors && (anchors.length > -1)) {
    if (active) {
      return (
        <li className={active ? 'active' : ''} style={{ fontFamily: 'Roboto' }}>
          <Link href={item.route}>
            <a
              className={active ? 'active-link' : 'hover:bg-red-200'}
              style={
                active
                  ? {
                      background: 'rgba(101, 31, 255, 0.1)',
                      color: '#651FFF',
                    }
                  : {}
              }
            >
              {title}
            </a>
          </Link>
          <ul style={{ fontFamily: 'Roboto' }}>
            {anchors.map((anchor) => {
              const title =
                typeof anchor === 'string' ? anchor : anchor?.props?.children;
              const slug = slugify(title || '');
              return (
                <a
                  href={'#' + slug}
                  key={`a-${slug}`}
                  onClick={() => setMenu(false)}
                >
                  <span className="flex">
                    <span className="mr-2 text-grayDark">#</span>
                    <span className="inline-block text-grayDark">{anchor}</span>
                  </span>
                </a>
              );
            })}
          </ul>
        </li>
      );
    }
  }

  return (
    <li
      className={active ? 'active' : ''}
      style={{
        fontFamily: 'Roboto',
      }}
    >
      <Link href={item.route}>
        <a style={['Getting Started', 'Change Log'].includes(title) ? { color: '#000000', fontWeight: '700' } : {}} onClick={() => setMenu(false)}>
          {title}
        </a>
      </Link>
    </li>
  );
}

function Menu({ dir, anchors }) {
  return (
    <ul>
      {dir.map((item) => {
        if (item.children) {
          return <Folder key={item.name} item={item} anchors={anchors} />;
        }
        return <File key={item.name} item={item} anchors={anchors} />;
      })}
    </ul>
  );
}

function Sidebar({ show, directories, anchors, setMenu }) {
  return (
    <aside
      className={`h-screen flex-shrink-0 w-full lg:ml-24 md:w-64 md:border-r md:block fixed md:sticky z-20 ${
        show ? '' : 'hidden'
      }`}
      style={{
        top: '4rem',
        height: 'calc(100vh - 4rem)',
        fontFamily: 'Roboto',
      }}
    >
      <div
        className="sidebar sm:w-full pt-8 pl-6 sm:pl-10 pr-10 sm:pr-4 lg:pr-8 pb-40 md:pb-16 h-full overflow-y-auto w-3/4 absolute sm:static z-10"
        style={{
          backgroundColor: '#FAFAFA',
          bottom: '0px',
          height: '100vh',
        }}
      >
        <div className="sm:hidden flex justify-between items-center mb-10 mt-8">
          <MinervaLogo />
          <CloseIcon onClick={() => setMenu(false)} />
        </div>
        <Menu dir={directories} anchors={anchors} />
      </div>
      <div className={show ? 'sidebar-blur sm:hidden' : 'hidden'}></div>
    </aside>
  );
}

const NextLink = ({ config, flatDirectories, currentIndex }) => {
  let next = flatDirectories[currentIndex + 1];

  if (!config.nextLinks || !next) {
    return null;
  }

  return (
    <Link href={next.route}>
      <a
        className="text-lg font-medium p-4 -m-4 no-underline text-gray-600 hover:text-blue-600 flex items-center ml-2"
        style={{ color: '#8E82A9'}}
      >
        {next.title}
        <ArrowRight className="inline ml-1 flex-shrink-0" />
      </a>
    </Link>
  );
};

const PrevLink = ({ config, flatDirectories, currentIndex }) => {
  let prev = flatDirectories[currentIndex - 1];

  if (!config.prevLinks || !prev) {
    return null;
  }

  return (
    <Link href={prev.route}>
      <a className="text-lg font-medium p-4 -m-4 no-underline text-gray-600 hover:text-blue-600 flex items-center mr-2">
        <ArrowRight className="transform rotate-180 inline mr-1 flex-shrink-0" />
        {prev.title}
      </a>
    </Link>
  );
};

const Layout = ({ filename, config: _config, pageMap, children }) => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { route, pathname } = router;

  const directories = useMemo(() => reorderBasedOnMeta(pageMap), [pageMap]);
  const flatDirectories = useMemo(() => flatten(directories), [directories]);
  const config = Object.assign({}, defaultConfig, _config);

  const filepath = route.slice(0, route.lastIndexOf('/') + 1);
  const filepathWithName = filepath + filename;
  const titles = React.Children.toArray(children).filter((child) =>
    titleType.includes(child.props.mdxType)
  );
  const titleEl = titles.find((child) => child.props.mdxType === 'h1');
  const title = titleEl ? titleEl.props.children : filename.split('.')[0];
  // const title = titleEl ? titleEl.props.children : 'Untitled'
  const anchors = titles
    .filter((child) => child.props.mdxType === 'h2')
    .map((child) => child.props.children);

  useEffect(() => {
    if (menu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menu]);

  const currentIndex = useMemo(
    () => flatDirectories.findIndex((dir) => dir.route === pathname),
    [flatDirectories, pathname]
  );

  return (
    <React.Fragment>
      <Head>
        <title>
          {title}
          {config.titleSuffix || ''}
        </title>
        {config.head || null}
      </Head>
      <HomePageLayout>
        <div className="main-container flex flex-col">
          {/* <div className="sidebar-blur">

          </div> */}
          <div className="flex flex-1 h-full border-t border-dark-gray mb-16">
              <MenuContext.Provider value={{ setMenu }}>
                <Sidebar
                  setMenu={setMenu}
                  show={menu}
                  anchors={anchors}
                  directories={directories}
                />
              </MenuContext.Provider>
            <content className="relative pt-3 py-6 px-6 sm:py-4 sm:pt-8 lg:p-8 w-full max-w-full overflow-x-hidden">
              <div
                className="sm:hidden pb-3 px-6 border-b border-dark-gray -mx-6 mb-3 flex gap-4 pointer"
                onClick={() => setMenu(true)}
              >
                <Hamburger />
                <p className="mt-0" style={{ fontFamily: 'Roboto Condensed' }}>
                  {title}
                </p>
              </div>
              <main className="max-w-screen-md">
                {/* {!titleEl ? } */}
                <Theme>
                  {/* if there's no title element / h1 tag, use the filename */}
                  {!titleEl && (
                    <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
                  )}
                  {children}
                </Theme>
                <nav className="flex flex-row items-center justify-between mt-16">
                  <div>
                    <PrevLink
                      config={config}
                      flatDirectories={flatDirectories}
                      currentIndex={currentIndex}
                    />
                  </div>

                  <div>
                    <NextLink
                      config={config}
                      flatDirectories={flatDirectories}
                      currentIndex={currentIndex}
                    />
                  </div>
                </nav>
              </main>
            </content>
          </div>
        </div>
      </HomePageLayout>
    </React.Fragment>
  );
};

export default (opts, config) => (props) =>
  <Layout config={config} {...opts} {...props} />;
