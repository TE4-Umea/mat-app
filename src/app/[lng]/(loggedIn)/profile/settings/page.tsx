import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { Trans } from 'react-i18next/TransWithoutContext'

import { Delete } from '../../../../components/storyBookComponents/deleteAcc/deleteAcc'
import { DropDown } from '../../../../components/storyBookComponents/dropDown/dropDown'
import ProfileClient from '../../../../components/storyBookComponents/profile/profileClient'
import { Switch } from '../../../../components/storyBookComponents/switch/switch'
import { useTranslation } from '../../../../i18n'
import { languages } from '../../../../i18n/settings'
import styles from './page.module.css'

export default async function ProfilePage({ params: { lng } }) {
    const session = await getServerSession()
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    return (
        <main>
            <h1 className={styles.h1}>{t('common:diet')}</h1>
            <DropDown options={['Normal', 'Vegetarian']}></DropDown>

            <div className={styles.dflex}>
                <h1 className={styles.h1}>{t('common:notifications')}</h1>
                <Switch></Switch>
            </div>

            <h1 className={styles.h1}>{t('common:language')}</h1>
            <DropDown options={['Svenska', 'Engelska']}></DropDown>
            <Trans i18nKey="languageSwitcher" t={t}>
                Switch from <strong>{{ lng }}</strong> to:{' '}
            </Trans>
            {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                    return (
                        <span key={l}>
                            {index > 0 && ' or '}
                            <Link href={`/${l}`}>{l}</Link>
                        </span>
                    )
                })}

            <h1 className={styles.h1}>{t('common:account')}</h1>
            <div>
                <ProfileClient session={session} lng={lng} />
                <Delete lng={lng}></Delete>
            </div>
        </main>
    )
}
