import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '@lib/hooks';

const Login: NextPage = () => {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try better!');
    }
  };

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/');
  }, [user]);

  return (
    <>
      <h1>Login to Example</h1>
      {errorMsg && <p className="error">{errorMsg}</p>}
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <label>
            <span>Username</span>
            <input
              className="border-2 border-gray-500"
              type="text"
              name="username"
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              className="border-2 border-gray-500"
              type="password"
              name="password"
              required
            />
          </label>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500" type="submit">
              Login
            </button>
            <Link href="/signup">
              <a>I don&apos;t have an account</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
