import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom'

function AllReports({ reportsData, setReportsData }) {

    // const [reportsData, setReportsData] = useState(null);

    useEffect(() => {

        localStorage.setItem("report", null)

        axios.get("https://citizenconnect-plhr.onrender.com/report/reported/timeline/")
            .then(res => {
                console.log(res.data);
                setReportsData(res.data);
            })

    }, [])


    return (
        <div
            style={{
                width: '400px'
            }}
            className='py-8 overflow-hidden flex-grow'
        >
            <h2 className='font-bold text-xl '>ALL Reports</h2>
            {
                reportsData ? <>
                    <p className='mt-2 text-gray-500'>
                        {reportsData.length} Results
                    </p>

                    <div className="gap-y-5 mt-5 flex flex-col">
                        {
                            reportsData.map(item => <div className="hover:bg-gray-200  flex gap-x-7 items-center ">
                                <img src={item.image} className='w-14 h-14 rounded-full object-cover' alt="" />
                                <div className="w-64">
                                    <h3 className='whitespace-nowrap text-ellipsis overflow-hidden'>{item.description}</h3>
                                    <h3 className='whitespace-nowrap text-ellipsis overflow-hidden'>{item.location}</h3>
                                    <Link
                                        onClick={() => {
                                            localStorage.setItem("report", JSON.stringify(item))
                                        }}

                                        to={`reportDetail/${item.id}`} className='mt-2 text-green-500 block font-bold text-md'>View report</Link>
                                </div>

                            </div>)
                        }
                    </div>
                </> : <>
                    <div className="flex items-center justify-center py-36">
                        <Bars />
                    </div>
                </>
            }

        </div>
    )
}

export default AllReports