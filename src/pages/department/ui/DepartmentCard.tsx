import { importDept } from "@/entities/department/api";
import {deptStyles} from "@/pages/department/styles";

interface DepartmentCardProps {
    mapId?: number;
}

export const DepartmentCard = ({ mapId }: DepartmentCardProps) => {
    const deptData = mapId ? importDept.getDeptDataById(mapId) : null;

    if (!mapId || !deptData) {
        return (
            <div className={deptStyles.departmentCard}>
                <h1 className={deptStyles.departmentCard}>학과 정보를 찾을 수 없습니다.</h1>
            </div>
        );
    }

    return (
        <div className={deptStyles.departmentCard}>
            <h1 className={deptStyles.departmentCard}>{deptData.dept_map_name}</h1>

            <div className={deptStyles.deptDescription}>
                <h2>학과 정보</h2>
                <p>학과 맵 ID: {deptData.dept_map_id}</p>
                <p>학과명: {deptData.dept_map_name}</p>
                {deptData.asdf && <p>설명: {deptData.asdf}</p>}
            </div>

            <div className={deptStyles.relatedCertificates}>
                <h2>관련 자격증</h2>
                <div className="departments-grid">
                    <p>관련 자격증 정보가 여기에 표시됩니다.</p>
                </div>
            </div>
        </div>
    );
};