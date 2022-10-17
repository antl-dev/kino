import {
  RiAlarmLine,
  RiBarChartBoxLine,
  RiCompass3Line,
  RiHome2Line,
  RiQuestionLine,
  RiSettings2Line,
  RiStarLine,
  RiTimeLine,
  RiUser3Line,
} from "react-icons/ri";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-5 w-60 h-screen pt-14 px-6 bg-theme-black text-theme-gray">
      <h3 className="uppercase">Menu</h3>

      <ul className="px-4 flex flex-col gap-4">
        <li>
          <a href="/" className="flex items-center gap-4 ">
            <RiHome2Line />
            Home
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiCompass3Line />
            Discovery
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiAlarmLine />
            Coming soon
          </a>
        </li>
      </ul>

      <hr className="opacity-70" />

      <h3 className="uppercase">Library</h3>
      <ul className="px-4 flex flex-col gap-4">
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiTimeLine />
            Recent
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiStarLine />
            Top rated
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiBarChartBoxLine />
            Trend
          </a>
        </li>
      </ul>

      <hr className="opacity-70" />
      <ul className="px-4 flex flex-col gap-4">
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiSettings2Line />
            Settings
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiQuestionLine />
            Help
          </a>
        </li>
      </ul>

      <ul className="px-4 flex flex-col gap-4">
        <li>
          <a href="/" className="flex items-center gap-4">
            <RiUser3Line />
            Sign in
          </a>
        </li>
      </ul>
    </aside>
  );
};
