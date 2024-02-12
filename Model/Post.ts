import { DataTypes, Sequelize } from 'sequelize';
import { singleton } from './Singleton';
import { Amministratori } from './Amministratore';
import { Utente } from './Utente';

const sequelize: Sequelize = singleton.getConnection();

export const Post = sequelize.define('Post', {
    IdPost: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    IdAmministratore: {
        type: DataTypes.INTEGER,
        references: {
            model: Amministratori,
            key: 'idAmministratore'
        }
    },
    IdUtente: {
        type: DataTypes.INTEGER,
        references: {
            model: Utente,
            key: 'idUtente'
        }
    },
    Titolo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    Autore: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    DataPubblicazione: {
        type: DataTypes.DATE, //---> RICORDARSI CHE IL FORMATO DATE ACCETTA LA DATA AL CONTRARIO 'YYYY-MM-DD'
        allowNull: false
    },
    Testo: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = { Post : Post };
