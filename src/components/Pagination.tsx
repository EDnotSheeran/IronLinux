import React from 'react';
import NextLink from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import { classNames } from '@libs/utils';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';

type Props = {
  page: number;
  pageCount: number;
  perPage: number;
};

const Pagination: React.FC<Props> = ({ page, pageCount, perPage }) => {
  const router = useRouter();
  let arr = [...Array(pageCount)]
    .map((_, i) => i + 1)
    .filter(x => x > page - 1 && x < page + perPage);
  const previousPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1 < pageCount ? page + 1 : pageCount;

  return (
    <nav className="flex" aria-label="Pagination">
      <Link href={`?${stringify({ ...router.query, page: previousPage })}`}>
        <ChevronLeftIcon className="w-6" />
      </Link>
      <div className="flex flex-wrap flex-1 max-h-14 overflow-hidden justify-evenly">
        {arr.map(num => (
          <Link
            key={num}
            href={`?${stringify({ ...router.query, page: num })}`}
            active={page === num}
          >
            {num}
          </Link>
        ))}
      </div>
      <Link href={`?${stringify({ ...router.query, page: nextPage })}`}>
        <ChevronRightIcon className="w-6" />
      </Link>
    </nav>
  );
};

export default Pagination;

type LinkProps = { href: string; active?: boolean };

const Link: React.FC<LinkProps> = ({ children, href, active }) => {
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          'border-2 border-gold rounded-md w-14 h-14 flex justify-center items-center mx-2 ',
          'hover:border-gold-dark',
          active
            ? 'bg-white text-gold hover:bg-gray-100'
            : 'bg-gold text-white hover:bg-gold-dark'
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
