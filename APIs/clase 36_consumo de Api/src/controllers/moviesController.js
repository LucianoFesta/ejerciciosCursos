const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const API = 'http://www.omdbapi.com/?apikey=d4e35e92';

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },




    

    //Aqui debo modificar para crear la funcionalidad requerida CONSUMO API EXTERNA!
    'buscar': async (req, res) => {
        const titulo = req.body.titulo;

        const response = await fetch(`http://www.omdbapi.com/?apikey=d4e35e92&t=${titulo}`)
        const movie = await response.json();
            
        res.render('moviesDetailOmdb', {movie})
      
    },








    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        
        Promise
        .all([promGenres, promActors])
        .then(([allGenres, allActors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesAdd'), {allGenres,allActors})})
        .catch(error => res.send(error))
    },





    create: async (req,res) => {

        try{
            const newMovie = {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
    
            const response = await Movies.create(newMovie);
    
            res.json(response);
            //res.redirect('/movies')
        }

        catch (error){
            console.log(error)
        }
    },




    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId,{include: ['genre','actors']});
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        Promise
        .all([promMovies, promGenres, promActors])
        .then(([Movie, allGenres, allActors]) => {
            Movie.release_date = moment(Movie.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
        .catch(error => res.send(error))
    },




    update: async (req,res) => {
        try{
            let movieId = req.params.id;

            const editedMovie = {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
    
            await Movies.update(editedMovie, {where: {id: movieId}})

            //res.json(editedMovie);
            res.json({message: 'La pelicula ' + editedMovie.title + ' ha sido modificada'});
            //res.redirect('/movies')
        }

        catch (error){
            console.log(error)
        }

    },




    delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
        .catch(error => res.send(error))
    },




    destroy: async  (req,res) => {

        try{
            let movieId = req.params.id;

            const peliEliminar = await Movies.findByPk(movieId)
        
            await Movies.destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción

            res.json({message: `La película ${peliEliminar.title} ha sido Eliminada`})

            //res.redirect('/movies');
        }
        catch (error){
            console.log(error)
        }
    }
}

module.exports = moviesController;