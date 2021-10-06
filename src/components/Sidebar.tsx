import React from 'react';
import { useUser } from '@libs/hooks';

const Sidebar: React.FC = ({ children }) => {
  const [user, { mutate }] = useUser();

  async function handleLogout() {
    await fetch('/api/logout');
    mutate({ user: null });
  }
  return (
    <>
      <a role="button" onClick={handleLogout}>
        Logout
      </a>
    </>
  );
};

export default Sidebar;
