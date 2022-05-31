// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const trading = {
    id: 'trading-operation',
    type: 'group',
    title: 'Trading Operatioin',
    children: [
        {
            id: 'trading-page',
            title: 'Operation Management',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
    ]
};

export default trading;
