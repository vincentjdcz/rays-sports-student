import { Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
export function ReportAttendanceTab() {
  return (
    <div className="bg-white w-full h-full">
      <div className="w-48">
        <Select
          icon={<MdArrowDropDown />}
          placeholder="2024"
          className="mx-5"
        />
      </div>
      <div className="mt-4 ml-5">
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Course name</Th>
                <Th isNumeric>Completed sessions</Th>
                <Th isNumeric>Present</Th>
                <Th isNumeric>Absent</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Course Name A</Td>
                <Td isNumeric>30</Td>
                <Td isNumeric>28</Td>
                <Td isNumeric>3</Td>
              </Tr>
              <Tr>
                <Td>Course Name B</Td>
                <Td isNumeric>20</Td>
                <Td isNumeric>17</Td>
                <Td isNumeric>3</Td>
              </Tr>
              <Tr>
                <Td>Course Name C</Td>
                <Td isNumeric>15</Td>
                <Td isNumeric>10</Td>
                <Td isNumeric>5</Td>
              </Tr>
              <Tr>
                <Td>Course Name D</Td>
                <Td isNumeric>10</Td>
                <Td isNumeric>10</Td>
                <Td isNumeric>0</Td>
              </Tr>
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportAttendanceTab;
