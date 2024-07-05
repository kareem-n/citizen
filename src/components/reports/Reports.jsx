import { useState } from "react";
import AllReports from "./AllReports"
import ReportDetail from "./ReportDetail"
import { Outlet } from "react-router-dom";

function Reports() {

    const [reportsData, setReportsData] = useState(null);


    return (
        <div style={{
            marginLeft: '250px',
        }} className="px-10 mt-10">

            <div className="bg-white px-4 rounded-xl overflow-hidden flex items-start">
                <AllReports reportsData={reportsData} setReportsData={setReportsData} />

                <Outlet />

                

            </div>
        </div>
    )
}
export default Reports