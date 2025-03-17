import { rejects } from 'assert';
import fs from 'fs'
import { resolve } from 'path';

// reading file
// fs.readFile('hello.txt','utf-8',(err, content) => {
//     if (err) {
//         console.log("Error in file Reading", err);
//     } else {
//         console.log("file reading success", content)
//         fs.writeFile("backup.txt", content, (err) => {
//             if(err){
//                 console.log("file wrting me wrroer", err)
//             }
//             else {
//                 console.log("file write ho gyi hai")
//                 fs.unlink("hello.txt", (err) => {
//                     if(err){
//                         console.log("file deleting me wrroer", err)
//                     } else {
//                         console.log("file delte ho gyi")
//                         fs.writeFile("hello.txt", content, (err) =>{
//                             if(err){
//                                 console.log("file wrting me wrroer", err)
//                             }
//                             else {
//                                 console.log("file write ho gyi hai")
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// file system using promises

function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        })
    })
}

function writeFilewithPromises(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("file write ho gyi hai")
            }
        }
        )
    }
    )
}

function unlinkFilewithPromises(filepath) {
    fs.unlink(filepath, (err) => {
        if (err) {
            reject(err)
        }
        else {
            resolve("file delete ho gyi")
        }
    }
    )

}

let contents = readFileWithPromise('hello.txt', 'utf-8')
    .then(content => writeFilewithPromises("backup.txt", content))
    .then(() => unlinkFilewithPromises("hello.txt"))
    .catch(err => {
        console.log("error ho gya ji ", err)
    })
// console.log(contents)