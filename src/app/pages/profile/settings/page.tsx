import ProfilePageFix from '../../../../profileFix/profileFix'
import { Switch } from '../../../components/storyBookComponents/buttons/Switch/Switch'
import { Delete } from '../../../components/storyBookComponents/buttons/DeleteAcc/DeleteAcc'
import { LogOut } from '../../../components/storyBookComponents/buttons/LoggOut/LoggOut'
import { DropDown } from '../../../components/storyBookComponents/buttons/DropDown/DropDown'
import styles from './page.module.css'

export default function ProfilePage() {
    return (
        <main>
            <ProfilePageFix></ProfilePageFix>

            <h1 className={styles.h1}>Diet</h1>
            <DropDown options={['Normal', 'Vegetarian']}></DropDown>

            <div className={styles.dflex}>
                <h1 className={styles.h1}>Notifikationer</h1>
                <Switch></Switch>
            </div>

            <h1 className={styles.h1}>Språk</h1>
            <DropDown options={['Svenska', 'Engelska']}></DropDown>

            <h1 className={styles.h1}>Konto</h1>
            <div>
                <LogOut label='Logga ut'>Logga ut</LogOut>
                <Delete label='Radera konto'>Radera konto</Delete>
            </div>
        </main>
    )
}