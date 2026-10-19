declare module 'auto-roi-calc-web-events-tracking' {

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

  /**
   * Initializes the module with optional tracking id parameter.
   * @param {string} trackingId
   * @class
   */
  export class AutoRoiCalc {

    constructor(trackingId?: string);

    /**
     * Appends a new session source.
     * @method appendNewSource
     * @param {string} customSource Set custom source instead of the default determination.
     * @param {boolean} checkTimeout Whether to check the source timeout from last append.
     * @param {string} customTimeoutStorageItemName Custom timeout storage item name.
     * @returns {boolean}
     */
    appendNewSource(
      customSource?: string,
      checkTimeout?: boolean,
      customTimeoutStorageItemName?: string
    ): boolean;


    /**
     * Gets the collected sources.
     * @method getSoures
     * @param {boolean} removeDuplicates Whether to remove duplicates.
     * @returns {Array<string>}
     */
    getSources(removeDuplicates?: boolean): Array<string>;

    /**
     * Sets the AutoROICalc Website Events Tracking ID.
     * @method setTrackingId
     * @param {string} id
     * @returns {void}
     */
    setTrackingId(id: string): void;

    /**
     * Sets config value for a config key.
     * @method setConfig
     * @param {string} key
     * @param {string | boolean | number} value
     * @returns {boolean}
     */
    setConfig(key: string, value: string | boolean | number): boolean;

    /**
     * Gets current config.
     * @method getConfig
     * @returns {Config}
     */
    getConfig(): Config;

    /**
     * Requests sending an event to AutoROICalc.
     * @method sendEvent
     * @param {string} type The AutoROICalc Record type.
     * @param {string} desc The Records description.
     * @param {number} value The Record value. Default is 1.
     * @param {boolean} checkTimeout Whether to check timeout from last request.
     * @param {string} customTimeoutStorageItemName Custom timeout storage item name.
     * @param {string} customSource Custom source to use instead the collected ones.
     * @param {Array<string> | string} tags Record tags to send with the event.
     * @returns {boolean}
     */
    sendEvent(
      type: string,
      desc: string,
      value?: number,
      checkTimeout?: boolean,
      customTimeoutStorageItemName?: string,
      customSource?: string,
      tags?: Array<string> | string
    ): boolean;

    /** Update in-memory consent using the site's consent manager. Defaults to denied. */
    setConsent(consent: { analytics?: boolean; marketing?: boolean }): { analytics: boolean; marketing: boolean };
    hasConsent(category?: 'analytics' | 'marketing'): boolean;
    /** Queue one anonymous event with static labels. True does not confirm delivery. */
    sendAnonymousEvent(type: string, desc: string): boolean;
    setSourcesCookie(): boolean;
  }

}