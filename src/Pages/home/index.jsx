import { useState } from "react";
import NavBarHome from "../../Components/navBarHome";
import PatientCalendar from "../../Components/patientCalendar"
import FormPatientCrud from '../../Components/formPatientCrud'
import ViewDoctorCalendar from '../../Components/viewDoctorCalendar';
import ViewTratamiento from '../../Components/viewTratamientos';
import FormDoctorCrud from '../../Components/formDoctorCrud'
import SideBar from "../../Components/sideBar";

import ViewPatient from "../../Components/viewPatient"
import ViewNotas from '../../Components/viewNotas'
function Home() {
    const [view, setView] = useState("inicio")
    const [rol, setRol] = useState("paciente");

    return(
        <div className=" h-screen flex">
                <SideBar setView={setView} rol={rol} />
                <div className="flex flex-col flex-grow">
                    <NavBarHome />
                    {view === "patient" && <ViewPatient />}
                    {view === "not" && <ViewNotas />}
                    {view === "treatment" && <ViewTratamiento />}
                    {view === "calendar" && rol === "paciente" && <PatientCalendar /> }
                    {view === "calendar" && rol === "medico" && <ViewDoctorCalendar />}
                    {view === "confi" && rol === "medico" && <FormDoctorCrud/> }
                    {view === "config" && rol === "paciente" && <FormPatientCrud />}
                </div>
                
            
        </div>
    )
}

export default Home;