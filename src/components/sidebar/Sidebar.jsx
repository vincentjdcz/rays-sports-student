import {
  Card,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import {
  CalendarIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClipboardIcon,
  FlagIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
  VideoCameraIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

import { ProfileCard } from "./ProfileCard";
import { useNavigate } from "react-router-dom";
//const sidebarOptions = ['My Schedules', 'Course', 'Coaches', 'Report', 'Set up Goal', 'Chat', 'Payments', 'Annotated Videos', 'Notifications'];
//const sidebarOptionIcons = []

export function Sidebar() {
  const navigate = useNavigate();
  const handleNavigate = (route) => { 
    return () => {
    navigate(route);
  }
    
  }
  return (
    <Card className="h-screen w-fit max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col items-center fixed top-10 left-0 z-40 overflow-y-auto"

    height="100vh"
    width="20rem" 
    >
      <ProfileCard className="w-full" />
      <List className="flex flex-col w-full">
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/")}>
            <ListItemPrefix>
              <CalendarIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">My Schedules</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/courses")}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Course</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/task")}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Task</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/uploads")}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Uploads</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/coaches")}>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Coaches</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/reports")}>
            <ListItemPrefix>
              <ClipboardIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Report</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/setupgoal")}>
            <ListItemPrefix>
              <FlagIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Set up Goal</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0">
            <ListItemPrefix>
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Chat</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0">
            <ListItemPrefix>
              <CreditCardIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Payments</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0" onClick={handleNavigate("/annotatedvideos")}>
            <ListItemPrefix>
              <VideoCameraIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Annotated&nbsp;Videos</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-0">
            <ListItemPrefix>
              <BellAlertIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-base sm:text-xl">Notifications</span>
          </div>
        </ListItem>
        <ListItem>
          {/* This ListItem is just to make sure entire navbar is viewable on smaller screens when needing to scroll */}
          <div className=" flex items-center justify-between m-6">
          </div>
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
