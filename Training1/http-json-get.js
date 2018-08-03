const https = require('https')
//const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
//const url = 'https://pcm.uat01.amadeus.com/V0/airPromotions?siteCode=BASMBNEW&languageCode=GB&countrySite=GB&originLocationCode=NBO&destinationLocationCode=EBB'
const url = 'https://book.kenya-airways.com/V0/airPromotions?siteCode=BASMBNEW&languageCode=GB&countrySite=US&originLocationCode=JFK&destinationLocationCode=MBA'

https.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { 
    rawData += chunk 
  })
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})