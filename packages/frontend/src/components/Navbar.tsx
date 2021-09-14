import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Button } from '@components/index';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Cursos', href: '/courses', current: false },
  { name: 'Consultoria', href: '/consultancies', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Sobre Nós', href: '/about', current: false },
  { name: 'Fale Conosco', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto py-4 md:py-8 px-8 max-w-screen-2xl">
            <div className="flex items-center justify-between h-16">
              <div className="flex w-full items-center justify-between">
                <div className="flex-shrink-0">
                  <img
                    className="w-60 xl:w-full"
                    src="/iron-logo.svg"
                    alt="Logo"
                  />
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 items-center flex ">
                    {navigation.map(item =>
                      item.name != 'Fale Conosco' ? (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-gold' : 'text-grey',
                            'px-3 py-2 text-base hover:underline'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ) : null
                    )}
                    <Button className="bg-gold rounded-md text-white font-poppins font-medium ml-10 xl:ml-24 py-2 tracking-widest w-60">
                      Fale Conosco
                    </Button>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gold inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-200 hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gold0 focus:ring-gold">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-gold'
                      : 'text-gray-500 hover:text-black',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
