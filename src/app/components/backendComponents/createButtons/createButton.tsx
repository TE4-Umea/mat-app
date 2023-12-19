// import styles from './page.module.css' för helvete


export default function CreateButton() {
    const create = () => {
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const disc = (document.getElementById('disc') as HTMLInputElement).value;
        fetch(`http://jupiter.umea-ntig.se:3008/api/dish?name=${title}&desc=${disc}`, {
            method: 'POST',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error('Item already exists');
                    }
                    throw new Error('An error occurred');
                }
                return response.json();
            })
            .then(data => {
                window.alert('Item has been created');
            })
            .catch((error) => {
                window.alert(error.message);
            });
    };

    return (
        <form action={async () => {
            'use server'
            await create() }}>
            <button>Spara</button>
        </form>
    )
}

