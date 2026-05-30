export default function BookingSuccess() {

  return (

    <div className="min-h-screen bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center px-6">

      <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-2xl w-full text-center">

        <div className="text-8xl animate-bounce">
          ✅
        </div>

        <h1 className="text-6xl font-extrabold mt-8 text-green-600">
          Booking Confirmed
        </h1>

        <p className="text-2xl text-gray-500 mt-6 leading-relaxed">
          Your worker has been assigned successfully.
        </p>

        <div className="bg-green-50 rounded-3xl p-8 mt-10 text-left space-y-5">

          <div className="flex justify-between">

            <p className="text-gray-500 text-xl">
              Booking ID
            </p>

            <h2 className="font-bold text-2xl">
              QW10245
            </h2>

          </div>

          <div className="flex justify-between">

            <p className="text-gray-500 text-xl">
              Worker
            </p>

            <h2 className="font-bold text-2xl">
              Hemanth
            </h2>

          </div>

          <div className="flex justify-between">

            <p className="text-gray-500 text-xl">
              Service
            </p>

            <h2 className="font-bold text-2xl">
              Electrician
            </h2>

          </div>

          <div className="flex justify-between">

            <p className="text-gray-500 text-xl">
              Visit Time
            </p>

            <h2 className="font-bold text-2xl">
              Tomorrow • 10 AM
            </h2>

          </div>

        </div>

        <div className="flex gap-5 mt-10">

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="w-full"
          >

            <button className="bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-2xl font-bold w-full transition">
              WhatsApp
            </button>

          </a>

          <a
            href="/"
            className="w-full"
          >

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-2xl font-bold w-full transition">
              Back Home
            </button>

          </a>

        </div>

      </div>

    </div>
  );
}