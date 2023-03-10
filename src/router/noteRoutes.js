import express from 'express';
import { createNotes, deleteNotes, getNotes, updateNotes } from '../Controllers/NoteController.js';
import { auth } from '../Middleware/auth.js';
const notesRouter = express.Router()

notesRouter.get("/", auth, getNotes) // auth is checking is the person autherize to use get Notes
notesRouter.post("/", auth, createNotes) // auth is checking is the person autherize to use Create Notes
notesRouter.delete("/:id", auth, deleteNotes) // auth is checking is the person autherize to use Delete Notes
notesRouter.put("/:id", auth, updateNotes) // auth is checking is the person autherize to use Update Notes

 
export default notesRouter