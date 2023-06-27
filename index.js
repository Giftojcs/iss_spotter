//const { nextISSTimesForMyLocation } = require('./iss');

//nextISSTimesForMyLocation((error, passTimes) => {
  //if (error) {
    //return console.log("It didn't work!", error);
  //}

  //for (const pass of passTimes) {
    //const datetime = new Date(pass.risetime * 1000);
    //console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  //}
//});

// index2.js
const request = require('request-promise-native');

const nextISSTimesForMyLocation = () => {
  const options = {
    uri: 'https://iss-flyover.herokuapp.com',
    json: true,
  };

  return request(options)
    .then((response) => {
      return response.response;
    })
    .catch((error) => {
      throw new Error(`Error fetching ISS pass times: ${error.message}`);
    });
};

const printPassTimes = (passTimes) => {
  // Implementation for printing the pass times
  // ...
};

const fetchISSPassTimes = () => {
  nextISSTimesForMyLocation()
    .then((passTimes) => {
      printPassTimes(passTimes);
    })
   // .catch((error) => {
     // console.log("It didn't work: ", error.message);
    //});
};

fetchISSPassTimes();

