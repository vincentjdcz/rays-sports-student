import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
export function CourseCard() {
  return (
    <Card maxW="sm" boxShadow='xl'>
      <CardBody p={0}>
        <Image
          className="w-full"
          src="/src/assets/sports/sport1.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          m={0}
        />
        <Stack mt="6" spacing="3" align="start">
          <Heading size="md" className="ml-2">Fielding and Fitness</Heading>
          <div className="ml-2">
            Duration: <span className="font-bold">6 months</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;Batches:{" "}
            <span className="font-bold">10:00 AM-11:00 AM</span>
          </div>
        </Stack>
      </CardBody>

      <CardFooter p={0}>
        <div className="ml-2 mt-2">
          <a>
            <Text color="blue.400" _hover={{ color: "blue.200", cursor: "pointer" }}>View course details</Text>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
