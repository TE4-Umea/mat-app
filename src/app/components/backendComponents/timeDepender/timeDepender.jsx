import React from "react";
import { useTranslation } from '../../../i18n'

export const Time = async ({ lng }) => {
    var today = new Date();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    if (today.getHours() <= 12 && today.getHours() >= 6) {
        return (
            <div>
                {t('glossary:greeting.morning')}
            </div>
        );
    };
    if (today.getHours() >= 12 && today.getHours() <= 16) {
        return (
            <div>
                {t('glossary:greeting.afternoon')}
            </div>
        );
    };
    if (today.getHours() >= 16) {
        return (
            <div>
                {t('glossary:greeting.evening')}
            </div>
        );
    };
}