import { importCert } from "@/entities/certificate/api";

interface CertificateDataProps {
    certId?: number;
}

export const CertificateCard = ({ certId }: CertificateDataProps) => {
    const certificate = certId ? importCert.getCertificate().find(cert => cert.certificate_id === certId) : null;
    const certData = importCert.getCertData();

    if (!certId || !certificate) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>자격증 정보를 찾을 수 없습니다.</h2>
            </div>
        );
    }

    return (
        <div style={{ 
            background: '#fff', 
            borderRadius: '12px', 
            padding: '32px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            margin: '20px 0'
        }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>{certificate.certificate_name}</h2>
            
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#666', marginBottom: '10px' }}>자격증 정보</h3>
                <p><strong>자격증 ID:</strong> {certificate.certificate_id}</p>
                <p><strong>JMCD:</strong> {certificate.jmcd}</p>
                <p><strong>정보구분:</strong> {certData.infogb}</p>
            </div>

            <div>
                <h3 style={{ color: '#666', marginBottom: '10px' }}>자격증 내용</h3>
                <div style={{ 
                    background: '#f8f9fa', 
                    padding: '20px', 
                    borderRadius: '8px',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6'
                }}>
                    {certData.contents || '자격증 내용이 등록되어 있지 않습니다.'}
                </div>
            </div>
        </div>
    );
};
