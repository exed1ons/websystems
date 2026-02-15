import React from 'react';
import { ViewState } from '../types';
import Button from '../components/button';
import InputField from '../components/input-field';

interface LoginProps {
    setView: (view: ViewState) => void;
}

const Login: React.FC<LoginProps> = ({ setView }) => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] px-6 animate-in fade-in duration-500">
            <div className="w-full max-w-sm border border-gray-900 rounded p-8 bg-white">
                <h2 className="text-xl font-semibold uppercase text-gray-900 text-center mb-8">
                    Login
                </h2>

                <div className="space-y-4">
                    <InputField
                        label="Username"
                        placeholder="Enter username"
                    />
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>

                <div className="mt-8">
                    <Button
                        onClick={() => setView('admin')}
                        variant="primary"
                        className="w-full py-2"
                    >
                        SIGN IN
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;