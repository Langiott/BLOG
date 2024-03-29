-- MySQL Script generated by MySQL Workbench
-- mer 7 feb 2024, 11:26:20
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Blog
-- -----------------------------------------------------
-- Database di default per il blog 
-- 

-- -----------------------------------------------------
-- Schema Blog
--
-- Database di default per il blog 
-- 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blog` ;
USE `Blog` ;

-- -----------------------------------------------------
-- Table `Blog`.`Utente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`Utente` ;

CREATE TABLE IF NOT EXISTS `Blog`.`Utente` (
  `idUtente` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  `Cognome` VARCHAR(45) NOT NULL,
  `Username` VARCHAR(12) NOT NULL,
  `Password` VARCHAR(10) NOT NULL,
  `Privilegi` BOOLEAN NOT NULL,
  PRIMARY KEY (`idUtente`))
ENGINE = InnoDB
COMMENT = 'Tabella per utenti ';


-- -----------------------------------------------------
-- Table `Blog`.`Amministratori`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`Amministratori` ;

CREATE TABLE IF NOT EXISTS `Blog`.`Amministratori` (
  `idAmministratori` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  `Cognome` VARCHAR(45) NOT NULL,
  `Username` VARCHAR(12) NOT NULL,
  `Password` VARCHAR(10) NOT NULL,
  `Privilegi` BOOLEAN NOT NULL,
  PRIMARY KEY (`idAmministratori`))
ENGINE = InnoDB
COMMENT = 'Tabella per gli amministratori ';


-- -----------------------------------------------------
-- Table `Blog`.`Post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`Post` ;

CREATE TABLE IF NOT EXISTS `Blog`.`Post` (
  `idPost` INT NOT NULL AUTO_INCREMENT,
  `idAmministratori` INT NOT NULL,
  `idUtente` INT NOT NULL,
  `Titolo` VARCHAR(45) NOT NULL,
  `Autore` VARCHAR(45) NOT NULL,
  `DataPubblicazione` DATE NOT NULL,
  `Testo` LONGTEXT NOT NULL,
  PRIMARY KEY (`idPost`),
  UNIQUE INDEX `idAmministratori_UNIQUE` (`idAmministratori` ASC) VISIBLE,
  UNIQUE INDEX `idUtente_UNIQUE` (`idUtente` ASC) VISIBLE,
  CONSTRAINT `idUtente`
    FOREIGN KEY (`idUtente`)
    REFERENCES `Blog`.`Utente` (`idUtente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idAmministratori`
    FOREIGN KEY (`idAmministratori`)
    REFERENCES `Blog`.`Amministratori` (`idAmministratori`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
COMMENT = 'Tabella che identifica i post '
INSERT_METHOD = NO
ROW_FORMAT = DEFAULT
KEY_BLOCK_SIZE = 16;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Blog`.`Utente`
-- -----------------------------------------------------
START TRANSACTION;
USE `Blog`;
INSERT INTO `Blog`.`Utente` (`idUtente`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (1, 'Giuseppe ', 'de Stasio ', 'jsk ', '123', false );
INSERT INTO `Blog`.`Utente` (`idUtente`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (2, 'Andrea', 'Langiotti', 'langiott', '456', false);
INSERT INTO `Blog`.`Utente` (`idUtente`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (3, 'Aldo ', 'Baglio', 'pelato ', '789', false);

COMMIT;


-- -----------------------------------------------------
-- Data for table `Blog`.`Amministratori`
-- -----------------------------------------------------
START TRANSACTION;
USE `Blog`;
INSERT INTO `Blog`.`Amministratori` (`idAmministratori`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (1, 'Nico ', 'La Torre', 'nicola', '123', true);
INSERT INTO `Blog`.`Amministratori` (`idAmministratori`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (2, 'Carlo ', 'Parenti ', 'carletto', '456', true);
INSERT INTO `Blog`.`Amministratori` (`idAmministratori`, `Nome`, `Cognome`, `Username`, `Password`, `Privilegi`) VALUES (3, 'Maria ', 'Spagnolo', 'maria', '789', true);


COMMIT;


-- -----------------------------------------------------
-- Data for table `Blog`.`Post`
-- -----------------------------------------------------
START TRANSACTION;
USE `Blog`;
INSERT INTO `Blog`.`Post` (`idPost`, `idAmministratori`, `idUtente`, `Titolo`, `Autore`, `DataPubblicazione`, `Testo`) VALUES (1, 3, 2, 'I paper ', 'Andrea Langiotti ', '2024/01/24', 'Algoritmi ottimizzati migliorano l\'efficienza dei motori di ricerca, ottimizzando la ricerca di informazioni online.');
INSERT INTO `Blog`.`Post` (`idPost`, `idAmministratori`, `idUtente`, `Titolo`, `Autore`, `DataPubblicazione`, `Testo`) VALUES (2, 2, 1, 'La cucina ', 'Nello Taver', '2024/03/30', 'Gli ingredienti freschi sono essenziali per piatti gustosi e salutari, garantendo un\'esperienza culinaria eccezionale.');
INSERT INTO `Blog`.`Post` (`idPost`, `idAmministratori`, `idUtente`, `Titolo`, `Autore`, `DataPubblicazione`, `Testo`) VALUES (3, 1, 3, 'La mia infanzia ', 'Nico La Torre', '2023/07/15', 'Taglio preciso e scelta accurata dei materiali assicurano durata e bellezza nelle opere in marmo, evidenziando maestria artigianale.');

COMMIT;

