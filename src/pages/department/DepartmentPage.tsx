import { useParams } from "react-router-dom";
import Header from "@/pages/main/ui/Header.tsx";
import Footer from "@/pages/main/ui/Footer.tsx";
import {DepartmentCard} from './ui'
import {deptStyles} from "@/pages/department/styles";

export const DepartmentPage = () => {
    const { mapId } = useParams<{ mapId: string }>();

    return(
        <div className={deptStyles.departmentContainer}>
            <Header />
            
            <div className={deptStyles.departmentCard}>
                <h1>학과 정보</h1>
                <DepartmentCard mapId={mapId ? parseInt(mapId) : undefined} />
            </div>

            <Footer />
        </div>
    )
}