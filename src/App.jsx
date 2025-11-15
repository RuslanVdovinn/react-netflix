import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { MOVIES } from './movies.data'
import { useDebounce } from './hooks/useDebounce'
import { useTheme } from './hooks/useTheme'

function App() {
  const {theme, toggleTheme} = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  const movies = MOVIES.filter(movie => movie.name.includes(debouncedSearchTerm))

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black 
    text-black dark:text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img
          src="/netflix.png"
          alt="Netflix"
          className='h-8 w-auto'
        />

        <div>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-4 rounded bg-gray-800 px-3 py-1 text-white"
          />

        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 rounded-2xl border border-white/20
          dark:border-white/10 hover:bg-white hover:text-black
          dark:hover:bg-white/10 transition"
          >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        </div>
      </header>
      <main className='flex gap-6'>
        {
          movies.length ? movies.map(movie => {
            return (
              <MovieCard
                key={movie.name}
                image={movie.image}
                rating={movie.rating}
                trailerYouTubeVideo={movie.trailerYouTubeId}
              />
            )
          }) : <p>No movies found</p>
        }
      </main>
    </div>
  )
}

export default App
