export default async function Fetch() {
    try {
        const staticData = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
            { cache: 'no-store' }
        )
        return staticData.json()
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch revenue data.')
    }
}
