import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CardOfCourses from "../../components/Cards/CardOfCourses";
import Searchbar from "../../components/searchbar/Searchbar";
import Pagination from './../../admin/components/Pagination/pagination';

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [coursess, setCoursess] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation();
  const show = location.pathname === "/courses";

  const getAllCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/courses?_page=${currentPage}&_per_page=4`);
      setCoursess(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getAllCourses().then((data) => setCourses(data?.data));
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    const delayCourses = setTimeout(() => {
      const results = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(delayCourses);
  }, [searchQuery, courses]);

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center py-10">
        {show && <div className="mb-6 w-full max-w-md">

          <Searchbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>}
        <div className="md:px-4 w-full max-w-6xl">
          {isLoading ? (
            // ----Loading spinner----
            <div className="flex items-center justify-center w-full h-48">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 ${filteredCourses.length > 0
                ? "opacity-100 transition-opacity duration-500 ease-in"
                : "opacity-0"
                }`}
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                  <CardOfCourses
                    course={course}
                    title={course.title}
                    price={course.price}
                    image={course.image}
                    level={course.level}
                    rating={course.rating}
                    instructor={course.instructor}
                    isInCart={false}
                    discount={course.discount}
                    id={course.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {show && <>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} courses={coursess} />
          <div className="mt-8">
            <button className="btn btn-primary mx-2">
              <Link to="../cart">Go to Cart</Link>
            </button>
            <button className="btn btn-primary mx-2">
              <Link to="../wishlist">Go to Wishlist</Link>
            </button>
          </div>
        </>
        }


      </div>
    </>
  );
}

export default CoursesList;

// ------------Without delay in search results-------

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import CardOfCourses from "../../components/Cards/CardOfCourses";
// import Searchbar from "../../components/searchbar/Searchbar";

// function CoursesList() {
//   const [courses, setCourses] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const getAllCourses = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/courses`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   useEffect(() => {
//     getAllCourses().then((data) => setCourses(data));
//   }, []);

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <div className="min-h-screen w-screen flex flex-col items-center py-10">
//         <div className="mb-6 w-full max-w-md">
//           <Searchbar
//             searchQuery={searchQuery}
//             onSearchChange={setSearchQuery}
//           />
//         </div>
//         <div className="md:px-4 w-full max-w-6xl">
//           <div
//             className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 ${
//               filteredCourses.length > 0
//                 ? "opacity-100 transition-opacity duration-500 ease-in"
//                 : "opacity-50"
//             }`}
//           >
//             {filteredCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
//               >
//                 <CardOfCourses
//                   course={course}
//                   title={course.title}
//                   price={course.price}
//                   image={course.image}
//                   level={course.level}
//                   rating={course.rating}
//                   instructor={course.instructor}
//                   isInCart={false}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-8">
//           <button className="btn btn-primary mx-2">
//             <Link to="../cart">Go to Cart</Link>
//           </button>
//           <button className="btn btn-primary mx-2">
//             <Link to="../wishlist">Go to Wishlist</Link>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CoursesList;
