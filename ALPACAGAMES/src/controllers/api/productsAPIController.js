const db = require('../../database/models');
const details = require('../../database/models/VideoGameDetail');
const genre = require('../../database/models/Genre');
const platform = require('../../database/models/Platform');


module.exports = {
    'list':(req,res) => {
        console.log(db);
            db.VideoGame.findAll()
              .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: ''
                    },
                    data: users
                }
                    res.json(respuesta)
              })
        },

        detail: (req, res) => {
            db.VideoGame.findByPk(req.params.id)
               .then(users => {
                let respusta = {
                    meta: {
                        status: 200,
                        url: ''
                    },
                    data: users
                }
                    res.json(respusta);
               })
        },

        create:(req,res) => {
            console.log(req.body);
            db.VideoGame.create(
                {
                    // videog
                    name: req.body.name,
                    // details
                    description: req.body.description,

                    //plataforms
                    platform: req.body.plataform,
                    // videog genres
                    genre: req.body.genre,
                    //videog
                    release_date: req.body.release_date,
                    price:req.body.price,
                    //details
                    images: req.body.images,
                    // os: req.body.os,
                    storage: req.body.storage,
                    size: req.body.downloadSize
                },
                {
                    include: ['details', 'genres', 'platforms', 'users']
                }
            )
            .then(confirm => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: ''
                    },
                    data :confirm
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
        },

        update: (req,res) => {
            console.log(req.body);
            db.VideoGame.update(
                {
                    price:req.body.price,
                    name: req.body.name,
                    release_date: req.body.release_date
                },
                {
                    where: {id: req.params.id}
                })
                .then(users =>{
                    res.json({
                        status: 200,
                        data: users
                    })
                })
                .catch(error => res.send(error))
        },

        destroy:(req, res) =>{
            db.VideoGame.destroy({
                where: {id:req.params.id}
            })
            .then(user =>{
                res.json({
                    status:200,
                    data: user
                })
            })
            .catch(error => res.send(error))
        }
}