import certDept from '../../../../public/cert/cert_dept.json'
import certData from '../../../../public/cert/cert_data.json'
import certficates from '../../../../public/cert/certificate.json'

export const importCert = {

    getCertificate() {
        return certficates;
    },

    getCertData() {
        return certData;
    },

    getCertDept() {
        return certDept;
    }

}