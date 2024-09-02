import { Tr, Td } from "@chakra-ui/react";
import { Avatar, Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function UploadsTableRow({title, receiver, receiverRole, sentDate, readDate, status, index, thumbnail}) {
  console.log;
  return (
    <Tr key={index}>
    <Td><div className="flex justify-start items-center gap-2">
        <img src={thumbnail} />
        <span>{title}</span>
        </div></Td>
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
                  <div className="flex flex-col justify-start items-start">
                  <span className="text-sm">{receiver}</span>
                  <span className="text-xs text-gray-500">{receiverRole}</span>
                  </div>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
      </Td>
      
      <Td>{sentDate}</Td>
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

export default UploadsTableRow;
