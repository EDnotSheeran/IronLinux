import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Cursos', href: '#', current: false },
  { name: 'Consultoria', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Sobre Nós', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto py-8 px-8 max-w-screen-2xl">
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
                    {navigation.map(item => (
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
                    ))}
                    <button className="text-white font-semibold font-poppins border-gold border-2 bg-gold px-8 py-1.5 rounded-md ml-10 xl:ml-24 hover:text-gold hover:bg-transparent">
                      Fale Conosco
                    </button>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-800">
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
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <button className="text-white font-semibold font-poppins bg-gold px-8 py-1.5 rounded-md mx-auto block">
                Fale Conosco
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
