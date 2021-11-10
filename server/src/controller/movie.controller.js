import Movie, {create, find, remove} from '../models/movie.model'

export const Create = async (req, res) => {
  const {name, duration, synopsis, images} = req.body

  await create(Movie({name, duration, synopsis, images}))
    .then(() => res.send({
      status: 'success',
      message: 'Movie created successfully',
    }))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}

export const Remove = async (req, res) => {
  const {name} = req.body

  await remove(name)
    .then(() => res.send({
      status: 'success',
      message: 'Movie deleted successfully'
    }))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}

export const Find = async (_, res) => {
  await find()
    .then((movies) => res.send(movies))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))

}