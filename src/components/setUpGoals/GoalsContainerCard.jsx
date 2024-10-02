// eslint-disable-next-line react/prop-types
export function GoalsContainerCard({handleGoalClick}) {
  return (
    <div onClick={handleGoalClick} className="w-[90%] flex flex-col rounded-md border-b-2 border-gray-200 p-2 hover:bg-blue-100 cursor-pointer">
      <div className="flex justify-start">
        <span className="font-semibold">Goal No 2</span>
      </div>
      <div className="flex justify-between">
        <span className="text-xs">10&nbsp;Jan</span>
        <span className="text-xs text-green-500">Completed</span>
      </div>
    </div>
  );
}

export default GoalsContainerCard;
