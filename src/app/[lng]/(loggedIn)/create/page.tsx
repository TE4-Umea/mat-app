import CreateButton from '@/app/components/backendComponents/createButtons/createButton'
import DeleteButton from '@/app/components/backendComponents/createButtons/deleteButton'
import { useTranslation } from '@/app/i18n'

import Form from './form'

export default async function History({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    return (
        <main>
            <Form />
        </main>
    )
}
