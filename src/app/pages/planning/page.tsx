'use client'

import styles from '../planning/page.module.css'
import DropDown from '../../components/dropDown/dropDown'

export default function Planning() {
    return (
        <main>
            <h1>Veckans mat</h1>
            <h2>Planera eller generera veckans måltider</h2>
            <div>
                <div>
                    <div>
                        dag
                    </div>
                    <div>
                        datum
                    </div>
                </div>
                <div>
                    <p>lunch</p>
                    <DropDown></DropDown>
                    <button>Generera en måltid</button>
                </div>
                <div>
                    <p>middag</p>
                    <DropDown></DropDown>
                    <button>Generera en måltid</button>
                </div>
            </div>
        </main>
    )
}