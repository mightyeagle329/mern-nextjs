import Link from 'next/link'
import PropTypes from 'prop-types'
import {get} from 'helpers/fetchWrapper'
import PageTitle from 'components/pageTitle/pageTitle'
import Container from 'components/container/container'
import styles from 'styles/movies.module.css'

/**
 * @description Movies list component
 * 
 * @param {*} props 
 * @returns {Component}
 */
const MoviesList = ({movies}) => {
  return (
    <>
      {
        movies.map((movie) => {
          return (
            <Link href={`/movies/${movie._id}`} key={movie._id}>
              <a className={styles.movie_container}>
                <h2>{movie.name}</h2>
                <p>{movie.duration}</p>
              </a>
            </Link>
          )
        })
      }
    </>
  )
}


/**
 * @description Movies page
 * 
 * @param {*} props 
 * @returns {Component}
 */
export default function Movies({movies}) {
  return (
    <>
      <PageTitle title="Movies" />
      <Container>
        <h1>Movies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, doloremque, quibusdam quisquam dolorum, quidem
          necessitatibus, quam quisquam quis, quisquam quisquam.
        </p>
      
        <MoviesList movies={movies} />
      
      </Container>
    </>
  )
}

/**
 * @description Movies page prop types
 * 
 * @returns {Object}
 */
export const getStaticProps = async () => {
  const movies = await get(`${process.env.MOVIES_API_URL}/find`)

  return {
    props: {
      movies
    }
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

Movies.propTypes = {
  movies: PropTypes.array
}