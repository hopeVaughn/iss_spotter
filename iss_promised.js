// iss_promised.js

const request = require('request-promise-native');
const { printPassTimes } = require('./index');

const fetchMyIp = function() {
  return request(`https://api.ipify.org/?format=json`);
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/v2/info?ip=${ip}&apikey=dukytUC8R0GKC2s7H4M1rjq6U2SUCalRd6m2bk7S`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data.location;
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data => {
      const { response } = JSON.parse(data);
      return response;
    }));
};


module.exports = { nextISSTimesForMyLocation };