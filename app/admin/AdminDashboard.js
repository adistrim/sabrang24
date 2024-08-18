'use client'

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminDashboard({ initialSession }) {
    const { data: session } = useSession()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ redirect: false })
        router.push("/signin")
    }

    const currentSession = session || initialSession

    if (!currentSession || !currentSession.user.role || currentSession.user.role !== 'admin') {
        return <p>Access Denied</p>
    }

    return (
        <div>
            <h1>Welcome to the Admin Dashboard, {currentSession.user.name}</h1>
            <p>Your role is: {currentSession.user.role}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}