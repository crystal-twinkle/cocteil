# Smiles

The app provides the following features:

1. Custom Node.js server: I've developed a custom server using Node.js to handle the backend operations of the application. This server manages the retrieval and manipulation of data,
ensuring smooth communication between the client-side interface and the database.

2. Display of emojis and their textual representation: Users can view a variety of emojis along with their corresponding textual representations (e.g., '😀' for ':-D').
Toggle between emojis and text: Users can switch between displaying emojis and their textual representations with a toggle functionality. Dynamic button labeling: The app dynamically updates the label of a button between "Text" and "Picture" based on the current display mode (emojis or textual representations).
This allows users to customize their viewing experience based on their preferences, whether they prefer graphical emojis or textual representations.

3. Addition of new emoji sets to the server: I've implemented a feature that allows users to add new emoji sets to our server directly through the React frontend. This feature enhances the app's versatility and engages users by letting them contribute new emoji sets.

The app's front-end will be built using modern web technologies like:
1. Front-end:
   - HTML5
   - CSS3
   - React
2. Additional Tools:
   - Vite (for bundling the front-end code)
   - Git (for version control)

Overall, the app offers a seamless user experience with features that enable easy customization of emoji display preferences and the ability to expand emoji options through server-side updates.

### Setup Instructions

To set up and run the smiles application locally on your machine, follow these step-by-step instructions:

1. Clone this Repository
   ```
   git clone https://github.com/crystal-twinkle/smiles.git
   ```
2. Install Dependencies 
   ```
   npm install
   ```
3. Start the Development Server
   ```
   npm run start
   ```
   This will start both the front-end and back-end development servers. The app will be accessible at http://localhost:5173.
4. Build for Production
   ```
   npm run build
   ```
   This will generate a production-ready build of the application in the dist folder.

Now, you have the eCommerce Application up and running on your local machine. Feel free to explore the app and contribute to its development!



