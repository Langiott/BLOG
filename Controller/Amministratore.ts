import { Request, Response } from "express";
import { Post } from "../Model /Post";

export async function getPostsByUserId(req: Request, res: Response) {
    try {
        const id = req.body.IdUtente;
        const post = await Post.findByPk (id);
        res.json(post);
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        const id = req.body.IdPost;
        const result = await Post.destroy({ where: { id } });
        if (result > 0) {
            res.send(`Il post con IdPost: ${id} è stato eliminato.`);
        } else {
            res.status(404).send('Post non trovato.');
        }
    } catch (error) {
        res.status(500).send('Errore: ' + error);
    }
}
