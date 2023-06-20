const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (const pass of passTimes) {
    const datetime = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  }
});

