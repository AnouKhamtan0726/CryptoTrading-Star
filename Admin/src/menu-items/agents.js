// assets
import { IconFriends, IconAdjustmentsAlt, IconHelp } from '@tabler/icons';

// constant
const icons = { IconFriends, IconAdjustmentsAlt, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const agent = {
    id: 'agent-management',
    type: 'group',
    title : 'Agent Management',
    children: [
        {
            id: 'agent-page',
            title: 'All Agents',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconFriends,
            breadcrumbs: false
        },
        {
            id: 'agent-level-page',
            title: 'Agent Level Setting',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconAdjustmentsAlt,
            breadcrumbs: false
        },
    ]
};

export default agent;
