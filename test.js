const directory = './Posts/10'
const fs = require('fs')
let filename=[];
function files(){ fs.readdir(directory, (err, files) => {     
    files.forEach(file => {
     console.log(file)
     filename.push(file)
    })
})};

console.clear()
 files()

