import { Link, useNavigate } from "react-router-dom"
import { FaCheckCircle, FaShoppingBag, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../assets/logo.png'
import { Circles } from "react-loader-spinner";
import { IoMdLogOut } from "react-icons/io";


function Sidebar() {

    const nav = useNavigate();

    useEffect(() => {

        // axios.get("http://cleanegypt.runasp.net/api/admins", {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        //     }
        // }).then(res => {
        //     setUserData(res.data.value)
        //     console.log(res.data.value)
        // })

    }, [])


    const handleLogout = () => {
        localStorage.clear();
        nav('/login')
    }



    return (
        <div style={{
            width: '250px'
        }}

            className="bg-white shadow-md fixed top-0 bottom-0 left-0 pb-10 flex flex-col justify-between">

            <div className="flex flex-col items-center w-full">
                {/* <h2 className="text-2xl font-bold">citizenconnect</h2> */}
                <img src={logo} className="" alt="clean egypt logo" />
                
                <ul style={{
                    color:'#32A9DC'
                }} className="w-full text-lg">
                    <li className="   hover:bg-gray-200 cursor-pointer w-full mt-4">
                        <Link className="flex items-center py-2 px-4" to={'/allReports'}>
                            <FaShoppingBag className="mr-2" /> All Reports
                        </Link>
                    </li>
                    <li className=" hover:bg-gray-200 cursor-pointer w-full">
                        <Link className="flex items-center py-2 px-4" to={'/approved'}>
                            <FaCheckCircle className="mr-2" /> Approved
                        </Link>
                    </li>
                    <li className="   hover:bg-gray-200 cursor-pointer w-full ">
                        <Link className="flex items-center py-2 px-4" to={'/solved'}>
                            <FaStar className="mr-2" /> solved
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <button
                    onClick={ handleLogout } 
                className="w-full p-3 flex items-center hover:bg-gray-300 hover:bg-opacity-30">
                    <IoMdLogOut className="mr-2" size={23} /> Admin Logout
                </button>
            </div>





        </div>
    )
}

export default Sidebar