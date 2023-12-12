export default async function Fetch() {

    try {
        const headers = new Headers();
        headers.append("jwt-token", process.env.MAT_API || "");

        const staticData = await fetch(`http://jupiter.umea-ntig.se:3008/api/dish`, { cache: 'no-store', headers })
        return staticData.json()
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}