import { memo } from "react"
import { useNavigate } from "react-router-dom"
import type { DeptList } from "@/entities/department/model"
import { deptListStyles } from "@/pages/department-list/styles";

interface DepartmentCardProps {
    department: DeptList
}

export const DepartmentSection = memo(({ department }: DepartmentCardProps) => {
    const navigate = useNavigate();

    const handleDepartmentClick = (mapId: number) => {
        navigate(`/departments/${mapId}`);
    };

    return (
        <ul className={deptListStyles.facultyItem}>
            <div className={deptListStyles.facultyName}>
                {department.parent_name} ({department.parent_type})
            </div>
            <div className={deptListStyles.departmentList}>
                {department.child.map((child) => (
                    <li key={`${child.child_type}-${child.child_id}`} className={deptListStyles.departmentItem}>
                        <button 
                            className={deptListStyles.departmentLink} 
                            onClick={() => handleDepartmentClick(child.map_id)}
                        >
                            {child.child_name} ({child.child_type})
                        </button>
                    </li>
                ))}
            </div>
        </ul>
    )
})

// 디버깅을 위한 displayName 추가
DepartmentSection.displayName = "DepartmentSection"

