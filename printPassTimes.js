const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds`);
  }
};

module.exports = printPassTimes;

