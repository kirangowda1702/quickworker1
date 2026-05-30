const services = [
  {
    title: "Electrician",
    icon: "⚡",
    bookings: "31K bookings",
    price: "from ₹149"
  },

  {
    title: "Plumber",
    icon: "🔧",
    bookings: "28K bookings",
    price: "from ₹199"
  },

  {
    title: "Painter",
    icon: "🎨",
    bookings: "12K bookings",
    price: "from ₹399"
  },

  {
    title: "Carpenter",
    icon: "🪚",
    bookings: "7K bookings",
    price: "from ₹249"
  },

  {
    title: "AC Repair",
    icon: "❄️",
    bookings: "15K bookings",
    price: "from ₹499"
  },

  {
    title: "Cleaning",
    icon: "🧹",
    bookings: "9K bookings",
    price: "from ₹699"
  },

  {
    title: "Salon at Home",
    icon: "💇",
    bookings: "22K bookings",
    price: "from ₹599"
  },

  {
    title: "CCTV Install",
    icon: "📹",
    bookings: "4K bookings",
    price: "from ₹899"
  }
];

export default function AllServices() {

  return (

    <div className="min-h-screen bg-[#f7f4ef] px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-6xl font-bold">
              Popular services
            </h1>

            <p className="text-3xl text-gray-500 mt-3">
              What people are booking near you
            </p>

          </div>

          <a href="/">

            <button className="text-orange-500 text-2xl font-bold">
              Back Home →
            </button>

          </a>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {services.map((service, index) => (

            <a
              key={index}
              href={`/workers?service=${service.title}`}
            >

              <div className="bg-white rounded-[40px] p-10 border hover:shadow-2xl transition duration-300 cursor-pointer h-full">

                <div className="w-28 h-28 rounded-3xl bg-orange-50 flex items-center justify-center text-6xl">

                  {service.icon}

                </div>

                <h2 className="text-5xl font-bold mt-8 leading-tight">

                  {service.title}

                </h2>

                <p className="text-3xl text-gray-500 mt-5">

                  {service.bookings}

                </p>

                <p className="text-4xl font-bold text-orange-500 mt-4">

                  {service.price}

                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold mt-8 transition">

                  View Workers

                </button>

              </div>

            </a>

          ))}

        </div>

      </div>

    </div>
  );
}