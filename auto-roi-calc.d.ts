declare module "AutoRoiCalc" {
  interface Config {
    debug: boolean;
    maxSources: number;
    cookieNameSources: string;
    storageNameTimeout: string;
    storageNameTimeoutSent: string;
    storageNameSources: string;
    timeout: number;
    ignoreUtmCampaign: boolean;
    ignoreUtmSource: boolean;
    useSourceMedium: boolean;
  }

  interface AutoRoiCalc {
    appendNewSource(
      customSource: string = "",
      checkTimeout: boolean = true,
      customTimeoutStorageItemName: string = ""
    ): boolean;
    getSources(removeDuplicates: boolean = true): Array<string>;
    setTrackingId(id: string): void;
    setConfig(key: string, value: string | boolean | number): boolean;
    getConfig(): Config;
    sendEvent(
      type: string,
      desc: string,
      value: number = 1,
      checkTimeout: boolean = true,
      customTimeoutStorageItemName: string = "",
      customSource: string = ""
    ): boolean;
    setSourcesCookie(): void;
  }

  const autoRoiCalc: AutoRoiCalc;

  export = autoRoiCalc;
}