import { Request, Response } from "express";
import { Post } from "../Model /Post";
import { Utente } from "../Model /Utente";

// Inserire un post
export async function createPost(req: Request, res: Response) {
    try {
        const { IdUtente, Titolo, Autore, DataPubblicazione, Testo } = req.body;
        const post = await Post.create({ IdUtente, Titolo, Autore, DataPubblicazione, Testo });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}

// Modificare un post soltanto se si è l'utente che l'ha creato
export async function updatePost(req: Request, res: Response) {
    try {
        const { IdPost, IdUtente, Titolo, Autore, DataPubblicazione, Testo } = req.body;
        const post = await Post.findByPk(IdPost);

        if (post && req.body.IdUtente === IdUtente) {
            await post.update({ Titolo, Autore, DataPubblicazione, Testo });
            res.send('Il post è stato aggiornato con successo.');
        } else {
            res.status(403).send('Non sei autorizzato a modificare questo post.');
        }
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}

// Eliminare un post soltanto se si è l'utente che l'ha creato
export async function deletePost(req: Request, res: Response) {
    try {
        const { IdPost, IdUtente } = req.body;
        const post = await Post.findByPk(IdPost);

        if (post && req.body.IdUtente === IdUtente) {
            await post.destroy();
            res.send('Il post è stato eliminato con successo.');
        } else {
            res.status(403).send('Non sei autorizzato a eliminare questo post.');
        }
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}

// Visualizzare tutti i post
export async function getAllPosts(req: Request, res: Response) {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}

// Visualizzare i post fatti da un utente definito dall'ID
export async function getPostsByUsername(req: Request, res: Response) {
    try {
        const id = req.body.idUtente;
        const utente = await Utente.findByPk(id);
        if (utente) {
            const posts = await Post.findAll({ where: { IdUtente: id } });
            res.json(posts);
        } else {
            res.status(404).send('Utente non trovato.');
        }
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}
