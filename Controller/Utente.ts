import {Utente}  from "../Model /Utente";
import { Request, Response } from "express";
import { singleton } from "../Model /Singleton";
import { IntegerDataType, QueryTypes, Sequelize, where } from "sequelize";

const sequelize: Sequelize = singleton.getConnection();

export async function getUtenti( req: any, res: any) {
        try{
            const utenti = await Utente.findAll();
            res.send(utenti);
        }
        catch (error){
            res.send('Errore:  '+ error);
        }    
}


export async function postIscrizione (req: Request, res: Response) {
    try {
        const { Nome, Cognome, Username, Password }  = req.body;
        const utente = await Utente.create({ Nome, Cognome, Username, Password });
        res.send('I dati sono stati inseriti con successo: \n'+ utente);
    }
    catch (error) {
        res.send('Errore:  '+ error);
    }
    
}
    

export async function deleteUtente(req: Request, res: Response) {
    try {
        const { idUtente }  = req.body;
        const utente = await Utente.destroy({ where: { idUtente } });        
        res.send('L utente: '+ idUtente +' è stato eliminato');
    }
    catch (error) {
        res.send('Errore:  '+ error);
    }
    
}

export async function updateUtente(req: Request, res: Response) {
    try {
        const id = req.body.idUtente;
        const newData = req.body;
        console.log('id: ' + id);
        console.log (newData);
        const index : any = await Utente.findByPk(id);

        index.set({ ...newData }); 
        await index.save();
        res.send('I dati sono stati aggiornati con successo: \n'+ index); 
    }
    catch (error) {
        res.status(500).send('Errore:  '+ error);
    }
    
}
