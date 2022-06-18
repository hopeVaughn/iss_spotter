// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('70.67.53.149', (error, coordinates) => {
//   if (error) {
//     console.error("It didn't work!", error);
//     return;
//   }
//   console.log(`It worked! Returned Coordinates `, coordinates);
// });

// const testCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(testCoords, (error, passTimes) => {
//   if (error) {
//     console.error("it didn't work", error);
//     return;
//   }

//   console.log("It worked! returned flyover times:", passTimes);
// });