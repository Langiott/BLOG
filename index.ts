import express, { Request, Response } from 'express'; //import express
import { JSON, QueryTypes,Sequelize, json } from 'sequelize'; //importo sequelize
//---------------IMPORT MODELLI------------------------
import * as modelUtente from './Model /Utente'; //importo model utente
import * as modelAmministratori from './Model /Amministratore'; //importo model amministratori
import * as modelPost from './Model /Post'; //importo model post
//---------------IMPORT CONTROLLERS-------------------
import * as controllerDatabase from './Controller/Database'; //importo controller database
import * as _ from ".";
import * as controllerUtente from './Controller/Utente'; //importo controller utente 
import * as controllerPost from './Controller/Post'; //importo controller post
import * as controllerAmministratore from './Controller/Amministratore'; //importo controller amministratore
import { Json } from 'sequelize/types/utils';

//import * as controller from './controller/controller';

const app = express();
const port = 3001;

//-----------------CREAZIONE ROUTES-------------------



//-------------------MIDDLEWARE-----------------------
import {checkUserPrivileges} from './Middleware/checkPrivilegi';
import { checkDataBase } from './Middleware/checkDataBase';
import { tryConnection } from "./Controller/Database";
import { Utente } from './Model /Utente';
//import { READCOMMITTED } from 'sequelize/types/table-hints';

app.use (express.json());
//app.use (checkUserPrivileges);

app.get('/', (req: any, res: any) => {
  res.send('Benvenuti nella nostra applicazione \n - Per testare la connessione andare in /database \n Login andare in /login\n  ');
});



app.get ('/database', (req: any, res: any) => {
       try{
           controllerDatabase.tryConnection(req, res);           
       }
       catch (error){
           res.send('Errore:  '+ error);
       }
  
}); 
app.post ('/database',checkDataBase, (req: any, res: any) => {

}); 

app.get('/crea',(req: any, res: any) => {
  res.send ('CREA UTENTE');
});

app.post('/crea',(req: any, res: any) => {
  try{
    controllerDatabase.Crea(req,res);
  }catch(error){
    res.send('Errore:  '+ error);
  }
});

app.get('/elimina',  (req: any, res: any) => {
  res.send ('ELIMINA UTENTE');
});

app.get('/modifica',  (req: any, res: any) => {
  res.send ('MODIFICA UTENTE');
});



//----------------------------------------------------------------------//
app.post('/login',checkUserPrivileges,(req: any, res: any) => {
      res.send('AREA LOGIN')
  
}); 


app.get('/utente',(req: any, res: any) => {
  res.send ('AREA UTENTE');
})


app.get('/amministratore', (req: any, res: any) =>
 {
   res.send ('AREA AMMINISTRATORI')

})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
export async function Crea(req: Request, res: Response) {

  try {
    tryConnection(req, res);
    //await sequelize.authenticate();
    //console.log('Connessione al database andata a buon fine.');
    const { idUtente, Nome, Cognome, Username, Password, Privilegi } = req.body;
    const newUser = await Utente.create({
      idUtente: idUtente,
      Nome: Nome,
      Cognome: Cognome,
      Username: Username,
      Password: Password,
      Privilegi: Privilegi,
    });
    res.send("Hai creato un nuovo utente" + newUser);
  } catch (error) {
    console.log('Impossibile connettersi al database. L errore è: \n' + error);
  }

}
