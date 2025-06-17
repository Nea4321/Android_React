import certDept from '../../../data/cert/cert_dept.json'
import certData from '../../../data/cert/cert_data.json'
import certficates from '../../../data/cert/certificate.json'

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