
export function CoachStyles() {
    return (
        <div className=" flex mt-4 gap-12 md:gap-32 md:flex-nowrap flex-wrap w-[275px] md:w-auto">
            <div className="flex flex-col items-start">
                <span className="text-sm font-light">Batting style</span>
                <span className="text-base font-semibold">Right hand Bat</span>
            </div>

            <div className="flex flex-col items-start">
                <span className="text-sm font-light">Bowling style</span>
                <span className="text-base font-semibold">Bowling style</span>
            </div>
        </div>
    )
}

export default CoachStyles;