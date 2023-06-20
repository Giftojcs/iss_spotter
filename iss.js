const request = require('request');

const fetchMyIP = function(callback) {
  // Implement the fetchMyIP function
};

const fetchCoordsByIP = function(ip, callback) {
  // Implement the fetchCoordsByIP function
};

const fetchISSFlyOverTimes = function(coords, callback) {
  // Implement the fetchISSFlyOverTimes function
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(coords, (error, flyTimes) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, flyTimes);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };

