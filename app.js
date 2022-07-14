const yargs = require('yargs');
const notes = require('./note')

yargs.command({
        command:"add",
        describe:'to add noted',
        builder:{
            id:{
                describe:"this is a unique ID",
                demandOption:true,
                type:"number"
            },
            name:{
                describe:'this is a name',
                demandOption:true,
                type:'string'
            } ,
            degree:{
                describe:'this is a name',
               demandOption:true,
                type:'array'
            } ,
             comment:{
                describe:'this is a name',
                type:'string'
            }
        },
        handler:()=>{
            notes.addNotes(yargs.argv.id,yargs.argv.name, yargs.argv.degree, yargs.argv.comment)
          }
    })
    yargs.command({
        command:"remove",
        describe:'to remove noted',
        builder:{
            id:{
                describe:"this is a unique ID",
                demandOption:true,
                type: 'number'
            },
            name:{
                describe:'this is a name',
                type:'string'
            } ,
             degree:{
                describe:'this is a name',
                type:'array'
            } ,
            comment:{
                describe:'this is a name',
                type:"string"
            }
        
        },
        handler:()=>{
    notes.deleteNote(yargs.argv.id)
        }
    })
    yargs.command({
        command:"read",
        describe:'to read noted',
        builder:{
            id:{
                describe:"this is a unique ID",
                demandOption:true,
                type: 'number'
            },
            name:{
                describe:'this is a name',
                type:'string'
            } ,
            degree:{
                describe:'this is a name',
                type:'array'
            } ,
            comment:{
                describe:'this is a name',
                type:"string"
            }
        },
        handler:()=>{
    notes.readNote(yargs.argv.id, yargs.argv.sum)
        }
    })
    yargs.command({
        command:"list",
        describe:'to list noted',
        handler:()=>{
    notes.listNotes()
        }
    })
    yargs.parse()
    
