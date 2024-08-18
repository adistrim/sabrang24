import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import AdminDashboard from "./AdminDashboard"

export default async function AdminPage() {
    const session = await getServerSession(authOptions)

    console.log('Admin page - Full session:', JSON.stringify(session, null, 2))

    if (!session) {
        console.log('Admin page - No session, redirecting to signin')
        redirect("/signin")
    }

    if (!session.user.role || session.user.role !== 'admin') {
        console.log(`Admin page - User role is ${session.user.role || 'undefined'}, not admin. Redirecting to signin`)
        redirect("/signin")
    }

    return <AdminDashboard initialSession={session} />
}