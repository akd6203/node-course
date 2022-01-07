const  chalk = require('chalk')
// const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version 
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',  
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        // console.log('add notes', argv)
       notes.addNotes(argv.title, argv.body)
    }
})

// create remove command 
yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'note title to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        // console.log('Removing the note')
        if(notes.removeNote(argv.title)){
            console.log(chalk.green.inverse('Note removed successfully!'))
        }else{
            console.log(chalk.red.inverse('No note found!'))
        }
    }
})

yargs.command({
    command:'list',
    describe:'listing the notes',
    handler() {
        // console.log('list of notes')
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes',
    builder:{
        title:{
            describe:'Note to read',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv) {
        // console.log('read notes')
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

// console.log(chalk.green.inverse.bold.underline('Success!!'));
// const command = process.argv[2]

// if(command === 'add'){
//     console.log('adding code...')
// }
// else if(command === 'remove'){
//     console.log('removing code...')
// }

// console.log(process.argv[2])

// console.log(validator.isEmail('test@gmail.com'))
// console.log(validator.isEmail('testgmail.com'))

// add = require('./utils.js')
// getNotes = require('./notes.js')
// console.log(getNotes())
// const name = "Aman"
// console.log(name)
// console.log(add(34,55))
// fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.Js')
// fs.appendFileSync('notes.txt', '!!Appended Text!!')