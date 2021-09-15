import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';

const Pagination: React.FC<PaginationProps> = ({ pages }) => {
  return (
    <div className="flex">
      <Square href="?page=1">
        <ChevronLeftIcon className="w-6" />
      </Square>
      <div className="flex flex-wrap flex-1 max-h-14 overflow-hidden justify-evenly">
        <Square href="?page=1">1</Square>
        <Square active href="?page=2">
          2
        </Square>
        <Square href="?page=3">3</Square>
        <Square href="?page=4">4</Square>
      </div>
      <Square href="?page=1">
        <ChevronRightIcon className="w-6" />
      </Square>
    </div>
  );
};

export default Pagination;

const Square: React.FC<{ href: string; active?: boolean }> = ({
  children,
  href,
  active,
}) => {
  return (
    <Link href={href}>
      <a
        className={
          'border-2 border-gold rounded-md w-14 h-14 flex justify-center items-center mx-2 ' +
          (active ? 'bg-white text-gold' : 'bg-gold text-white')
        }
      >
        {children}
      </a>
    </Link>
  );
};
