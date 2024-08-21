import axios from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

export default function (refetchTrigger) {
   const link= useSelector(state=>state.apiLink.link)

    function getUser(){
        return axios.get(`${link}/users`);
    }
    
    const { data, error, isLoading, refetch }=useQuery({
        queryKey: ['usersData'],
        queryFn:getUser,
        enabled:!!link,
        refetchOnWindowFocus: false, 
        refetchInterval: 60000, 
        onSuccess: () => {
         toast.success("from hoook")
        },
      })

      useEffect(()=>{
        if (refetchTrigger) {
          refetch();
        }
      },[refetchTrigger, refetch])
   

  return   { data, error, isLoading, refetch }
}
