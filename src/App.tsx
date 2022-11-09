import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Content</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
