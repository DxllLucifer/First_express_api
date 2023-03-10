import NoteSchema from '../Models/Note.js';

//#region Create

export const createNotes = async(req, res)=>{
    const {title, description} = req.body;
    const newNote = new NoteSchema({
        title: title,
        description: description,
        userId: req.userId
    })
    try {
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went Wrong"});
    }
}

//#endregion

//#region Update

export const updateNotes = async(req, res)=>{
  const id = req.params.id;
  const {title, description} = req.body;
  const newNote = {
    title : title,
    description : description,
    userId : req.userId
  }
  try {
    await NoteSchema.findByIdAndUpdate(id, newNote,  {new : true})
    res.status(200).json(newNote)
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Something went Wrong"});
  }


}

//#endregion

//#region Delete

export const deleteNotes = async(req, res)=>{
    const id = req.params.id;
    try {
        const note = await NoteSchema.findByIdAndRemove(id);
        res.status(202).json(note);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went Wrong"});
    }
}

//#endregion

//#region GET Notes

export const getNotes = async(req, res)=>{
    try {
        const notes = await NoteSchema.find({userId : req.userId})
        res.status(200).json(notes)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went Wrong"});
    }
}

//#endregion