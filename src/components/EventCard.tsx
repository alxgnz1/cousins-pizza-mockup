type EventCardProps = {
    image: string;
    title: string;
    description: string;
    button: string;
}

export default function EventCard({
  image,
  title,
  description,
  button,
}: EventCardProps) {
    return (
        <div className="rounded-lg bg-[#5A1E1E] shadow-xl border-pubRed p-6 max-w-sm mx-auto">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover mb-8"
      />

      <div className="flex items-center gap-4 mb-3">


        <h3 className="text-xl font-semibold font-serif uppercase">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <button className="rounded-md bg-[#d2b48c] px-5 py-2 text-black hover:bg-[#c5a57d] transition">
        {button}
      </button>
    </div>
    );
}