import { getSession } from "next-auth/react";
import ProfileClient from '../app/components/storyBookComponents/cards/Profile/ProfileClient';

export default function ProfilePageFix({ session }) {
    return (
        <main>
            <ProfileClient />
        </main>
    )

}


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: { session }
    }
}