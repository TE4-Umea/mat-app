import { useTranslation } from '@/app/i18n'

export default async function SavedMeals({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    const List = async () => {
        const response = await fetch(`http://jupiter.umea-ntig.se:3008/api/saved`, {
            method: 'GET',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        });
        const data = await response.json();
        console.log(data);
        return data;
    };
    const data = await List();

    const Delete = (id) => {
        fetch(`http://jupiter.umea-ntig.se:3008/api/saved/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        })
    };

    return (
        <>
            <h1>{t('glossary:saved_button')}</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.dish.name}</h1>
                    <p id='remove'>{item.id}</p>
                    <button>Radera</button>

                </div>
            ))}
        </>
    )
}