import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom'

function Solved() {

    const [reportsData, setReportsData] = useState(null);



    useEffect(() => {

        localStorage.setItem("report", null)

        axios.get("https://citizenconnect-plhr.onrender.com/report/solved/timeline/")
            .then(res => {
                console.log(res.data);
                setReportsData(res.data);
            })

    }, [])


    return (
        <div
            style={{
                marginLeft: '250px',
                // width: '400px'
            }}
            className='py-8 px-10'
        >

            <div className="bg-white px-10 py-5 rounded-md">
                <h2 className='font-bold text-xl'>Approved Reports</h2>
                {
                    reportsData ? <>
                        <p className='mt-2 text-gray-500'>
                            {reportsData.length} Results
                        </p>

                        <div className="gap-y-5 mt-5 flex flex-col">
                            {
                                reportsData.map(item => <div className="hover:bg-gray-200  flex gap-x-7 items-center ">
                                    <img src={item.image} className='w-32 h-32 rounded-full object-cover' alt="" />
                                    <div className="w-64">
                                        <h3 className=''>{item.description}</h3>
                                        <h3 className=''>{item.location}</h3>
                                        <h3 className=''>{item.created_at}</h3>
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


        </div>
    )
}

export default Solved