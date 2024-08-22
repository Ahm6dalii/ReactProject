
import CourseForm from './CourseForm'
// eslint-disable-next-line react/prop-types
const CourseCreateModel = ({ courseId, course, display }) => {
    return (

        <>
            {
                display ? <button className="hover:text-primary" onClick={() => document.getElementById(`${courseId}`).showModal()}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                    : <button className=" text-xl  text-white bg-indigo-900 py-2 px-4 rounded-xl shadow-lg" onClick={() => document.getElementById(`${courseId}`).showModal()}>{courseId ? 'Edit' : 'Create'}</button>
            }
            <dialog id={`${courseId}`} className="modal">
                <div className="modal-box w-8/12 max-w-5xl dark:bg-black">
                    <div className=''>
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    {
                                        courseId ? <h1 >Updating Course : {course?.title}</h1> : "creating Course"
                                    }
                                </h3>
                            </div>
                            <CourseForm course={course} courseId={courseId} />
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default CourseCreateModel