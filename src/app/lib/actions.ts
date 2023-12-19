'use server'

export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
};

export async function createMeal (prevState: State, formData: FormData) {
    console.log('createMeal', formData)

    const dish = {
        "name": "Pasta",
        "desc": "Pasta with tomato sauce",
    }

    fetch(`http://jupiter.umea-ntig.se:3008/api/dish`, {
        method: 'POST',
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
        },
        body: JSON.stringify(dish),
    }).then(response => {
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('Item already exists');
            }
            throw new Error('An error occurred');
        }
        return response.json();
    })
    .then(data => {
        console.log('Item has been created');
    })
    .catch((error) => {
        console.log(error.message);
    });
}



