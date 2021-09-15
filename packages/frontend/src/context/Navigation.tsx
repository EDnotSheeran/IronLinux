import React from 'react';

type NavigationProps = {
  navigation: { name: string; href: string; current: boolean }[];
  setNavigation: React.Dispatch<
    React.SetStateAction<{ name: string; href: string; current: boolean }[]>
  >;
};

const NavContext = React.createContext({} as NavigationProps);

const NavProvider: React.FC = ({ children }) => {
  const [navigation, setNavigation] = React.useState([
    { name: 'Home', href: '/', current: false },
    { name: 'Cursos', href: '/courses', current: false },
    { name: 'Consultoria', href: '/consultancies', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Sobre Nós', href: '/about', current: false },
    { name: 'Fale Conosco', href: '/contact', current: false },
  ]);

  return (
    <NavContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;

export function useNavigation() {
  const { navigation, setNavigation } = React.useContext(NavContext);
  return { navigation, setNavigation };
}
