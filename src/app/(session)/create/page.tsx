import styles from './page.module.css'
import { CreateMealIcons } from '@/app/components/storyBookComponents/buttons/CreateMealIcons/CreateMealIcons'

export default function Create() {
    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const icons = [/*Kniv och gaffel */ "M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" ,
        /*Sop och tunna */ "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",
        /*Hist och rik */ "M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]

    return (
        <main>
            <div className={styles.prison}>
                <input className={styles.title} id='title' type="text" placeholder='Namn...' />
                <label htmlFor='title'>Tryck för att redigera titeln</label>
            </div>


            <div className={styles.infoTitle}>
                <p>Ytterligare information</p>
                <p>(Frivilligt)</p>
            </div>

            <form className={styles.infoContainer}>
                <textarea className={styles.input} maxLength={500} />
            </form>

            <div className={styles.iconTitle}><p>välj icon för maträtten</p></div>

            <div className={styles.iconsContainer}>
                {id.map((id) => (
                    <CreateMealIcons key={id} iconId={"Icon" + id} svg={icons[id-1]}></CreateMealIcons>
                ))}
            </div>

        </main>
    )
}