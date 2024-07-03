'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

export default async function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      rememberMe: false,
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="m-4 sm:m-8">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input type="email"  {...register("email", { required: true })}name="email" className="input input-bordered w-full max-w-xs" />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input type="password"  {...register("password", { required: true })}name="password" className="input input-bordered w-full max-w-xs" />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </label>


        <div className="mb-4 flex items-center">
          <input type="checkbox" name="remember" className="text-blue-500" />
          <label className="text-gray-600 ml-2">Remember Me</label>
          {errors.rememberMe && <p role="alert">{errors.rememberMe.message}</p>}
        </div>

        <div className="mb-6 text-blue-500">
          <Link href="/signup">Signup</Link> |
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" className="btn btn-outline btn-primary">Login</button>

      </form>
    </div>
  );
}
