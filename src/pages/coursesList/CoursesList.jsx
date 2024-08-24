import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CardOfCourses from "../../components/Cards/CardOfCourses";
import Searchbar from "../../components/searchbar/Searchbar";
import SearchSidebar from "../../components/sidebar/SearchSidebar";
import Pagination from './../../admin/components/Pagination/pagination';

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [coursess, setCoursess] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedRating, setSelectedRating] = useState();
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPrice, setSelectedPrice] = useState({
    paid: false,
    free: false,
  });

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
      const results = courses
        // ----searchbar filter----
        .filter((course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        // -----Level Filter -----
        .filter((course) =>
          selectedLevel ? course.level === selectedLevel : true
        )
        // -----Rating Filter -----
        .filter((course) =>
          selectedRating ? Math.trunc(course.rating) === selectedRating : true
        )
        // -----Paid/Free Filter -----
        .filter((course) => {
          if (selectedPrice.paid && selectedPrice.free) {
            return true;
          }
          if (selectedPrice.paid) {
            return course.paid;
          }
          if (selectedPrice.free) {
            return course.free;
          }
          return true;
        })
        // -----Duration Filter -----
        .filter((course) => {
          const durationWeeks = parseInt(course.duration);
          if (selectedDuration === "short") {
            return durationWeeks >= 0 && durationWeeks <= 1;
          }
          if (selectedDuration === "medium") {
            return durationWeeks > 1 && durationWeeks <= 4;
          }
          if (selectedDuration === "long") {
            return durationWeeks > 4;
          }
          return true;
        });

      console.log(results);
      setFilteredCourses(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(delayCourses);
  }, [
    searchQuery,
    courses,
    selectedLevel,
    selectedRating,
    selectedPrice,
    selectedDuration,
  ]);

  // Handle sidebar auto-close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  ////////////////////////////////////////////////////////////////////////
  return (
    <>
      {/* Sidebar */}
      <SearchSidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
      />

      <div
        className={`min-h-screen w-screen flex flex-col items-center py-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "pl-80" : "pl-0"
        }`}
      >
        <div className="mb-6 w-full max-w-md">
      <div className="min-h-screen w-screen flex flex-col items-center py-10">
        {show && <div className="mb-6 w-full max-w-md">


          <Searchbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start w-full max-w-6xl">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={`fixed top-20 left-5 p-3 text-white bg-black rounded-lg z-50 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "invisible" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
        </div>}
        <div className="md:px-4 w-full max-w-6xl">
          {isLoading ? (
            // ----Loading spinner----
            <div className="flex items-center justify-center w-full h-48">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <div
              className={` grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 ${filteredCourses.length > 0
                ? "opacity-100 transition-opacity duration-500 ease-in"
                : "opacity-0"
                }`}
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Main Content */}
          <div className="flex-1 px-4 md:px-0 transition-transform duration-300 ease-in-out">
            {isLoading ? (
              <div className="flex items-center justify-center w-full h-48">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <div
                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 ${
                  filteredCourses.length > 0
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
        </div>


      </div>
      {show && <>
      <div className="py-8">

        <Pagination  currentPage={currentPage} setCurrentPage={setCurrentPage} courses={coursess} />    
      </div>
      </>
      }
    </>
  );
}

export default CoursesList;
