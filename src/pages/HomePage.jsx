import { Sidebar } from "../components/Sidebar";
import { Link } from "react-router-dom";
import { RiLayoutGridFill, RiNotification3Line } from "react-icons/ri";
import { FaImdb } from "react-icons/fa";

function HomePage() {
  return (
    <main className="flex justify-between text-theme-gray">
      <Sidebar />
      <section className="flex flex-col w-full px-8">
        <nav className="flex justify-between w-full h-max py-4 border-b border-theme-gray border-opacity-40">
          <div className="flex gap-14 text-lg">
            <Link to="/" className="text-white hover:text-white">
              Movies
            </Link>
            <Link to="/" className="hover:text-white">
              Series
            </Link>
            <Link to="/" className="hover:text-white">
              TV Shows
            </Link>
          </div>

          <div className="flex gap-8 text-2xl">
            <button className="hover:text-white">
              <RiNotification3Line />
            </button>
            <button className="hover:text-white">
              <RiLayoutGridFill />
            </button>
          </div>
        </nav>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl text-white font-semibold py-6">
              Trending movies
            </h3>

            <Link to="/" className="text-lg">
              See all >
            </Link>
          </div>

          <div>
            <div className="flex flex-col justify-end gap-2 relative w-[600px] h-[350px] text-white rounded-3xl overflow-hidden bg-no-repeat bg-[url('https://www.retrozap.com/wp-content/uploads/2021/06/Army-of-the-Dead.jpeg')]">
              <div className="absolute w-full h-2/4 blur-sm opacity-60 bg-gradient-to-b from-gray-700 to-black" />
              <div className="p-8 z-10">
                <h3 className="text-3xl font-bold">Army of the dead</h3>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3">
                    <span className="text-xl">2021</span>
                    <div className="flex items-center gap-1">
                      <FaImdb className="text-3xl text-yellow-400" />
                      <span className="text-md font-semibold">7.9 raiting</span>
                    </div>
                  </div>

                  <Link
                    to="/"
                    className="py-3 px-6 rounded-full bg-red-700 opacity-90"
                  >
                    Watch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-items-start gap-5 w-80 h-screen pt-14 pl-6 bg-theme-black text-theme-gray">
        <div>username</div>
        <div>search</div>
        <div>genres list</div>
      </section>
    </main>
  );
}

export default HomePage;
