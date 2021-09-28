import React, { useEffect, useRef } from 'react';
import Router from 'next/router';
import { useUser } from '@lib/hooks';
import { Layout } from '@components';

const ProfileEdit: NextPage = () => {
  const [user, { mutate }] = useUser();
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) return;
    if (nameRef.current) nameRef.current.value = user.name;
  }, [user]);

  const handleEditProfile: React.FormEventHandler<HTMLFormElement> =
    async e => {
      e.preventDefault();

      const body = {
        name: nameRef.current ? nameRef.current.value : '',
      };
      const res = await fetch(`/api/user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const updatedUser = await res.json();

      mutate(updatedUser);
    };

  async function handleDeleteProfile() {
    const res = await fetch(`/api/user`, {
      method: 'DELETE',
    });

    if (res.status === 204) {
      mutate({ user: null });
      Router.replace('/');
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleEditProfile}>
          <label>
            <span>Name</span>
            <input
              className="border-2 border-gray-500"
              type="text"
              ref={nameRef}
              required
            />
          </label>
          <div className="submit">
            <button type="submit">Update profile</button>
            <a role="button" className="delete" onClick={handleDeleteProfile}>
              Delete profile
            </a>
          </div>
        </form>
      </div>
      <style jsx>{`
        .delete {
          color: #f44336;
          cursor: pointer;
        }
        .delete:hover {
          color: #b71c1c;
        }
      `}</style>
    </>
  );
};

const ProfilePage: NextPage = () => {
  const [user, { loading }] = useUser();

  useEffect(() => {
    // redirect user to login if not authenticated
    if (!loading && !user) Router.replace('/login');
  }, [user, loading]);

  return (
    <>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <ProfileEdit />
        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <Layout.Login>{page}</Layout.Login>;
};
