import Link from 'next/link'
import { getServerSession } from 'next-auth'

import ProfileClient from '@/app/components/storyBookComponents/profile/profileClient'
import { useTranslation } from '@/app/i18n'

import { DropDown } from '../../../components/storyBookComponents/dropDown/dropDown'
import styles from './page.module.css'

export default async function Setup({ params: { lng } }) {
    const session = await getServerSession()
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    // function continueButton() {
    //     if (session) {
    //         <button onClick={redirect('/')}></button>
    //     } else if (!session) {
    //         <button onClick={redirect('/setup')}></button>
    //     }
    // }

    return (
        <>
            <h1 className={styles.h1}>
                {t('setup_message.setup1')}
                <span className={styles.span}>{t('setup_message.setup2')}</span>
                {t('setup_message.setup3')}
            </h1>

            {!session && <ProfileClient session={session} />}

            <h2 className={styles.h2}>{t('glossary:language')}</h2>
            <DropDown options={['Normal', 'Vegetarian']}></DropDown>
            <h2 className={styles.h2}>{t('glossary:diet')}</h2>
            <DropDown options={['Svenska', 'English']}></DropDown>
            <br />

            {session && <Link href={`/${lng}`}>{t('common:continue')}</Link>}
        </>
    )
}
