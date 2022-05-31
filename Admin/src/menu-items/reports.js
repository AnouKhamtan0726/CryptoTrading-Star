// assets
import { IconId, IconReceipt, IconHelp } from '@tabler/icons';

// constant
const icons = { IconId, IconReceipt, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const report = {
    id: 'report-management',
    type: 'group',
    title : 'Reports',
    children: [
        {
            id: 'member-account-page',
            title: 'Member account details',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconId,
            breadcrumbs: false
        },
        {
            id: 'agent-commission-page',
            title: 'Agent commission',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconReceipt,
            breadcrumbs: false
        },
    ]
};

export default report;
