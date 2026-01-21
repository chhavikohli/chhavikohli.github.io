import { HashRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AppRouter from "./router";

export default function App() {
  return (
    <HashRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </HashRouter>
  );
}
