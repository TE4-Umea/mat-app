import styles from '../planning/page.module.css'

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
                    lunch
                    <button>+ Lägg till måltid</button>
                    <button>Generera en måltid</button>
                </div>
                <div>
                    middag
                    <button>+ Lägg till måltid</button>
                    <button>Generera en måltid</button>
                </div>
            </div>
        </main>
    )
}