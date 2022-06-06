// assets
import { IconBrandChrome, IconSettings } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconSettings };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const trading = {
    id: 'trading-operation',
    type: 'group',
    title: 'Trading Management',
    children: [
        {
            id: 'trading-statistic-page',
            title: 'Statistic',
            type: 'item',
            url: '/trading-statistic',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },

        {
            id: 'trading-setting-page',
            title: 'Setting',
            type: 'item',
            url: '/trading-setting',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default trading;
