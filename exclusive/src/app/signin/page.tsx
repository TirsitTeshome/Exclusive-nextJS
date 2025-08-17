'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../Landing-component/Footer';
import Header from '../shared-components/Header';
import { useState } from 'react';
import Link from 'next/link';

const SignIn = () => {
  const router = useRouter();
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailPhone.trim() && password.trim()) {
      router.push('/');
    } else {
      alert('Please fill in both Email/Phone and Password.');
    }
  };
  return (
    <>
    <Header/>
    <main className="flex relative h-[calc(100vh-100px)]">
      <div className="">
        <Image
          src="/pics/Side Image.png"
          alt="Phone and cart"
          width={800}
          height={800}
          className="object-cover object-left mt-5"
          priority
        />
      </div>
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5" />
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-100 mt-5">
          <h1 className="text-5xl mb-12">Login</h1>
          <p className="mb-12">Enter your details below</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              className="w-full mb-10 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
              placeholder="Email or Phone"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-10 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full p-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
            >
              Login
            </button>
            <Link href={"../signup"} className="text-red-600 hover:underline block mt-4 text-center">
              Forgot Password?
            </Link>
          </form>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};
export default SignIn;





