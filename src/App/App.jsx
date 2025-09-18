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
                {/* <a href="/music" target="_self">
                  <img src={homeIcon} className="logo" alt="Home icon" />
                </a> */}
                Home
              </Link>
              <Link to="/music">
                {/* <a href="/music" target="_self">
                  <img src={musicIcon} className="logo" alt="Music icon" />
                </a> */}
                Music
              </Link>
              <Link to="/books">
                {/* <a href="/books" target="_self">
                  <img src={bookIcon} className="logo" alt="Book icon" />
                </a> */}
                Books
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
