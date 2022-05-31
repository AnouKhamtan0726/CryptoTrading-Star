// assets
import { IconUsers, IconGitFork, IconHelp } from '@tabler/icons';

// constant
const icons = { IconUsers, IconGitFork, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const system = {
    id: 'system-management',
    type: 'group',
    title : 'System Management',
    children: [
        {
            id: 'user-page',
            title: 'User Management',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'role-page',
            title: 'Role Management',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconGitFork,
            breadcrumbs: false
        },
    ]
};

export default system;
