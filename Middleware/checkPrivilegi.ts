import { NextFunction, Request, Response } from "express";
import { singleton } from "../Model /Singleton";
import { IntegerDataType, QueryTypes, Sequelize, json, where } from "sequelize";
import {Utente}  from '../Model /Utente';
import { Amministratori } from "../Model /Amministratore";

const sequelize: Sequelize = singleton.getConnection();


export const checkUserPrivileges = async (req: Request, res: Response, next: NextFunction) => {
    const { Username, Password } = req.body;

    try {
        let user = await Utente.findOne({ where: { Username, Password } });
        if (user) {
            return res.redirect('/utente');
        }

        user = await Amministratori.findOne({ where: { Username, Password } });
        if (user) {
            return res.redirect('/amministratore');
        }

        // Se nessun utente è stato trovato, passa la richiesta al middleware successivo
        next();
    } catch (error) {
        // Se si verifica un errore durante la ricerca degli utenti, invia una risposta di errore
        return res.status(500).send('Errore: ' + error);
    }
};
    
module.exports = {
    checkUserPrivileges
}











































/*

//export async function checkPrivileges(req: Request, res: Response, next: any) {
export const checkPrivileges = async (req: Request, res: Response, next: any) => {
    try {
        const { Username, Password } = req.body;
        const user = await Utente.findOne({
            where: { Username, Password }
        });
        console.log(user); 
        next();
        /*
        if (user) {
            const hasPrivileges = user.getDataValue('Privilegi');
            if (hasPrivileges === 1){
                console.log('Utente autenticato come amministratore');
                next();
                
                
            }
            else{ 
                console.log('Utente autenticato come utente');
                //res.redirect('/utente');
                
            }
        } else {
            res.status(404).send('Utente non trovato.');
        }

        

        }
        catch (error) {
            res.status(500).send('Errore durante il controllo dei privilegi: ' + error);
    }
}


        
        
        if (user) {
            const hasPrivileges = user.getDataValue('Privilegi');
            if (hasPrivileges === 1){
                console.log('Utente autenticato come amministratore');
                next();
                
                
            }
            else{ 
                console.log('Utente autenticato come utente');
                res.redirect('/utente');
                
            }
        } else {
            res.status(404).send('Utente non trovato.');
        }*/
    /*
    catch (error) {
        res.status(500).send('Errore durante il controllo dei privilegi: ' + error);
    };
}


module.exports = checkPrivileges; 


*/