import ProfileClient from '../../../[lng]/components/storyBookComponents/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Switch } from '../../../[lng]/components/storyBookComponents/Switch/Switch'
import { Delete } from '../../../[lng]/components/storyBookComponents/DeleteAcc/DeleteAcc'
import { DropDown } from '../../../[lng]/components/storyBookComponents/DropDown/DropDown'
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