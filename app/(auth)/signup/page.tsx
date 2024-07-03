'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
  confirmPassword: string
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="m-4 sm:m-8">
      <h1 className="text-2xl font-semibold mb-4">Signup</h1>

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

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input type="password"  {...register("confirmPassword", { required: true })}name="confirmPassword" className="input input-bordered w-full max-w-xs" />
          {errors.confirmPassword && <p role="alert">{errors.confirmPassword.message}</p>}
        </label>

        <div className="mb-6 text-blue-700">
          <Link href="/login">Login</Link> | {' '}
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" className="btn btn-info">Signup</button>

      </form>
    </div>
  );
}
