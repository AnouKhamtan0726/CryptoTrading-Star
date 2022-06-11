// assets
import { IconId, IconReceipt, IconHelp } from "@tabler/icons";

// constant
const icons = { IconId, IconReceipt, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const user = {
  id: "user-management",
  type: "group",
  title: "User Management",
  children: [
    {
      id: "user-page",
      title: "Users",
      type: "item",
      url: "/user-page",
      icon: icons.IconId,
      breadcrumbs: false,
    },
  ],
};

export default user;
