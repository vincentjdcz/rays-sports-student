import { Tr, Td } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types

function getProgressBarColor(remaining) {
  switch (remaining) {
    case 90:
      return "red";
    case 70:
      return "orange";
    case 50:
      return "yellow";
    default:
      return "green";
  }
}

export function ReportPaymentsTabTableRow({
  courseName,
  courseFee,
  batch,
  paymentType,
  paymentDueDate,
  remaining,
}) {
  //const navigate = useNavigate();
  console.log("tablerow courseName: ", courseName);
  /*const handleClick = () => {
        navigate("/reports/reportsAttendanceDetails", {state: {
            courseName: courseName,
            completedSessions: completedSessions,
            present: present,
            absent: absent
        }});
    }
  */
  const progressBarColor = getProgressBarColor(remaining);

  return (
    <Tr
      //onClick={handleClick}
      className="cursor-pointer"
      sx={{
        _hover: {
          bg: "gray.100", // Adjust color as needed
        },
      }}
    >
      <Td className="text-left">{courseName}</Td>
      <Td className="text-left">{courseFee}</Td>
      <Td className="text-left">{batch}</Td>
      <Td className="text-left">{paymentType}</Td>
      <Td className="text-left">{paymentDueDate}</Td>
      <Td className="text-left p-0">
        {remaining === 0 ? (
          <div className="flex items-center justify-center rounded-full border-gray-200 border-2 p-2 bg-gray-100">
            <span className="text-center">Fully Paid</span>
          </div>
        ) : (
          <Progress
            value={remaining} // Sets the progress to 90%
            size="sm" // Optional: Adjusts the size of the progress bar
            colorScheme={progressBarColor} // Sets the color to red
            borderRadius="md" // Optional: Adds rounded corners
            className="w-full"
          />
        )}
      </Td>
    </Tr>
  );
}

export default ReportPaymentsTabTableRow;
