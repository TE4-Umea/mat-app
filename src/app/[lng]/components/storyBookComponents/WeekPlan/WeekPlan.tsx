import React from 'react';
import './WeekPlan.css';
import '/src/app/globals.css';
import DropDown from '../../backendComponents/dropDown/dropDown';
import { MealProvider } from '../../backendComponents/dropDown/MealContext';
// import { useTranslation } from '@/app/i18n'

export function WeekPlan(props) {

    // const { t } = await useTranslation(lng, ['glossary', 'common'])

    // if (lng = 'sv') {
    //     if (currentDay == 'Thursday') {
    //         currentDay = 'Torsdag'
    //     }
    // }
    // else if (lng = 'en') {
    //     currentDay = currentDay
    // }

    return (
        <MealProvider currentDay={""}>

            <>
                <div className='weekPlanBakk'>
                    <div id='weekPlanFlex'>
                        <p className='weekPlanTitle'>{props.currentDay}</p>
                        <p className='weekPlanDate'> {props.todayaswell} / {props.today}</p>
                    </div>


                    <div className='prison'>

                        <div className='weekPlanLunch'>
                            <p className='weekPlanText'>
                                Lunch
                                {/* {t('common:lunch')} */}
                            </p>
                            <div id='weekPlanFlex'>
                                {/* <div className='weekPlanAddRuta'><p className='weekPlanTextrutaa'>+ Lägg till måltid</p></div>
                            <div className='weekPlanGenerate'><p className='weekPlanTextrutaa'>Generera en måltid</p></div> */}
                                <DropDown mealType="Lunch" />

                            </div>
                        </div>

                        <div className='weekPlanMiddag'>
                            <p className='weekPlanText'>
                                Dinner
                                {/* {t('common:dinner')} */}
                            </p>
                            <div id='weekPlanFlex'>
                                {/* <div className='weekPlanRuta'><p className='weekPlanTextruta'>Mat i skål</p></div>
                            <div className='weekPlanDelete'></div> */}
                                <DropDown mealType="Dinner" />
                            </div>
                        </div>

                    </div>


                </div>
            </>
        </MealProvider>
    );
};