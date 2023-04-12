const db = require('../../database/models');

const controllersMovieAPI = {
    movieCreate: (req,res) => {
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }

        db.Movie.create(newMovie)
            .then(movie => res.json({
                Meta: {
                    status: 200,
                    url: 'http://localhost:3001/movies/api/create'
                },
                Data: movie
            }))
    },

    movieDelete: async (req,res) => {
        const id = req.params.id;

        const peliculaAEliminar = await db.Movie.findByPk(id);

        await db.Movie.destroy({
            where: {id: id}
        })
            .then(movie => res.json({message: 'La película ' + peliculaAEliminar.title + ' fue eliminada.'}))
    }
}

module.exports = controllersMovieAPI;