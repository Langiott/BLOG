//importo sequelize //importo singleton
import  {DataTypes,Sequelize} from "sequelize";
import {singleton } from './Singleton';
import { time, timeStamp } from "console";

//Definizione del modello per Amministratore 

//---> Importo il modello singleton per richiamare la stessa istanza 

const sequelize : Sequelize =  singleton.getConnection();

//---> Definisco il modello

export const Amministratori = sequelize.define('Amministratori',{
    idAmministratori: {
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
        type: DataTypes.BOOLEAN(),
        allowNull: false
    },
},
    {
        timestamps: false, //---> Questo dice a Sequelize di non creare le colonne created_at e updated_at
        freezeTableName: true //---> Questo dice a Sequelize di non cambiare il nome della tabella ( di solito mette il plurale, il bastardo)
    }

);

module.exports = { Amministratori: Amministratori };

