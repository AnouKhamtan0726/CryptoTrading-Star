// assets
import { IconUsers, IconGitFork, IconHelp } from '@tabler/icons';

// constant
const icons = { IconUsers, IconGitFork, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admin = {
    id: 'admin-management',
    type: 'group',
    title: 'Admin Management',
    children: [
        {
            id: 'admin-page',
            title: 'Administrators',
            type: 'item',
            url: '/admin-page',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default admin;
