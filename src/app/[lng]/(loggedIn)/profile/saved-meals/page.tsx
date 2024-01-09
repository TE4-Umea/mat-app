import { useTranslation } from '@/app/i18n'

export default async function SavedMeals({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    const List = async () => {
        const response = await fetch(
            `http://jupiter.umea-ntig.se:3008/api/saved`,
            {
                method: 'GET',
                headers: {
                    authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
                },
            }
        )
        const data = await response.json()
        return data
    }

    const data = await List()

    return (
        <>
            <h1>{t('glossary:saved_button')}</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.dish.name}</h2>
                    <button>taborticon</button>
                </div>
            ))}
        </>
    )
}
