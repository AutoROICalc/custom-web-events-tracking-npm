import * as arc from "./auto-roi-calc";

export class AutoRoiCalc {
  constructor(trackingId = "") {
    if (trackingId) {
      this.setTrackingId(trackingId);
    }
  }

  appendNewSource(
    customSource = "",
    checkTimeout = true,
    customTimeoutStorageItemName = ""
  ) {
    return arc.appendNewSource(
      customSource,
      checkTimeout,
      customTimeoutStorageItemName
    );
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
  
  sendEvent(
    type,
    desc,
    value = 1,
    checkTimeout = true,
    customTimeoutStorageItemName = "",
    customSource = ""
  ) {
    return arc.sendEvent(
      type,
      desc,
      value,
      checkTimeout,
      customTimeoutStorageItemName,
      customSource
    )
  }

  setSourcesCookie() {
    arc.setSourcesCookie();
  }
  
}