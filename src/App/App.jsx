import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Greeting.jsx'
import Music from './songs/SongField.jsx'
import Books from './books/Books.jsx'

import homeIcon from './assets/home.png'
import musicIcon from './assets/music.png'
import bookIcon from './assets/book_icon.jpeg'

function App() {
  return (
    <>
      <h1>heya! it's a me, a shivaani!</h1>
      <h3>(read in the voice of mario)</h3>
      <BrowserRouter>
          <nav>
              <Link to="/">
                <img src={homeIcon} className="logo" alt="Home icon" />
              </Link>
              <Link to="/music">
                <img src={musicIcon} className="logo" alt="Music icon" />
              </Link>
              <Link to="/books">
                <img src={bookIcon} className="logo" alt="Book icon" />
              </Link>
          </nav>

          {/* Routes */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/books" element={<Books />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
