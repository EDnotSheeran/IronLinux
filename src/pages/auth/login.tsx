import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '@libs/hooks';
import { LoginLayout } from '@components';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login: NextPage = () => {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password.');
    }
  };

  useEffect(() => {
    if (user) Router.push('/admin');
  }, [user]);

  // return (
  //   <>
  //     <h1>Login to Example</h1>
  //     {errorMsg && <p className="error">{errorMsg}</p>}
  //     <div className="form-container">
  //       <form onSubmit={onSubmit}>
  //         <label>
  //           <span>email</span>
  //           <input
  //             className="border-2 border-gray-500"
  //             type="text"
  //             name="email"
  //             required
  //           />
  //         </label>
  //         <label>
  //           <span>Password</span>
  //           <input
  //             className="border-2 border-gray-500"
  //             type="password"
  //             name="password"
  //             required
  //           />
  //         </label>
  //         <div className="flex flex-col items-center">
  //           <button className="bg-blue-500" type="submit">
  //             Login
  //           </button>
  //           <Link href="/signup">
  //             <a>I don&apos;t have an account</a>
  //           </Link>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-grey text-sm font-bold">Sign in with</h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-gray-200 active:bg-gray-300 text-grey px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <FaGithub className="text-lg mr-1" />
                    Github
                  </button>
                  <button
                    className="bg-gray-200 active:bg-gray-300 text-grey px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <FaGoogle className="text-lg mr-1" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </div>
                  {/* {errorMsg && <p className="error">{errorMsg}</p>} */}
                  {errorMsg && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded relative my-2"
                      role="alert"
                    >
                      <span className="block sm:inline text-sm">
                        {errorMsg}
                      </span>
                      <span
                        className="absolute top-0 bottom-0 right-0 px-2 py-2"
                        onClick={() => setErrorMsg('')}
                      >
                        <svg
                          className="fill-current h-6 w-6 text-red-500"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <title>Close</title>
                          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                      </span>
                    </div>
                  )}
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gold text-white active:bg-opacity-50 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="text-gray-800 hover:text-gold"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a className="text-gray-800 hover:text-gold">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = page => <LoginLayout>{page}</LoginLayout>;
