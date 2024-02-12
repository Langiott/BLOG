import { singleton } from "../Model /Singleton";
import {Utente} from "../Model /Utente";
import { IntegerDataType, QueryTypes, Sequelize, where } from "sequelize";
import { Amministratori } from "../Model /Amministratore";
import { couldStartTrivia } from "typescript";

const sequelize: Sequelize = singleton.getConnection();

export async function tryConnection( req: any, res: any) {

    try {
        await sequelize.authenticate();
        console.log('Connessione al database andata a buon fine.');
        try {
            // Esegui la query findAll()
            const users = await Utente.findAll();
            const amministratori = await Amministratori.findAll();
            const u = JSON.stringify(users);
            const a = JSON.stringify(amministratori);
            res.send("UTENTI \n"+ u+ "\n" +"AMMINISTRATORI: \n"+ a ); // Stampa tutti gli utenti trovati
            /*res.send(`Premi il seguente numero:
            1. Crea utente
            2. Modifica utente
            3. Elimina utente`);*/
            
          } catch (error) {
            console.error('Errore durante il recupero degli utenti:', error);
          }
        }
          
        catch (error) {
        console.log('Impossibile connettersi al database. L errore è: \n' + error);
        
        } 
};

export async function Crea(req: any, res: any) {
  try {
      // Estrai i dati dal corpo della richiesta utilizzando req.body
      const { idUtente, Nome, Cognome, Username, Password, Privilegi } = req.body;
      // Utilizza i dati estratti per creare un nuovo utente
      const newUser = await Utente.create({
          Nome: req.body.Nome,
          Cognome: req.body.Cognome,
          Username: req.body.Username,
          Password: req.body.Password,
          Privilegi: req.body.Privilegi
      });
      // Invia una risposta al client
      res.send("Hai creato un nuovo utente: " + JSON.stringify(newUser));
  } catch (error) {
      // Gestisci gli errori, ad esempio inviando una risposta di errore al client
      console.log('Impossibile creare Utente \n' + error);
      res.status(500).send('Impossibile creare utente: \n' + error);
  }
}
