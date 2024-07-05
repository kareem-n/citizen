import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import user from '../../assets/user.jpg'
import axios from "axios";
import { Bars } from "react-loader-spinner";

function ReportDetail({ reportsData }) {

    const { id } = useParams();


    const [Report, setReport] = useState(null);
    const [Loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setReport(JSON.parse(localStorage.getItem("report")))
    }, [localStorage.getItem("report")])

    useEffect(() => {
        if (!Report) return
        axios.get(`https://citizenconnect-plhr.onrender.com/report/user-detail/${Report.user.phone}/`).then(res => {
            setUserData(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err.response);
        })

    }, [Report])

    const [acceptDone, setAcceptDone] = useState(false)

    const handleApprove = (id) => {
        setLoading(true)
        axios.post(`https://citizenconnect-plhr.onrender.com/report/${id}/approve/`).then(() => {
            setLoading(false)
            setAcceptDone(true);
        })
    }



    // console.log(id);

    return (
        <>

            {
                Report && <div className="py-10 px-20 w-full border-l-2">

                    {
                        acceptDone && <div className="bg-green-500 text-white px-3 py-2 rounded-lg">
                            report has been approved
                        </div>
                    }

                    <div className="flex items-center gap-x-5">
                        <img src={user} className="w-20 h-20 rounded-full object-cover" alt="" />
                        <h2>{Report.user.full_name} </h2>
                    </div>
                    <div className="mt-3 text-gray-500">
                        Report date: {Report.created_at}
                    </div>
                    <div className="mt-3 flex gap-x-3">
                        <button
                            onClick={() => {
                                handleApprove(Report.id)
                            }}

                            className="bg-green-500 py-2 px-6 rounded-lg overflow-hidden text-white opacity-80 hover:opacity-100">Accept</button>
                        <button className="px-6 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white">Reject</button>
                    </div>

                    <div className="mt-5 border-2 w-full px-3 py-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <img src="" className="w-8 h-8 rounded-full" alt="" />
                            <p className="text-blue-500">{Report.user.phone}</p>
                        </div>
                        {
                            userData && <p>{userData.email}</p>
                        }

                    </div>



                    <div className="mt-4">
                        <h3 className="font-bold">Donation type</h3>
                        <ul className="list-disc pl-8">
                            <li>Category : {Report.category}</li>
                            <li>Location : {Report.location}</li>
                            <li>Description : {Report.description} </li>
                        </ul>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <div className="w-2/3">
                            <img src={Report.image} className="block w-full h-96 rounded-xl" alt="" />
                        </div>

                    </div>


                </div>
            }

            {
                Loading && <div className="fixed w-full h-full flex items-center justify-center">
                    <Bars color="green" />
                </div>
            }


        </>

    )
}

export default ReportDetail