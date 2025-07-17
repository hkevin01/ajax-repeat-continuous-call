# AJAX Repeat Continuous Call

## Project Overview
This project provides a utility for continuously polling a server using AJAX requests and updating the user interface based on the results. It is ideal for web applications that require real-time updates, such as dashboards or notification systems. The main logic is implemented in `src/wait.js` using jQuery and modern JavaScript (ES6+).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hkevin01/ajax-repeat-continuous-call.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage Example

```javascript
// Import and use waitForMSG
const waitForMSG = require('./src/wait');
waitForMSG('result.json');
```

## Contribution Guidelines
See [CONTRIBUTING.md](../.github/CONTRIBUTING.md) for details on how to contribute.

## License
This project is licensed under the MIT License.

## Additional Documentation
- [Project Plan](./project-plan.md)
- [Workflow](./WORKFLOW.md)
- [Project Goals](./PROJECT_GOALS.md)
