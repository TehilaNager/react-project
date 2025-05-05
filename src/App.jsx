import NavBar from "./components/navBar";
import AppRoutes from "./routes/appRoutes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>
      <main className="flex-fill">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
