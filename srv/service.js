const cds = require('@sap/cds')
module.exports = class UserService extends cds.ApplicationService {
    async init(){
        this.before(['CREATE', 'UPDATE'], 'user', this.regraIdioma)
        this.on('ImprimeUserDia', this.imprimirUser)
        await super.init()
    }
    async regraIdioma(req){
        if(req.data.pais === 'Brasil'){
            req.data.idioma = 'PT'
        }
        return req.data;
    }
    async imprimirUser(req){
        console.log(req.data)
        return req.data.user + "-< "+ new Date();
    }
}