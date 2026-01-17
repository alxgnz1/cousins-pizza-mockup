import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <>
      <Header />
      <Hero />

      <main className="max-w-6xl mx-auto px-6">
        <section className="h-screen flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
            Great Food.
            <br />
            Friendly Service.
            <br />
            Good Company.
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;



