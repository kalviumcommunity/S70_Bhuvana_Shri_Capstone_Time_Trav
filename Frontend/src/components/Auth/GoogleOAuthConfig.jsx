import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleOAuthConfig = ({ children }) => {
  const clientId = "540240448132-rllkb8s6k78nh3ubqhq1hblrks1jtoka.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuthConfig; 