function parseXMLArrayToJSONArray(xmlArr) {
  let newArr = [];
  xmlArr.forEach((item) => {
    newArr.push(parseXMLToJSON(item));
  });
  return newArr;
}

function parseXMLToJSON(str) {
  try {
    const xml = new window.DOMParser().parseFromString(str, "text/xml");
    return xml2json(xml);
  } catch (err) {
    console.log(e.message);
    return {};
  }
}

function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
    console.log(e.message);
    return {};
  }
}

module.exports = {
  parseXMLArrayToJSONArray: parseXMLArrayToJSONArray,
};
