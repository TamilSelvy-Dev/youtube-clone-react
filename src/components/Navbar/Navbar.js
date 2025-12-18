import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/microphone.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <MenuIcon className="w-6 h-6 cursor-pointer" />

        {/* Logo + Text */}
        <div className="flex items-center cursor-pointer">
          <YoutubeIcon className="w-8 h-8" />
          <span className="ml-1 text-xl font-semibold tracking-tight">
            YouTube
          </span>
          <span className="ml-1 text-xs text-gray-500 font-medium relative -top-2">
            IN
          </span>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center w-1/2 gap-4">
        {/* Search box */}
        <div className="flex items-center flex-1 h-10">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full px-4 border border-gray-300 rounded-l-full focus:outline-none"
          />

          <button className="h-full px-5 border border-gray-300 bg-gray-100 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
            <SearchIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mic icon */}
        <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <MicIcon className="w-5 h-5" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
      
        {/* Create */}
        <div className="flex items-center h-9 px-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
          <PlusIcon className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium leading-none">Create</span>
        </div>

        {/* Notifications */}
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <NotificationIcon className="w-5 h-5" />
        </div>

        {/* User avatar */}
        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium cursor-pointer">
          T
        </div>
      </div>
    </div>
  );
}

export default Navbar;
