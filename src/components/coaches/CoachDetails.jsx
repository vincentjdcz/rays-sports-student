import CoachAbout from "./CoachAbout";
import CoachLanguages from "./CoachLanguages";
import CoachLinks from "./CoachLinks";
import CoachProfileCard from "./CoachProfileCard";
import CoachSocials from "./CoachSocials";
import CoachSpecializations from "./CoachSpecializations";
import CoachStyles from "./CoachStyles";

export function CoachDetails() {
  return (
    <div className="bg-white p-4">
      <div className="flex md:flex-nowrap flex-wrap w-[275px] md:w-auto">
        <CoachProfileCard />
        <div className="flex flex-col flex-1 md:flex-nowrap flex-wrap md:ml-7">
          <CoachAbout />
          <CoachStyles />

          <div className=" flex  mt-4 gap-8 md:gap-28 flex-wrap"> {/*for demo purposes, gap-28 to make it align. afterward, figure out what's actually going to be on this page and how we want to lay it out */}
            <CoachLanguages />
            <CoachSpecializations />
          </div>

          <div className=" flex  mt-4 gap-[3.5rem] md:gap-[8.5rem]"> {/*for demo purposes, gap-28 to make it align. afterward, figure out what's actually going to be on this page and how we want to lay it out */}
          <CoachSocials/>
          <CoachLinks/>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

BEFORE
                    
            
                    
*/
export default CoachDetails;
