import ProfileClient from '../../components/storyBookComponents/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Switch } from '../../components/storyBookComponents/Switch/Switch'
import { Delete } from '../../components/storyBookComponents/DeleteAcc/DeleteAcc'
import { DropDown } from '../../components/storyBookComponents/DropDown/DropDown'
import styles from './page.module.css'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'
import { useTranslation } from '../../../i18n'
import Link from 'next/link'

export default async function ProfilePage({ params: { lng } }) {
    const session = await getServerSession();
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
            {languages.filter((l) => lng !== l).map((l, index) => {
                return (
                    <span key={l}>
                        {index > 0 && (' or ')}
                        <Link href={`/${l}`}>
                            {l}
                        </Link>
                    </span>
                )
            })}

            <h1 className={styles.h1}>{t('common:account')}</h1>
            <div>
                <ProfileClient session={session} lng={lng} />
                <Delete></Delete>
            </div>
        </main>
    )
}