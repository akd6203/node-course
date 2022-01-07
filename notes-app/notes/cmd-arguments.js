const  chalk = require('chalk')
const yargs = require('yargs')

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
    handler: function (argv) {
        // console.log('add notes', argv)
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

// create remove command 
yargs.command({
    command:'remove',
    describe:'Removing a note',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command:'list',
    describe:'listing the notes',
    handler: function () {
        console.log('list of notes')
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes',
    handler: function () {
        console.log('read notes')
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