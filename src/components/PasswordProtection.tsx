import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordProtectionProps {
  onCorrectPassword: () => void;
}

export function PasswordProtection({ onCorrectPassword }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pass') {
      onCorrectPassword();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-4">
            <Lock className="w-8 h-8 text-violet-600" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-800">Password</h1>
          <p className="text-zinc-600 mt-2">パスワードを入力してください</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full px-4 py-3 border-2 ${
                error ? 'border-red-300' : 'border-zinc-200'
              } rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200`}
              placeholder="Enter password"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">パスワードが正しくありません。再度ご入力ください。</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-8 rounded-xl font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
