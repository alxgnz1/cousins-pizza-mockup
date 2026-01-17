import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-serif">
            Welcome to Cousins
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;


