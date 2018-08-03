//NODE WEB CRAWLER - A script to download webpages
const http = require('https')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
// Get the download page
const downloadPage = (url='http://nodeprogram.com') => {
//Log the URL being called
  console.log('downloading ', url)
//takes the URL and a callback function and makes a GET request.
  const fetchPage = (urlF, callback) => {
//GET is Asynchronous
    http.get(urlF, (response) => {
      let buff = ''
      response.on('data', (chunk) => { 
        buff += chunk
      })
      response.on('end', () => {
        callback(null, buff)
      })
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`)
      callback(error)
    })
  }
//create a unique folder name using the npm module uuid
  const folderName = uuidv1()
//Create a folder
  fs.mkdirSync(folderName)
//get data from the URL
  fetchPage(url, (error, data)=>{
    if (error) return console.log(error)
    //Create the files url.txt and file.html goes inside of the callback
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })
}

downloadPage(process.argv[2])