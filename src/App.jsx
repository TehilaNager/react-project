import NavBar from "./components/navBar";
import AppRoutes from "./routes/appRoutes";
import Footer from "./components/footer";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <header>
        <NavBar />
      </header>
      <main
        className="flex-fill pb-5"
        style={{
          backgroundColor: theme === "light" ? "rgb(237, 250, 253)" : undefined,
        }}
      >
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
