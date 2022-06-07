// assets
import { IconBrandChrome, IconBrandAsana, IconListCheck, IconBrandGoogleAnalytics } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconBrandAsana, IconListCheck, IconBrandGoogleAnalytics };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const billing = {
    id: 'billing-management',
    title: 'Billing Management',
    type: 'group',
    children: [
        {
            id: 'billing-statistic-page',
            title: 'Statistic',
            type: 'item',
            url: '/billing-statistic',
            icon: icons.IconBrandAsana,
            breadcrumbs: false
        }
        // ,
        // {
        //     id: 'billing-setting-page',
        //     title: 'Setting',
        //     type: 'item',
        //     url: '/billing-setting',
        //     icon: icons.IconListCheck,
        //     breadcrumbs: false
        // }
    ]
};

export default billing;
