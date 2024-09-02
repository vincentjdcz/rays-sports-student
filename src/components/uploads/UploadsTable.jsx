import { Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'
import UploadsTableRow from "./UploadsTableRow";
import { FiUpload } from "react-icons/fi";
export function UploadsTable() {
  const files = [
    {
      receiver: "Michael Jessica",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "14 Jan 2024",
      readDate: "20 Jan 2024",
      status: "Read",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
    },
    {
        receiver: "Fundamentals of Cricket",
        receiverRole: "Student",
        title: "Video Title",
        sentDate: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Emily Smith",
        receiverRole: "Coach",
        title: "Video Title",
        sentDate: "20 Nov 2024",
        readDate: "-",
        status: "Pending",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Fundamentals of Cricket",
        receiverRole: "Coach",
        title: "Video Title",
        sentDate: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Ava Williams",
        receiverRole: "Admin",
        title: "Video Title",
        sentDate: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Ethan Anderson",
        receiverRole: "Coach",
        title: "Video Title",
        sentDate: "20 Nov 2023",
        readDate: "-",
        status: "Pending",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Wilson",
        receiverRole: "Admin",
        title: "Video Title",
        sentDate: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Fundamentals of Cricket",
        receiverRole: "Coach",
        title: "Video Title",
        sentDate: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },
      {
        receiver: "Ava Williams",
        receiverRole: "Admin",
        title: "Video Title",
        sentDate: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
        thumbnail: "/src/assets/ray-sports-thumbnail.jpg"
      },

  ];
  return (
    <div className="bg-white w-full h-full">
      <div className="w-full flex pr-4 items-center justify-between">
        <div className="w-[60%] flex justify-start items-center gap-4">
        <Select
          icon={<MdArrowDropDown />}
          placeholder="All Coach"
          className="mx-5"
        >
          <option value="coach1">Coach Name 1</option>
          <option value="coach2">Coach Name 2</option>
          <option value="coach2">Coach Name 3</option>
        </Select>

        <Select
          icon={<MdArrowDropDown />}
          placeholder="All Year"
          className="mx-5"
        >
          <option value="coach1">Monthly</option>
          <option value="coach2">Quarterly</option>
          <option value="coach2">Yearly</option>
        </Select>

        <Select
          icon={<MdArrowDropDown />}
          placeholder="2024"
          className="mx-5"
        />
        <span className="whitespace-nowrap ml-4">
          Total&nbsp;uploads&nbsp;-&nbsp;35
        </span>
        </div>
        <Button leftIcon={<FiUpload />} colorScheme='blue' variant='solid' size="large" p={2}>
            Upload file
        </Button>
      </div>
      <div className="mt-4 ml-5">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>File</Th>
                <Th>Receiver</Th>
                <Th>Sent date</Th>
                <Th>Read date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              
              {files.map((file, index) => (
                <UploadsTableRow key={index} receiver={file.receiver} receiverRole={file.receiverRole} title={file.title} sentDate={file.sentDate} readDate={file.readDate} status={file.status} thumbnail={file.thumbnail}/>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default UploadsTable;
