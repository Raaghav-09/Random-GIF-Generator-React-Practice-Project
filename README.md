# Random GIF Generator 🎬

A fun and interactive React application that generates random GIFs using the Giphy API. Users can get completely random GIFs or search for GIFs based on specific tags.

## ✨ Features

- **Random GIF Generator**: Get a random GIF with the click of a button
- **Tag-based Search**: Search for GIFs using custom tags/keywords
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Custom Hook**: Utilizes a custom `useGif` hook for efficient API handling
- **Loading States**: Animated spinner while fetching GIFs

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Giphy API Key ([Get one here](https://developers.giphy.com/))

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd random-gif-generator
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Giphy API key
```env
REACT_APP_GIPHY_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests
- **Giphy API** - GIF data source

## 📁 Project Structure

```
src/
├── components/
│   ├── Random.js      # Random GIF component
│   ├── Tag.js         # Tag-based GIF search component
│   └── Spinner.js     # Loading spinner component
├── hooks/
│   └── useGif.js      # Custom hook for GIF fetching
├── App.jsx            # Main app component
├── index.js           # Entry point
└── index.css          # Global styles
```

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Giphy API](https://developers.giphy.com/) for providing the GIF data
- Create React App for the project setup