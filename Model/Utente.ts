import {DataTypes,Sequelize} from 'sequelize'; //importo sequelize 
import {singleton}  from './Singleton'; //import singleton 


const sequelize: Sequelize = singleton.getConnection();

export const Utente = sequelize.define('Utente', {
    idUtente: {
        type:DataTypes.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Cognome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Username: {
        type: DataTypes.STRING(12),
        allowNull: false
    
    },
    Password: {
        type:DataTypes.STRING(10),
        allowNull: false
    },
    Privilegi: {
        type:DataTypes.BOOLEAN(),
        allowNull: false
    },
  
},

{ 
    timestamps: false,
    freezeTableName: true
}); 

module.exports = { Utente: Utente };
