const arc = require("./auto-roi-calc");

class AutoRoiCalc {
  constructor(trackingId = "") {
    if (trackingId) {
      this.setTrackingId(trackingId);
    }
  }

  appendNewSource(customSource = "", checkTimeout = true, customTimeoutStorageItemName = "") {
    return arc.appendNewSource(customSource, checkTimeout, customTimeoutStorageItemName);
  }

  getSources(removeDuplicates = true) {
    return arc.getSources(removeDuplicates);
  }

  setTrackingId(id) {
    arc.setTrackingId(id);
  }

  setConfig(key, value) {
    return arc.setConfig(key, value);
  }

  getConfig() {
    return arc.getConfig();
  }

  sendEvent(type, desc, value = 1, checkTimeout = true, customTimeoutStorageItemName = "", customSource = "", tags = "") {
    return arc.sendEvent(type, desc, value, checkTimeout, customTimeoutStorageItemName, customSource, tags);
  }

  setConsent(consent) {
    return arc.setConsent(consent);
  }

  hasConsent(category = "analytics") {
    return arc.hasConsent(category);
  }

  sendAnonymousEvent(type, desc) {
    return arc.sendAnonymousEvent(type, desc);
  }

  setSourcesCookie() {
    return arc.setSourcesCookie();
  }
}

module.exports = { AutoRoiCalc };
