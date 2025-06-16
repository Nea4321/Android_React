import { departmentApi } from "@/entities/department/api"
import { DepartmentSection } from "@/features/department/ui"
import { useDataFetching } from "@/shared/hooks";
import { deptListStyles } from "../styles";
import {importDept} from "@/entities/department/api";

export const DepartmentList = () => {

    const data = importDept.getDeptList();

    // 데이터가 없을 때의 처리
    const renderContent = () => {

        return (
            <div className={deptListStyles.facultyList}>
                {
                data.map((dept) => (
                    <DepartmentSection key={`${dept.parent_type}-${dept.parent_id}`} department={dept} />
                ))}
            </div>
        )
    }

    return <div className="department-list-container">{renderContent()}</div>
}

