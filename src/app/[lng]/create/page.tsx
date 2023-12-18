
import styles from './page.module.css'
import { HistoryCard } from '../components/storyBookComponents/history/historyCard'
import { useTranslation } from '@/app/i18n'

export default async function History({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    const Create = () => {
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const disc = (document.getElementById('disc') as HTMLInputElement).value;
       fetch (`http://jupiter.umea-ntig.se:3008/api/dish?name=${title}&desc=${disc}` , {
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

    const Delete = () => {
        const remove = (document.getElementById('remove') as HTMLInputElement).value;
         fetch (`http://jupiter.umea-ntig.se:3008/api/dish/${remove}` , {
            method : 'DELETE',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        })
    };

    
    return (
        <main>

            <div className={styles.prison}>
                <input className={styles.title} id='title' type="text" placeholder={t('common:name')} />
                <label htmlFor='title'>Tryck för att redigera titeln</label>
            </div>


            <div className={styles.infoTitle}>
                <p>{t('common:additional')}</p>
                <p>({t('common:optional')})</p>
            </div>

            <form className={styles.infoContainer}>
                <textarea className={styles.input} maxLength={500} id='disc' />
            </form>

            <div className={styles.iconTitle}><p>{t('glossary:icon_choice')}</p></div>

            <div className={styles.iconsContainer}>
                <input className={styles.iconsRadio} type="radio" id='icon1' name='icons' />
                <label htmlFor='icon1'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" /></svg></label>

                <input className={styles.iconsRadio} type="radio" id='icon2' name='icons' />
                <label htmlFor='icon2'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon3' name='icons' />
                <label htmlFor='icon3'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon4' name='icons' />
                <label htmlFor='icon4'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon5' name='icons' />
                <label htmlFor='icon5'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon6' name='icons' />
                <label htmlFor='icon6'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon7' name='icons' />
                <label htmlFor='icon7'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon8' name='icons' />
                <label htmlFor='icon8'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon9' name='icons' />
                <label htmlFor='icon9'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon10' name='icons' />
                <label htmlFor='icon10'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon11' name='icons' />
                <label htmlFor='icon11'>hallå</label>

                <input className={styles.iconsRadio} type="radio" id='icon12' name='icons' />
                <label htmlFor='icon12'>hallå</label>
            </div>

            <div className={styles.savebutton}>
                <button onClick={Create} className={styles.save}>Spara</button>
            </div>

            <div className={styles.deletebutton}>
                <button onClick={Delete} className={styles.delete}>Radera</button>
                <input className={styles.deleteInput} id='remove' type="text"/>
                <label htmlFor='delete'>Tryck för att radera</label>
            </div>

        </main>
    )
}