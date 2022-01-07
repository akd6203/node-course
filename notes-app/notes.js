const { default: chalk } = require('chalk')

fs = require('fs')

const addNotes = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter( (note) => note.title === title)
    const duplicateNote = notes.find( (note) => note.title === title)
    // if(!duplicateNote){

    // debugger

    if(duplicateNote === undefined){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added successfully!'))
    }else{
        console.log(chalk.red.inverse('Note already taken!'))
    }
}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNote = (title) => {
    const all_notes = loadNotes()
    const notesToKeep = all_notes.filter( (note) => note.title !== title);
    saveNotes(notesToKeep)
    if(all_notes.length > notesToKeep.length){
        return true
    }else{
        return false
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note === undefined){
        console.log(chalk.red.inverse('No not found!'))
    }else{
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
}

module.exports = {
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes,
}