/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import SelectGroupOne from './../../components/Forms/SelectGroup/SelectGroupOne';
import CoursesCards from "./components/CoursesCards";
import CoursesTable from "./components/CoursesTable";
import CourseCreateModel from './components/CourseCreateModel';
import Pagination from "../../components/Pagination/pagination";
import SortbyCategories from "../../components/Forms/SelectGroup/SortbyCategories";
import SortByType from "../../components/Forms/SelectGroup/SortByType";
import Sortby from "../../components/Forms/SelectGroup/Sortby";
const CoursesList = () => {
    const [display, setDisplay] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const handleDisplay = () => {
        setDisplay(!display)
    }
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <>
            <Breadcrumb pageName="courses" />
            <div className="flex align-middle justify-center gap-10 my-5">
                {/* <SortByType />
                <Sortby />
                <SortbyCategories />
                <button className="btn mt-8 px-5 dark:bg-boxdark dark:text-white text-white bg-boxdark-2 ">Reset</button> */}
                {/* <CourseCreateModel style={" text-xl  text-white bg-indigo-900 py-2 px-4 rounded-xl shadow-lg"} /> */}
            </div>
            <div className=" flex justify-between align-middle">
                <div className="relative w-full max-w-xl mx-auto bg-white dark:border-strokedark dark:bg-boxdark rounded-full z-40 ">
                    <input onChange={handleSearch} value={searchValue} placeholder="Search ..." className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" name="query" id="query" />
                    <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 dark:bg-white bg-boxdark sm:px-6 sm:text-base sm:font-medium hover:bg-boxdark-2 dark:border-strokedark dark:text-boxdark  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search
                    </button>
                </div>
                <div className={`text-3xl cursor-pointer mt-3 mr-10 ${!display && 'rotate-90'} `} onClick={handleDisplay}>
                    <i className="fa-solid fa-list-ul"></i>
                </div>
            </div>
            {!display
                ? <CoursesCards searchValue={searchValue} display={display} />
                : <CoursesTable searchValue={searchValue} display={display} />
            }

        </>
    )
}

export default CoursesList