import axios from "axios"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"

const useCourses = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    console.log("currentPage", currentPage);


    const api = useSelector(state => state.apiLink.link)
    const { data, error, isLoading } = useQuery(['data', currentPage, perPage], () => axios(`${api}/courses?_page=${currentPage}&_per_page=${perPage}`),
        {
            keepPreviousData: true,
        })
    const courses = data?.data
    console.log(courses);

    const queryClient = useQueryClient()


    const { mutate } = useMutation(async (id) => {
        await axios.delete(`${api}/courses/${id}`)
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('data')
            }
        }
    )
    const handleDelete = (id) => {
        mutate(id)
    }
    return { error, isLoading, currentPage, setCurrentPage, courses, handleDelete, setPerPage }
}

export default useCourses