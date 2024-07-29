import { useState } from "react";
import NavBarHome from "../../Components/navBarHome";
import PatientCalendar from "../../Components/patientCalendar"
import FormPatientCrud from '../../Components/patientConfig'
import ViewDoctorCalendar from '../../Components/doctorCalendar';
import ViewTratamiento from '../../Components/tratamiento';
import FormDoctorCrud from '../../Components/doctorConfig'
import SideBar from "../../Components/sideBar";

import ViewPatient from "../../Components/viewPatient"
import ViewNotas from '../../Components/notas'
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