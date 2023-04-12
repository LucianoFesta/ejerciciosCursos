const db = require('../../database/models');
const sequelize = db.sequelize;

const genresControllerAPI = {
    list: (req,res) => {
        db.Genre.findAll({raw:true})
            .then(genres => res.json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "http://localhost:3001/api/genres"
                },
                data: genres
            }))
    },

    detail: (req,res) => {
        const id = req.params.id;

        db.Genre.findByPk(id)
            .then(genre => res.json({
                meta: {
                    status: 200,
                    url: `http://localhost:3001/api/genres/detail/${id}`
                },
                data: genre
            }))
    }
}

module.exports = genresControllerAPI;