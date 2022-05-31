// assets
import { IconBrandChrome, IconBrandAsana, IconListCheck, IconHelp, IconBrandGoogleAnalytics } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconBrandAsana, IconListCheck, IconHelp, IconBrandGoogleAnalytics };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'main-management',
    title: 'Others',
    type: 'group',
    children: [
        {
            id: 'member-page',
            title: 'Member Management',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandAsana,
            breadcrumbs: false
        },
        {
            id: 'order-page',
            title: 'Order Management',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconListCheck,
            breadcrumbs: false
        },
        {
            id: 'log-page',
            title: 'Logs',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandGoogleAnalytics,
            breadcrumbs: false
        },
    ]
};

export default other;
