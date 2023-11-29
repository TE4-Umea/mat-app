import { Card as Profile } from '../../components/storyBookComponents/cards/Profile/Profile'
import { getSession } from "next-auth/react";
import ProfileClient from '../../components/storyBookComponents/cards/Profile/ProfileClient';

export default function ProfilePage({ session }) {
    if (session) {
        return (
            <main>
                <Profile></Profile>
                <ProfileClient />
            </main>
        )
    } else {
        return (
            <>
                Not signed in <br />
                <ProfileClient />
            </>
        );
    }
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: { session }
    }
}