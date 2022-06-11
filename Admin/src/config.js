const DEV_MODE = false;
const SERVER_URL = DEV_MODE
  ? "http://localhost:5000/admin"
  : "http://206.189.147.229:5000/admin";

const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: "/",
  defaultPath: "/dashboard/default",
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  DEV_MODE: DEV_MODE,
  SERVER_URL: SERVER_URL,
};

export default config;
