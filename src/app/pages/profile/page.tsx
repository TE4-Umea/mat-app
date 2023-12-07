import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Profile } from '@/app/components/storyBookComponents/cards/Profile/Profile'

export default async function ProfilePage() {
    const session = await getServerSession();
    return (
        <main>
            <Profile></Profile>
            <ProfileClient session={session} />
        </main>
    )
}

