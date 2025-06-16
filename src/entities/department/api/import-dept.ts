import deptList from '../../../../public/dept/dept_list.json'
import deptMap from '../../../../public/dept/dept_map.json'
import deptData from '../../../../public/dept/dept_data.json'

export const importDept = {
    getDeptList() {
        return deptList;
    },
    importDeptMap() {
        return deptMap;
    },
    importDeptData() {
        return deptData;
    }
}