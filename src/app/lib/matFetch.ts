export default async function Fetch() {

    try {
        const staticData = await fetch('http://jupiter.umea-ntig.se:3008/api/dish/', {
            method: 'GET',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
            },
        })
        return staticData.json()

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');

    }
}