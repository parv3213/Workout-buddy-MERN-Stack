import React, { useState } from 'react'
import Button from '../components/Button'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="mt-20 flex w-full justify-center">
      <form onSubmit={(e) => handleSubmit(e)} className="rounded-md bg-white p-4 md:w-[30%]">
        <h3 className="text-lg font-bold">Login</h3>
        <br />

        {/* Email */}
        <label htmlFor="email" className="my-2">
          Email:
        </label>
        <br />

        <input
          type="text"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="my-2 w-full rounded-md border border-slate-300"
        />
        <br />

        {/* Password */}
        <label htmlFor="password">Password:</label>
        <br />

        <input
          type="text"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="my-2 w-full rounded-md border border-slate-300"
        />
        <br />

        {/* Submit button */}
        <div>
          <Button text="Login" disabled={isLoading} />
        </div>
        {error && (
          <div className="mt-4 rounded-md border border-rose-600 bg-rose-50 px-4 py-6 text-rose-600">{error}</div>
        )}
      </form>
    </div>
  )
}

export default Login
