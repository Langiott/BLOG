# Blog_esercizio
Esercizio di un blog con express.ts 
# Guida per l'inizializzazione e la configurazione di un progetto Node.js con Express, TypeScript, MySQL e Docker su Ubuntu 20.04

## 1. Configurazione Iniziale

Per iniziare il progetto, eseguire il seguente comando per generare un file `package.json` predefinito:

```bash
npm init -y
```

## 2. Installazione Dipendenze

Installare le seguenti dipendenze per il progetto:

```bash
npm install express typescript @types/node @types/express
```

## 3. Configurazione TypeScript

Creare un file `tsconfig.json` e configurarlo con le seguenti opzioni:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true
  }
}
```

## 4. Configurazione Nodemon & TypeScript

Installare Nodemon e ts-node come dipendenze di sviluppo:

```bash
npm install --save-dev nodemon ts-node
```

## 5. Modifica package.json

Modificare il file `package.json` aggiungendo i seguenti script nella sezione "scripts":

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --exec ts-node index.ts"
}
```

## 6. Installazione MySQL e Sequelize

Installare Sequelize e mysql2 come dipendenze del progetto:

```bash
npm install --save sequelize mysql2
```

## 7. Creazione Connessione MySQL

Seguire la guida su [cloud.it](https://www.cloud.it/tutorial/come-gestire-utenti-e-permessi-con-mysql.aspx) per configurare un utente MySQL. Verificare la connessione al server MySQL con i comandi:

```bash
sudo service mysql start
sudo service mysql status
```

## Installazione di Docker su Ubuntu 20.04

Seguire la guida su [ionos.it](https://www.ionos.it/digitalguide/server/configurazione/installare-docker-su-ubuntu-2004/) per installare Docker su Ubuntu 20.04.

Prima di iniziare l'installazione, assicurarsi che il sistema e tutti i pacchetti siano aggiornati eseguendo i seguenti comandi:

```bash
sudo apt-get update
sudo apt-get upgrade
```

Rimuovere eventuali versioni di anteprima o beta di Docker con i seguenti comandi:

```bash
sudo apt remove docker-desktop
rm -r $HOME/.docker/desktop
sudo rm /usr/local/bin/com.docker.cli
sudo apt purge docker-desktop
```

Aggiungere il repository di Docker al sistema con i seguenti passaggi:

```bash
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Infine, installare Docker Engine con il seguente comando:

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Verificare l'installazione eseguendo il container Docker "Hello World":

```bash
sudo docker run hello-world
```

Questa guida fornisce una procedura dettagliata per configurare un ambiente di sviluppo Node.js con Express, TypeScript, MySQL e Docker su Ubuntu 20.04.
