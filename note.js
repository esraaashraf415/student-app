const fs = require('fs')
const  addNotes = (id,name,degree,comment) =>{
    var sum = 0
    for (let i = 0; i < degree.length; i++) {
        sum += degree[i];
    }
    const mynote = loadNote()
    const duplicate = mynote.find((elem) =>{
        return elem.id === id
    })
  
    if(!duplicate){
        
        mynote.push({
            id,
            name,
            degree,
            sum,
            comment
        })
        saveNotes(mynote)
        console.log('saved successfully')
     
    }
  else{
 console.log("error dublicate element")
  }

}
const deleteNote = (id) =>{
    const mynote = loadNote()
    const notesToKeep = mynote.filter((el)=>{
        return el.id !== id
    })
     console.log(notesToKeep)
    if( mynote.length !== notesToKeep.length ){
        saveNotes(notesToKeep)
        console.log('delete successfully')
    }
   else {
    console.log('can not find this element')

   }
}
const readNote = (id)=>{
    const mynote = loadNote()
    const note = mynote.find((n)=>{
        return n.id === id 
    })

    if(note){
        console.log(note.name, note.sum)
    }
    else {
        console.log('can not find this element')
    }
}
const listNotes = ()=>{
    const mynote = loadNote()
    mynote.forEach((el)=>{
        console.log(el.name)
    })
}

const loadNote = () => {
    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveNotes = (mynote)=>{
const saveData = JSON.stringify(mynote)
 console.log(saveData)
fs.writeFileSync('notes.json',saveData)
}
module.exports = {
    addNotes,
    deleteNote,
    readNote,
    listNotes
}
