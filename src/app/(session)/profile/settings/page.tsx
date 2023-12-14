import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Switch } from '@/app/components/storyBookComponents/buttons/Switch/Switch'
import { Delete } from '@/app/components/storyBookComponents/buttons/DeleteAcc/DeleteAcc'
import { DropDown } from '@/app/components/storyBookComponents/buttons/DropDown/DropDown'
import styles from './page.module.css'

export default async function ProfilePage() {
    const session = await getServerSession();
    return (
        <main>

            <h1 className={styles.h1}>Språk</h1>
            <DropDown options={['Svenska', 'Engelska']}></DropDown>

            <div className={styles.dflex}>
                <h1 className={styles.h1}>Notifikationer</h1>
                <Switch></Switch>
            </div>

            <h1 className={styles.h1}>Diet</h1>
            <DropDown options={['Normal', 'Vegetarian']}></DropDown>

            <h1 className={styles.h1}>Konto</h1>
            <div>
                <ProfileClient session={session} />
                <Delete></Delete>
            </div>
        </main>
    )
}