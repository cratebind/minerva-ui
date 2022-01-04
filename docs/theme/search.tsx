import React, {
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import matchSorter from 'match-sorter';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Item = ({ title, active, href, onMouseOver, search }) => {
  const highlight = title.toLowerCase().indexOf(search.toLowerCase());

  return (
    <Link href={href}>
      <a className="block no-underline" onMouseOver={onMouseOver}>
        <li
          className={cn('p-2 text-gray-800', {
            'bg-gray-100': active,
          })}
        >
          {title.substring(0, highlight)}
          <span className="bg-yellow-300">
            {title.substring(highlight, highlight + search.length)}
          </span>
          {title.substring(highlight + search.length)}
        </li>
      </a>
    </Link>
  );
};

const SEARCH_ID = 'search-input';

const Search = ({ directories }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    const inputs = ['body', 'input', 'select', 'button', 'textarea'];

    const down = e => {
      if (
        document.activeElement &&
        inputs.includes(document.activeElement.tagName.toLowerCase())
      ) {
        if (e.metaKey && e.key === 'k') {
          e.preventDefault();
          input.current.focus();
        } else if (e.key === 'Escape') {
          setShow(false);
        }
      }
    };

    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (window?.docsearch) {
      // @ts-ignore
      window.docsearch({
        apiKey: '968f29d09b1213475a35c6fa56d7a55d',
        indexName: 'minerva-ui-vercel',
        inputSelector: `input#${SEARCH_ID}`,
      });
    }
  }, []);

  return (
    <div className="relative w-full md:w-64 mr-2">
      <input
        className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        id={SEARCH_ID}
        type="search"
        placeholder="Search (⌘ + k)"
        ref={input}
      />
    </div>
  );
};

export default Search;
