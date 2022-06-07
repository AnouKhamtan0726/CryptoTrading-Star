// assets
import { IconFriends, IconAdjustmentsAlt } from '@tabler/icons';

// constant
const icons = { IconFriends, IconAdjustmentsAlt };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const referral = {
    id: 'referral-management',
    type: 'group',
    title: 'Referral Management',
    children: [
        {
            id: 'referral-statistic-page',
            title: 'Statistic',
            type: 'item',
            url: '/referral-statistic',
            icon: icons.IconFriends,
            breadcrumbs: false
        }
        // ,
        // {
        //     id: 'referral-setting-page',
        //     title: 'Setting',
        //     type: 'item',
        //     url: '/referral-setting',
        //     icon: icons.IconAdjustmentsAlt,
        //     breadcrumbs: false
        // }
    ]
};

export default referral;
