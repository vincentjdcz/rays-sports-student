import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  CalendarIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
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
    <Card className="min-h-fit h-[100vh] w-fit max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col items-center fixed top-10 left-0"

    height="100vh"
    width="20rem" 
    overflowY="auto">
      <ProfileCard className="w-full" />
      <List className="flex flex-col w-full">
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/")}>
            <ListItemPrefix>
              <CalendarIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">My Schedules</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/courses")}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Course</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/coaches")}>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Coaches</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/reports")}>
            <ListItemPrefix>
              <ClipboardIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Report</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/setupgoal")}>
            <ListItemPrefix>
              <FlagIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Set up Goal</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2">
            <ListItemPrefix>
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Chat</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2">
            <ListItemPrefix>
              <CreditCardIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl  ">Payments</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2" onClick={handleNavigate("/annotatedvideos")}>
            <ListItemPrefix>
              <VideoCameraIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl ">Annotated&nbsp;Videos</span>
          </div>
        </ListItem>
        <hr />
        <ListItem className="hover:bg-slate-50">
          <div className=" flex items-center justify-between py-2">
            <ListItemPrefix>
              <BellAlertIcon className="h-5 w-5 mr-3" />
            </ListItemPrefix>
            <span className="text-xl ">Notifications</span>
          </div>
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
