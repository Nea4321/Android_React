import { useParams } from "react-router-dom";
import Footer from '../main/ui/Footer.tsx';
import Header from '../main/ui/Header.tsx';
import { CertificateCard } from './ui/CertificateData.tsx';

export const CertificatePage = () => {
    const { certId } = useParams<{ certId: string }>();

    return (
        <div>
            <Header />
            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1>자격증 정보</h1>
                <CertificateCard certId={certId ? parseInt(certId) : undefined} />
            </div>
            <Footer />
        </div>
    )
}