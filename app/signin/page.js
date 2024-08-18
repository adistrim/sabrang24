'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result.error) {
                setError('Invalid email or password');
            } else {
                router.push('/admin');
            }
        } catch (error) {
            setError('Something went wrong. Please try again later.');
            console.error('Sign-in error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-black opacity-50" aria-hidden="true" />

            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-sm w-96 relative z-10">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Admin Access
                    </span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            aria-label="Email address"
                            className="w-full pl-10 pr-3 py-2 bg-gray-800 border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            aria-label="Password"
                            className="w-full pl-10 pr-3 py-2 bg-gray-800 border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        />
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm" role="alert">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-full hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center"
                    >
                        <FaLock className="mr-2" aria-hidden="true" /> Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
