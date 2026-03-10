export default function Location() {
  return (
    <section className="rounded-lg bg-[#5A1E1E]/90 py-20">

      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8DFC8]">
            Find Us
          </h2>
          <p className="text-[#E8DFC8]/70 mt-3">
            Stop in for pizza, drinks, and good company.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10">
        <a 
            href="https://maps.google.com/?q=Cousins Pizza Pub"
            target="_blank"
            rel="noopener noreferrer"
            >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5543263765544!2d-88.10774852333009!3d41.96690687123221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fabd2f41e680b%3A0xc6473ae6919bb966!2sCousins%20Pizza%20Pub!5e0!3m2!1sen!2sus!4v1773005713705!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
          </a>
        </div>

      </div>

    </section>
  );
}