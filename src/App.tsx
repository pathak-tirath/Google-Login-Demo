import { GoogleOAuthProvider } from "@react-oauth/google";
import SignIn from "./components/SignIn";
const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <SignIn />
    </GoogleOAuthProvider>
  );
};

export default App;
