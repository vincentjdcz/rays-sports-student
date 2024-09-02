import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ReportAttendanceTab from "../../components/report/ReportAttendanceTab";
import TaskTotalAssignmentTab from "../../components/task/TaskTotalAssignmentTab";
export function Task() {
  return (
    <div className="p-5">
      <div className="text-left pl-4">
        <span className="text-2xl font-bold">Reports</span>
      </div>

      <div className="mt-4">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span>Total assignment</span>
                <span className="text-3xl font-semibold text-blue-500">35</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span>Pending</span>
                <span className="text-3xl font-semibold text-blue-500">15</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span>Completed</span>
                <span className="text-3xl font-semibold text-blue-500">7</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span>Shared</span>
                <span className="text-3xl font-semibold text-blue-500">
                  13
                </span>
              </div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TaskTotalAssignmentTab />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Task;
