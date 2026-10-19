# Custom Web Events Tracking NPM Package

## Anonymous event counting and consent (v3)

Attribution methods now default to **denied**. Connect your consent manager to
`setConsent({ analytics: true })` only after the visitor grants analytics consent.
Use `setConsent({ analytics: false, marketing: false })` on withdrawal. Consent is
kept only in memory and must be supplied on each page load. Without either grant,
`appendNewSource()`, `sendEvent()` and `setSourcesCookie()` return false, and
`getSources()` returns an empty list without accessing storage. Previously stored
attribution is not automatically deleted; your consent manager should handle
cleanup under your site's retention policy. This consent gate is a breaking change.

Use `sendAnonymousEvent("button_click", "pricing_signup")` to count an event
independently of consent. Configure the publisher tracking ID as usual and call
this method from the relevant interaction handler. Use static labels without personal
data; the same type and description identify the same counter across pages.
The method sends an event when called; use it from click, hover, visibility or
other interaction handlers. For example, use
`sendAnonymousEvent("button_hover", "pricing_hover")` from a hover handler.
WordPress retains its configured hover and visibility dwell thresholds.
No cookies, browser storage, attribution, URL/referrer reads, DOM labels, visitor
IDs, session IDs, per-click IDs or browser timestamps are used. Each event has
value 1 and is recorded under `anonymous events` on the API's current UTC day,
with time 00:00:00. Records retain the normal database insertion timestamp. Repeated events count again. Sum values for event totals;
these are not unique visitor counts.

The request omits credentials and referrers and disables caching and redirects.
The method returns a boolean indicating that a request was queued, not confirmed
delivery: cross-origin no-cors responses are opaque. There are no automatic
retries. The API caps anonymous requests at 600/minute per publisher database
per worker, in addition to normal record plan limits. Deploy the API's new
`/record/collect_anonymous_event` endpoint before using this method. The endpoint
rejects additional parameters and the service-token equivalent accepts only type
and description. Tracking IDs identify the publisher, never an individual visitor.

Web servers still see ordinary connection metadata, including IP addresses and
user-agent headers; review infrastructure/access logging and retention. This is
a technical data-minimization mode, not a blanket legal exemption from consent.
Other scripts and integrations can independently use storage.

This is a wrapper for [Custom Web Events Tracking JavaScript Module](https://github.com/AutoROICalc/custom-web-events-tracking).
## Installation
```bash
npm install auto-roi-calc-web-events-tracking
```
## Usage
```javascript
import { AutoRoiCalc } from 'auto-roi-calc-web-events-tracking';

const arc: AutoRoiCalc = new AutoRoiCalc('YOUR_TRACKING_ID');
// Run from the consent manager after analytics consent is granted:
arc.setConsent({ analytics: true });
arc.appendNewSource();
arc.sendEvent("recordType", "record description", 1, true, "", "", ["lead", "pricing"]);
```
## Need help?
Contact the support at support@autoroicalc.com
