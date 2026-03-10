import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Location from "./components/Location";
import EventCard from "./components/EventCard";

import backgroundImg from "./assets/images/hero/background3.jpg";

function App() {
  return (
    <>
      {/* <div className="fixed top-0 left-1/2 w-[1px] h-screen bg-blue-500 z-50"></div> */}

      {/* Wood background */}
      <div
        className="fixed inset-0 -z-10 opacity-100 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      <Header />
      <Hero />

      <main className="max-w-6xl mx-auto px-6">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-16">
              Weekly Events & Specials
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              <EventCard
                image="/images/event1.jpg"
                title="Wednesday Night Blind Draw"
                description="Do you have what it takes to go against the local legends?"
                button="View Details"
              />

              <EventCard
                image="/images/event2.jpg"
                title="Cousins Leagues"
                description="Interested in joining our weekly darts or golf league? Sign up today!"
                button="Learn More"
              />

              <EventCard
                image="/images/event3.jpg"
                title="Half Price Pizza"
                description="Enjoy half price pizza every Wednesday."
                button="View Menu"
              />
            </div>
          </div>
        </section>
        <Location />
      </main>

      <Footer />
    </>
  );
}

export default App;
