import styles from './page.module.css'



export default function DeleteButton() {
    const Delete = () => {
        const remove = (document.getElementById('remove') as HTMLInputElement).value;
        fetch(`http://jupiter.umea-ntig.se:3008/api/dish/${remove}`, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        })
    };

    return (
        <div className={styles.deletebutton}>
            <button onClick={Delete} className={styles.delete}>Radera</button>
            <input className={styles.deleteInput} id='remove' type="text" />
            <label htmlFor='delete'>Tryck för att radera</label>
        </div>
    )
} 
