import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '@lib/hooks';

const SignupPage: NextPage = () => {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      name: (e.currentTarget.name as unknown as HTMLInputElement).value,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 201) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/admin');
  }, [user]);

  return (
    <>
      <h1>Sign up to Example</h1>
      {errorMsg && <p className="error">{errorMsg}</p>}
      <div className="flex justify-center">
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label>
            <span>Username</span>
            <input
              className="border-2 border-gray-500 ml-auto"
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
          <label>
            <span>Repeat password</span>
            <input
              className="border-2 border-gray-500"
              type="password"
              name="rpassword"
              required
            />
          </label>
          <label>
            <span>Name</span>
            <input
              className="border-2 border-gray-500"
              type="text"
              name="name"
              required
            />
          </label>
          <div className="submit">
            <button type="submit">Sign up</button>
            <Link href="/login">
              <a>I already have an account</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
