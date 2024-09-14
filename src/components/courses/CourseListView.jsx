import CourseCard from "./CourseCard";
import NewCourseCard from "./NewCourseCard";
import NewPackageCard from "./newPackageCard";
 // eslint-disable-next-line react/prop-types
export function CourseListView({courses, newCourses, newPackages}) {
   
    return (
        <div className="flex gap-4">
            {courses.map((course, index) => (
                <CourseCard key={index} courseName={course.courseName} duration={course.duration} batches={course.batches}/>
            ))}

            {newCourses.map((course, index) => (
                <NewCourseCard key={index} courseName={course.courseName} duration={course.duration} batches={course.batches} price={course.price}/>
            ))}
            
            {newPackages.map((p, index) => (
                <NewPackageCard key={index} packageName={p.packageName} numCourses={p.numCourses} price={p.price} originalPrice={p.originalPrice ? p.originalPrice : null}/>
            ))}
        </div>
    )
}

export default CourseListView;