import React from 'react'
import { Icons } from './Icons'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className="flex flex-col text-center space-y-2">
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm mx-auto max-w-xs">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>

      <UserAuthForm />

      <p className="px-8 text-center text-sm text-muted-foreground">
        New to Breaddit?{' '}
        <Link href='/sign-up' className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn