import React, { useState } from "react";
import {Link} from "@inertiajs/inertia-react";
import { useForm } from '@inertiajs/inertia-react'
import {Dashboard} from "../../components/layouts/dashboard";

function Signin() {

  const { data, setData, post, processing, errors } = useForm({
    username: '',
    password: '',
    remember: false,
  })

  function submit(e) {
    e.preventDefault()
    post('/login')
  }
  return (

    <main className="bg-white">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2 block shadow-lg bg-purple-500">
          <div className="min-h-screen h-full flex flex-col after:flex-1">

            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">

                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                    <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                    <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-m mx-auto ">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">Welcome back! ✨</h1>
              {/* Form */}
              <form onSubmit={submit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">UserName</label>
                    <input id="username" className="form-input w-full" value={data.username} onChange={e => setData('username', e.target.value)} />
                    {errors.username && <div>{errors.username}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password" >Password</label>
                    <input id="password" className="form-input w-full" type="password" value={data.password} onChange={e => setData('password', e.target.value)} autoComplete="on" />
                    {errors.password && <div>{errors.password}</div>}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">

                  <button className="btn bg-indigo-300  text-lg hover:bg-indigo-600 text-white ml-3"
                          type="submit" disabled={processing}  >
                    Sign In</button>
                </div>
              </form>
              {/* Footer */}

            </div>

          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src="/images/logo.png" width="760" height="1024" alt="Authentication" />
        </div>

      </div>

    </main>

  );
}

export default Signin;