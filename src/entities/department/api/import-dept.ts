import deptList from '../../../data/dept/dept_list.json'
import deptMap from '../../../data/dept/dept_map.json'
import deptData from '../../../data/dept/dept_data.json'

export const importDept = {
    getDeptList() {
        return deptList;
    },
    importDeptMap() {
        return deptMap;
    },
    importDeptData() {
        return deptData;
    },
    getDeptDataById(id: number) {
        return deptData.find(dept => dept.dept_map_id === id);
    }
}