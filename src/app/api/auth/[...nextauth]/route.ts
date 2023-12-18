import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';
import { redirect } from 'next/navigation'
import { useTranslation } from '@/app/i18n'

export const authOptions = {

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),

    ],
    callbacks: {
        async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
            return baseUrl + "/en/setup"
        }
    }
}


export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };