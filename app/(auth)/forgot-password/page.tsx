'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
}

export default async function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="m-4 sm:m-8">

      <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input type="email"  {...register("email", { required: true })}name="email" className="input input-bordered w-full max-w-xs" />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </label>

        <div className="mb-6 text-blue-500">
          <Link href="/signup">Signup</Link> |
          <Link href="/forgot-password">Login</Link>
        </div>

        <button type="submit" className="btn btn-outline btn-primary">Reset Password</button>

      </form>
    </div>
  );
}
