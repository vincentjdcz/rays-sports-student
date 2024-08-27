import { Button } from "@chakra-ui/react";
import GoalsContainer from "../../components/setUpGoals/GoalsContainer";
import GoalDetailsContainer from "../../components/setUpGoals/GoalDetailsContainer";

export function SetUpGoal() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center p-4">
        <span className="font-bold text-2xl flex flex-start m-5">
          Set up Goal
        </span>
        <Button colorScheme="blue" className="w-[15%] mt-4">
          Set up New Goal
        </Button>
      </div>

      <div className="flex h-full">
        <GoalsContainer />
        <GoalDetailsContainer />
      </div>
    </div>
  );
}

export default SetUpGoal;
