# Custom Web Events Tracking NPM Package
This is a wrapper for [Custom Web Events Tracking JavaScript Module](https://github.com/AutoROICalc/custom-web-events-tracking).
## Installation
```bash
npm install auto-roi-calc-web-events-tracking
```
## Usage
```javascript
import { AutoRoiCalc } from 'auto-roi-calc-web-events-tracking';

const arc: AutoRoiCalc = new AutoRoiCalc('YOUR_TRACKING_ID>');
arc.appendNewSource();
arc.sendEvent("recordType", "record description");
```
## Need help?
Contact the support at support@autoroicalc.com