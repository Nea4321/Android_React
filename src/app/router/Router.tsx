import { BrowserRouter, Routes, Route, /*N8avigate*/ } from "react-router-dom"
import { DepartmentListPage } from "@/pages/department-list"
import {MainPage} from "@/pages/main/MainPage.tsx";
import { CertificatePage } from "@/pages/certificate/CertificatePage.tsx"
import { DepartmentPage } from "@/pages/department/DepartmentPage.tsx"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage /> } />
                <Route path="/departments" element={<DepartmentListPage />} />
                <Route path="/departments/:mapId" element={<DepartmentPage />} />
                <Route path="/certificate" element={<CertificatePage />} />
                <Route path="/certificate/:certId" element={<CertificatePage />} />
                {/* 추가 라우트 정의 */}
                {/* <Route path="/certificates" element={<CertificateListPage />} /> */}
                {/* 404 페이지 */}
                <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
            </Routes>
        </BrowserRouter>
    )
}

