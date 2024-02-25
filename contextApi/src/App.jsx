import "./App.css";
import UserContextProvider from "./UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
    <UserContextProvider>
      <h1>Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
