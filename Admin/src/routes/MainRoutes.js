import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AdminPage = Loadable(lazy(() => import('views/pages/admin-management')));
const UserPage = Loadable(lazy(() => import('views/pages/user-management')));
const TradingStatisticPage = Loadable(lazy(() => import('views/pages/trading-statistic-management')));
const TradingSettingPage = Loadable(lazy(() => import('views/pages/trading-setting-management')));
const ReferralStatisticPage = Loadable(lazy(() => import('views/pages/referral-statistic-management')));
const BillingStatisticPage = Loadable(lazy(() => import('views/pages/billing-statistic-management')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/admin-page',
            element: <AdminPage />
        },
        {
            path: '/user-page',
            element: <UserPage />
        },
        {
            path: '/trading-statistic',
            element: <TradingStatisticPage />
        },
        {
            path: '/trading-setting',
            element: <TradingSettingPage />
        },
        {
            path: '/referral-statistic',
            element: <ReferralStatisticPage />
        },
        {
            path: '/billing-statistic',
            element: <BillingStatisticPage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
