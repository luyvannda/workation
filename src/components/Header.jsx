export default function Header() {
  return (
    <div className="flex bg-gray-100">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img className="h-10" src="logo.svg" alt="workcation" />
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="beach-work.jpg"
            alt="woman workcationing on the beach"
          />

          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere. <br className="hidden lg:inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>

          <p className="mt-2 text-gray-500 text-justify sm:mt-4 sm:text-xl">
            Workation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you&apos;re
            not on vacation.
          </p>

          <div className="mt-4 sm:mt-6">
            <a href="#" className="btn btn-indigo shadow-lg sm:text-base">
              Book your escape
            </a>

            <a href="#" className="ml-2 btn-gray btn shadow-lg sm:text-base">
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="beach-work.jpg"
          alt="woman workcationing on the beach"
        />
      </div>
    </div>
  );
}
