import { DepartmentList } from "./ui"
import { deptListStyles } from "./styles";
import Header from "@/pages/main/ui/Header.tsx";
import Footer from "@/pages/main/ui/Footer.tsx";

export const DepartmentListPage = () => {
    return (
        <div>
            <Header />
            <div className={deptListStyles.container}>
                <h1>학과 목록</h1>
                <DepartmentList />
            </div>
            <Footer />
        </div>
    )
}

