# Traffic Light Control System
A simple traffic light control system built with React, where users can manually switch between traffic light signals (red, yellow, green), and increase the duration of each light dynamically using a remote control-like interface.

# Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Usage
- Project Structure
- License

# Project Overview
The Traffic Light Control System simulates a traffic light mechanism using React. The traffic light cycles between three states: red, yellow, and green. Users can:

Manually switch between the lights.
Dynamically increase the time for the active light via a remote control-like UI.
This project showcases the use of React's state and useEffect for time-based updates, as well as managing user inputs to affect the traffic light behavior.

# Features
- Traffic Light Simulation: s lights automatically cycle between red, yellow, and green.
- Manual Control: Users can switch between lights manually using buttons.
- Dynamic Time Adjustment: Users can increase the duration of the active light by entering extra time in the input box.
- Remote Control UI: A sleek, remote-like UI allows interaction with the traffic light system.
- Technologies Used
- React: For building the UI and handling state.
- CSS: For styling the components.
- JavaScript (ES6+): For handling the core logic and interactivity.

# Installation
Follow the instructions below to set up and run the project locally.

# Prerequisites
Make sure you have Node.js and npm installed on your machine.

- Download Node.js
- Clone the repository:

```bash
git clone https://github.com/mahabeer/traffic-light-control
cd traffic-light-control
```

# Install the dependencies:

```bash
npm install
```
Run the app:
```bash
npm start
```
Open in browser:
After the app starts, you can access it by navigating to http://localhost:3000 in your browser.

# Usage
Once the app is running, you will see a Remote Control UI with:

- A display that shows the remaining time for the current traffic light.
- A text input to add extra time for the active light.
- Three buttons (Red, Yellow, and Green) to manually switch between the lights.
- To add extra time:

Enter a number in the input box and press the Enter key. The entered time will be added to the active light's duration.
To switch between lights manually:

Click on any of the Red, Yellow, or Green buttons.
# Project Structure
```graphql
├── public
│ └── index.html # The main HTML file
├── src
│ ├── App.css # Styling for the App component
│ ├── App.js # Main App component
│ └── index.js # Entry point for the React app
├── package.json # Project metadata and dependencies
├── README.md # Project documentation
└── .gitignore # Files to ignore in version control
```
# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Screenshots
![traffic-light](https://github.com/user-attachments/assets/a76cd9bf-17ab-4b1e-9c69-a3b601cb57e2)

Let me know if you'd like to add anything else to this README or further clarify any parts of the project!

