import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ShortsIcon } from "../../assets/icons/shorts.svg";
import { ReactComponent as SubIcon } from "../../assets/icons/subscriptions.svg";

import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as HistoryIcon } from "../../assets/icons/history.svg";
import { ReactComponent as PlaylistIcon } from "../../assets/icons/playlist.svg";
import { ReactComponent as WatchLaterIcon } from "../../assets/icons/watchlater.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";

function Sidebar() {
  return (
    <aside className="w-56 h-screen border-r px-2 py-3 text-sm">
      {/* Top section */}
      <SidebarItem
        icon={<HomeIcon className="w-5 h-5 text-gray-700" />}
        text="Home"
      />
      <SidebarItem
        icon={<ShortsIcon className="w-5 h-5 text-gray-700" />}
        text="Shorts"
      />
      <SidebarItem
        icon={<SubIcon className="w-5 h-5 text-gray-700" />}
        text="Subscriptions"
      />

      <hr className="my-3 border-gray-200" />

      {/* "You" section header */}
      <YouHeader />

      {/* Library items */}
      <SidebarItem
        icon={<HistoryIcon className="w-5 h-5 text-gray-700" />}
        text="History"
      />
      <SidebarItem
        icon={<PlaylistIcon className="w-5 h-5 text-gray-700" />}
        text="Playlists"
      />
      <SidebarItem
        icon={<WatchLaterIcon className="w-5 h-5 text-gray-700" />}
        text="Watch later"
      />
      <SidebarItem
        icon={<LikeIcon className="w-5 h-5 text-gray-700" />}
        text="Liked videos"
      />
      <SidebarItem
        icon={<DownloadIcon className="w-5 h-5 text-gray-700" />}
        text="Downloads"
      />
    </aside>
  );
}

/* Sidebar item component */
function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
      {icon}
      <span className="font-medium text-gray-800">{text}</span>
    </div>
  );
}

/* "You" section header with right arrow */
function YouHeader() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 font-medium cursor-pointer hover:bg-gray-100 rounded-lg">
      <span className="text-gray-800 leading-none">You</span>
      <RightArrowIcon className="w-5 h-5 text-gray-500 align-middle" />
    </div>
  );
}

export default Sidebar;
