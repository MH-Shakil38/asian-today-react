import React, { useEffect, useState } from 'react'
import axiosClient from '../api/axiox';
import Spinner from '../Component/loader';

export default function About() {
    
    const [loader, setLoader] = useState(false);
    const getJobList = async () => {
        setLoader(true);
        const { data } = await axiosClient.get("asian/slider-posts");
        setLoader(false);
        console.log(data);
      };
    
      useEffect(() => {
        getJobList();
      }, []);
  return (
    <div>
        {loader && <Spinner />}
      About Page
    </div>
  )
}
