import styles from '../saved-meals/page.module.css'
import { getServerSession } from 'next-auth'

export default async function Profile() {

    const session = await getServerSession();

    return (
        <main>
            <div>
                {session?.user?.image ? (
                    <div><img src={session?.user?.image} alt="" /></div>
                ) : (
                    <div>Not logged in</div>
                )}
            </div>
            <div>
                {session?.user?.name ? (

                    <div>{session?.user?.name}</div>
                ) : (
                    <div>Not logged in</div>
                )}
            </div>
            <div>
                {session?.user?.email ? (

                    <div>{session?.user?.email}</div>
                ) : (
                    <div>Not logged in</div>
                )}
            </div>
            <div>
                <div>
                    Statistik
                </div>
                <div>
                    Inställningar
                </div>
                <div>
                    Sparade
                </div>
                <div>
                    Favoriter
                </div>
            </div>
            <button>
                Log out
            </button>
        </main>
    )
}