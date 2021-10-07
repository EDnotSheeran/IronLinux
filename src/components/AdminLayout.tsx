import React, { useEffect } from 'react';
import { classNames } from '@libs/utils';
import { BiMenu, BiChevronDown, BiUser, BiLogOut } from 'react-icons/bi';
import { NavbarProvider, useNavbar } from '@context/Navbar';
import { Disclosure, Transition } from '@headlessui/react';
import Router from 'next/router';
import { APP_NAME } from '@libs/constants';
import { useUser } from '@libs/hooks';

const AdminLayout: React.FC = ({ children }) => {
  const [user] = useUser();

  useEffect(() => {
    if (!user) Router.push('/auth/login');
  }, [user]);

  useEffect(() => {
    document.body.classList.add('bg-pink-10');
  });

  if (!user) return <></>;

  return (
    <NavbarProvider>
      <div
        className={classNames(
          'mt-14 px-4 pt-4 font-poppins  text-grey-200',
          'md:pt-4 md:pr-12 md:pb-0 md:pl-24'
        )}
      >
        <Header />
        <NavBar />
        <main>{children}</main>
      </div>
    </NavbarProvider>
  );
};

export default AdminLayout;

const Header: React.FC = ({ children }) => {
  const { isOpen, setOpen } = useNavbar()!;

  const avatar =
    'https://avatars.githubusercontent.com/u/55529750?s=400&u=0e15dd129323700c7f38a0e5e1fe9e84f763ee6d&v=4';
  return (
    <>
      <header
        className={classNames(
          'fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4',
          'md:pt-0 md:pr-12 md:pb-0 md:pl-24'
        )}
      >
        <div className="flex items-center justify-between h-14 md:h-16">
          <img
            src={avatar}
            alt="profile_pic"
            className="w-9 h-9 rounded-50 md:order-1 md:w-10 md:h-10"
          />
          <a href="#" className="text-gray-800 font-medium hidden md:block">
            {APP_NAME}
          </a>
          <div
            className="rounded-50 active:bg-gray-700 active:bg-opacity-20 cursor-pointer md:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            <BiMenu className="m-2 text-xl text-gray-800" />
          </div>
        </div>
      </header>
    </>
  );
};

const NavBar: React.FC = () => {
  const { isOpen, setOpen } = useNavbar()!;

  const [user, { mutate }] = useUser();

  async function handleLogout() {
    await fetch('/api/logout');
    mutate({ user: null });
  }

  return (
    <div
      className={classNames(
        'fixed top-0 h-screen pt-4 px-4 pb-12 bg-white z-50 duration-500 w-56',
        isOpen ? 'left-0' : '-left-full',
        'md:left-0 md:px-6 md:pt-5 md:pb-12 md:w-18 md:hover:w-56 group'
      )}
    >
      <nav className="h-full flex flex-col justify-between overflow-auto no-scrollbar">
        <div className="grid gap-y-7">
          <a
            href="#"
            className="flex items-center font-semibold mb-10 hover:text-purple-700"
          >
            <img className="w-6 mr-2" src="/img/mascote.svg" alt="" />
            <span className="md:opacity-0 md:duration-300 md:group-hover:opacity-100">
              {APP_NAME}
            </span>
          </a>

          <div className="grid gap-y-4">
            <h3 className="uppercase leading-4 text-gray-400 md:opacity-0 md:duration-300 md:group-hover:opacity-100">
              Profile
            </h3>
            <a href="#" className="flex items-center hover:text-purple-700">
              <BiUser className="text-xl mr-2" />
              <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100">
                Home
              </span>
            </a>

            <a href="#" className="flex items-center hover:text-purple-700">
              <BiUser className="text-xl mr-2" />
              <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100">
                Messages
              </span>
            </a>
          </div>

          <div className="grid gap-y-4">
            <h3 className="uppercase leading-4 text-gray-400 md:opacity-0 md:duration-300 md:group-hover:opacity-100">
              Menu
            </h3>
            <Dropdown />
            <Dropdown />

            <a href="#" className="flex items-center hover:text-purple-700">
              <BiUser className="text-xl mr-2" />
              <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100">
                Explore
              </span>
            </a>

            <a href="#" className="flex items-center hover:text-purple-700">
              <BiUser className="text-xl mr-2" />
              <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100">
                Saved
              </span>
            </a>
          </div>
        </div>
        <div className="grid">
          <a
            href="#"
            className="flex items-center mt-20 hover:text-purple-700"
            onClick={handleLogout}
          >
            <BiLogOut className="text-xl mr-2" />
            <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100">
              Log Out
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

const Dropdown: React.FC = ({ children }) => {
  return (
    <Disclosure as="div" className="overflow-hidden duration-500 ease-in-out">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full flex items-center hover:text-purple-700">
            <BiUser className="text-xl mr-2" />
            <span className="whitespace-nowrap text-sm font-medium md:opacity-0 md:duration-300 md:group-hover:opacity-100 ">
              Profile
            </span>
            <BiChevronDown
              className={classNames(
                ' text-lg ml-auto',
                open ? 'rotate-180 duration-500' : ''
              )}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="bg-purple-100 rounded mt-4 ">
              <div className="grid gap-y-2 py-3 pr-10 pl-7 md:gap-y-2">
                <DropdownItem />
                <DropdownItem />
                <DropdownItem />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const DropdownItem: React.FC = ({ children }) => {
  return (
    <a
      href="#"
      className="text-sm font-medium text-gray-500 hover:text-purple-700"
    >
      Passwords
    </a>
  );
};
