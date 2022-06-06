import dashboard from './dashboard';
import trading from './tradings';
import referral from './referrals';
import admin from './admins';
import users from './users';
import billing from './billings';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, admin, users, trading, referral, billing]
};

export default menuItems;
