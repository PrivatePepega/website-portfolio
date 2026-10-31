import App from "./components/App";
import { MyContextProvider } from "./MyContext";

export default function Home() {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
}
