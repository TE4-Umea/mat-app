import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Profile } from '@/app/components/storyBookComponents/cards/Profile/Profile'
import styles from '../saved-meals/page.module.css'

export default async function SavedMeals() {
    const session = await getServerSession();
    return (
        <main>
            <Profile></Profile>
        </main>
    )
}