# Textbox Canvas Simulatiom

**Demo Video of application:** [DEMO](https://youtu.be/qh9aorT8YUI)
  
## Installation

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js**: You can download and install it from the [Node.js official website](https://nodejs.org/). Node.js is necessary to run JavaScript code on your server and includes npm, which you'll need to manage packages.
  
- **npm** (Node Package Manager): This is included with Node.js. npm is used to install and manage dependencies for your project.

### Steps to Install

1. **Clone the Repository**

   Open your terminal (Command Prompt, Git Bash, or another terminal of your choice), and run the following command to clone the repository:

   ```bash
   git clone [https://github.com/norachams/Texbox.git]
   
2. **Navigate to the Project Directory**
   ```bash
   cd textbox

3. **Install Dependencies**
   ```bash
   npm install
This will install all necessary packages, including:

`react`
`react-dom`
`react-rnd`

4. **Run the Application**
   ```bash
   npm start
   
The application will automatically open in your default web browser at http://localhost:3000.

## How the Application Works

This application allows users to create, move, resize, rotate, and customize text boxes on a web page. The user can also change the color and font of the text within the text boxes using the options provided in the navbar.

### Features

- **Create Text Boxes:** Click anywhere on the screen to create a new text box at that location.
- **Select a Text Box**: Click on any text box to select it. The selected text box will show a border.
- **Move Text Boxes:** Click and drag a text box to reposition it anywhere on the screen.
- **Resize Text:** Use the resize handle at the bottom-right corner of the text box to change its size.
- **Rotate Text:** Use the rotation handle to rotate the text.
- **Change Text Color:** Use the color dropdown in the navbar to change the text color of the selected text box.
- **Change Font:** Use the font dropdown in the navbar to change the font of the text in the selected text box.
- **Delete Text Boxes:** Click the "✕" button on a text box to delete it.

## Some Resources Used

The following resources and libraries were used in the development of this application:

- [React RND](https://www.npmjs.com/package/react-rnd/v/5.0.6): Used for creating resizable and draggable elements in the application.
- [React Draggable](https://www.npmjs.com/package/react-draggable): Utilized for enabling drag-and-drop functionality within the application.
- [React Moveable](https://www.npmjs.com/package/react-movable): Another library used for handling moveable and resizable UI elements.
- [React Flow Examples: Resize & Rotate Nodes](https://reactflow.dev/examples/nodes/resize-rotate): Provided inspiration and examples for implementing resize and rotate functionality in nodes.
- [DevExpress React TextBox Documentation](https://js.devexpress.com/React/Documentation/Guide/UI_Components/TextBox/Getting_Started_with_TextBox/): A guide on how to get started with TextBox in React, used for text input handling.
- [Syncfusion React TextBox Documentation](https://ej2.syncfusion.com/react/documentation/textbox/getting-started): Another resource for implementing and understanding TextBox components in React.









