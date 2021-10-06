import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export const NavbarContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const NavbarProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) return;
  const { isOpen, setOpen } = context;
  return { isOpen, setOpen };
};
