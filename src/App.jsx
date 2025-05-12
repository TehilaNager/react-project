import NavBar from "./components/navBar";
import AppRoutes from "./routes/appRoutes";
import Footer from "./components/footer";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>
      <main
        className={[
          "flex-fill",
          theme === "dark" ? "bg-black" : "rgb(237, 250, 253)",
        ].join()}
      >
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
