import { Tr, Td } from "@chakra-ui/react";
import { Avatar, Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function TaskTotalAssignmentTabTableRow({coach, title, assignedOn, readDate, status, index,}) {
  console.log;
  return (
    <Tr key={index}>
      <Td>
        <Card
          p={0} // Padding
          maxW="fit-content" // Fit width to content
          maxH="fit-content" // Fit height to content
          variant="unstyled"
        >
          <CardHeader m={0}>
            <Flex spacing="0">
              <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="xs" m={0}>
                    {coach}
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
      </Td>
      <Td>{title}</Td>
      <Td>{assignedOn}</Td>
      <Td>{readDate}</Td>
      <Td><div className={`rounded-full flex justify-center items-center p-2 ${
      status === "Read"
        ? "border-2 border-green-500 p-2"
        : "border-2 border-yellow-500 p-2"
    }`}><span className={`${
        status === "Read"
          ? "text-green-500"
          : "text-yellow-500"
      }`}>{status}</span></div></Td>
    </Tr>
  );
}

export default TaskTotalAssignmentTabTableRow;
