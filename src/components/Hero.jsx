export default function Hero() {
  return (
    <div>
      <div className="px-8 py-12">
        <img className="h-10" src="/logo.svg" alt="Workation" />
        <img
          className="mt-6 rounded-lg shadow-lg"
          src="/beach-work.jpg"
          alt="Woman workationing on a beach"
        />

        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere.{" "}
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>

        <p className="mt-2 text-gray-600">
          Workation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you&apos;re not on
          vacation
        </p>

        <div className="mt-4">
          <a
            className="inline-block px-4 py-2 rounded-lg shadow-lg uppercase tracking-wider font-semibold bg-blue-500 text-white text-sm"
            href="#"
          >
            book you escape
          </a>
        </div>
      </div>
    </div>
  );
}
