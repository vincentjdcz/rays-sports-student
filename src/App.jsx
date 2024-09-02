import Topnav from "./components/topnav/Topnav";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MySchedule from "./pages/mySchedule/MySchedule";
import Courses from "./pages/courses/Courses";
import Coaches from "./pages/coaches/Coaches";
import SetUpGoal from "./pages/setUpGoal/SetUpGoal";
import Reports from "./pages/reports/Reports";
import AnnotatedVideos from "./pages/annotatedVideos/AnnotatedVideos";
import Task from "./pages/task/Task";
import Uploads from "./pages/uploads/Uploads";

function App() {
  return (
    <>
      <ChakraProvider>
        <Topnav />
        <Sidebar />
        <div className="flex ml-60">
        
          <Routes>
            <Route path="/" element={<MySchedule />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/task" element={<Task />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/setupgoal" element={<SetUpGoal />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/annotatedvideos" element={<AnnotatedVideos />} />
          </Routes>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
