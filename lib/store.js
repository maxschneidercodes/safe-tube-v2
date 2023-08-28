import { getCookie, setCookie } from "./cookies";

function getChannels() {
  try {
    return JSON.parse(getCookie("channelIDsArray"));
  } catch (err) {
    return [];
  }
}

function getVideoDisplayAmmount() {
  try {
    return getCookie("videoDisplayAmmount");
  } catch (err) {
    return 3;
  }
}

function addChannel(channelObjc) {
  let channelIDsArray = getChannels();
  console.log("asdlkasdsdhajkshdjk");
  if (channelIDsArray && channelIDsArray.length > 0) {
    channelIDsArray.push(channelObjc);
    setCookie("channelIDsArray", channelIDsArray);
  } else {
    let newChannelIDsArray = [];
    newChannelIDsArray.push(channelObjc);
    setCookie("videoDisplayAmmount", 3);
    setCookie("channelIDsArray", newChannelIDsArray);
  }
}

function removeChannel(channelID) {
  let channelIDsArray = getChannels();
  let newChannelIDsArray = removeChannelWithID(channelIDsArray, channelID);
  setCookie("channelIDsArray", newChannelIDsArray);
  return newChannelIDsArray;
}

function removeChannelWithID(arr, id) {
  return arr.filter(function (item) {
    return item.id !== id;
  });
}

module.exports = {
  getChannels: getChannels,
  addChannel: addChannel,
  removeChannel: removeChannel,
  getVideoDisplayAmmount: getVideoDisplayAmmount,
};
