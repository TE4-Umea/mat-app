// import { useTranslation } from '@/app/i18n'

// import { MealProvider } from '../../../components/backendComponents/dropDown/mealContext'
// import { HistoryCard } from '../../../components/storyBookComponents/history/historyCard'
// import styles from './page.module.css'

// export default async function History({ params: { lng } }) {
//     const { t } = await useTranslation(lng, ['glossary', 'common'])
//     const date = new Date()
//     // const today = date.getMonth() + 1
//     // const todayaswell = date.getDate()
//     // const data = [1, 2, 3, 4, 5, 6, 7]

//     const getDayOfWeek = (date, offset) => {
//         const newDate = new Date(date)
//         newDate.setDate(newDate.getDate() + offset)
//         return newDate.toLocaleString('default', { weekday: 'long' })
//     }

//     async function fetchMeals() {
//         const response = await fetch(`http://jupiter.umea-ntig.se:3008/api/meal`, {
//             method: 'GET',
//             headers: {
//                 authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
//             },
//         })
//         let data = await response.json()
//         console.log(data)

//         // Filter out meals that are in the future
//         data = data.filter((meal) => {
//             return new Date(meal.time).getTime() < new Date().getTime()
//         })
//         return data
//     }

//     const meals = await fetchMeals()

//     function convertToDate(time) {
//         return new Date(time).toLocaleDateString('sv-SE')
//     }

//     return (
//         <main>
//             <MealProvider currentDay={''}>
//                 <div className={styles.prison}>
//                     <h1 className={styles.title}>
//                         {t('glossary:history_title')}
//                     </h1>

//                     <p className={styles.undertext}>
//                         {t('glossary:history_desc')}
//                     </p>
//                 </div>

//                 {meals.map((meal, index) => (
//                     <div key={meal.id}>
//                         {(meals[index - 1] && convertToDate(meals[index - 1].time) !== convertToDate(meal.time) || index === 0) ? (
//                             <h2>{convertToDate(meal.time)}</h2>
//                         ) : (
//                             <></>
//                         )}
//                         {/* <h2>{convertToDate(meal.time)}</h2> */}
//                         <p>{meal.dish.name} till {meal.type}</p>
//                     </div>
//                 ))}

//                 {/* {data.map((offset) => (
//                     <HistoryCard
//                         key={offset}
//                         today={today}
//                         todayaswell={todayaswell + offset - 1}
//                         currentDay={getDayOfWeek(date, offset - 1)}
//                     ></HistoryCard>
//                 ))} */}
//             </MealProvider>
//         </main >
//     )
// }
