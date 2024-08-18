'use client'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FaUsers, FaCalendarAlt, FaClock, FaMicrophone, FaSignOutAlt } from 'react-icons/fa'

export default function AdminDashboard({ initialSession }) {
    const { data: session } = useSession()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ redirect: false })
        router.push("/signin")
    }

    const currentSession = session || initialSession

    if (!currentSession || !currentSession.user.role || currentSession.user.role !== 'admin') {
        return <p className="text-white text-center">Access Denied</p>
    }

    const adminActions = [
        { name: 'Team Members', icon: FaUsers, action: () => console.log('Team Members action') },
        { name: 'Events', icon: FaCalendarAlt, action: () => console.log('Events action') },
        { name: 'Schedule', icon: FaClock, action: () => console.log('Schedule action') },
        { name: 'Artists', icon: FaMicrophone, action: () => console.log('Artists action') },
    ]

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900 rounded-lg p-6 mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Admin Dashboard
                        </span>
                    </h1>
                    <p className="text-gray-300 mb-4">Welcome, {currentSession.user.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    {adminActions.map((action, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
                            onClick={action.action}
                        >
                            <action.icon className="text-blue-400 text-4xl mb-2" />
                            <span className="text-lg font-semibold">{action.name}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-full hover:from-blue-600 hover:to-purple-700 flex items-center justify-center"
                >
                    <FaSignOutAlt className="mr-2" /> Logout
                </button>
            </div>
        </div>
    )
}