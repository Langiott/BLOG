import { NextFunction, Request, Response } from "express";
import { singleton } from "../Model /Singleton";
import { IntegerDataType, QueryTypes, Sequelize, json, where } from "sequelize";
import {Utente}  from '../Model /Utente';
import { Amministratori } from "../Model /Amministratore";

const sequelize: Sequelize = singleton.getConnection();


export const checkDataBase = async (req: Request, res: Response, next: NextFunction) => {
    const { Numero } = req.body;

    try {
        if (Numero === "1") {
            return res.redirect('/crea');
        }
        else if(Numero === "2") {
            return res.redirect('/elimina');
        }
        else if (Numero === "3") {
            return res.redirect('/modifica');
        }
        next();
    } catch (error) {
        // Se si verifica un errore durante la ricerca degli utenti, invia una risposta di errore
        return res.status(500).send('Errore: ' + error);
    }
};
    
module.exports = {checkDataBase}