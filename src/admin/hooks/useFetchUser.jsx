import axios from "axios"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"

const useFetchUser = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(3)
    const api = useSelector((state) => state.apiLink.link)
    const { data, error, isLoading } = useQuery(['data', currentPage, perPage], () => axios(`${api}/users?_page=${currentPage}&_per_page=${perPage}`),
        {
            keepPreviousData: true,
        })
    const qureyClient = useQueryClient()
    const users = data?.data

    const { mutate } = useMutation(async (id) => {
        await axios.delete(`${api}/users/${id}`)
    },
        {
            onSuccess: () => {
                qureyClient.invalidateQueries()
            }
        }
    )
    const handleDelete = (id) => {
        mutate(id)
    }
    return [handleDelete, users, error, isLoading, currentPage, setCurrentPage, setPerPage]
}

export default useFetchUser