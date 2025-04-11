import React from 'react'
import { SignIn } from "@clerk/nextjs"

export const dynamic = "force-dynamic"

const SigninPage = () => {
    return (
        <div>
            <SignIn />
        </div>
    )
}

export default SigninPage
