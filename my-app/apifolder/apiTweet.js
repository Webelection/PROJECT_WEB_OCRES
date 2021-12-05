//L'application requiert l'utilisation du module Express et CORS  
var express = require('express');
var cors = require('cors');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = 7000;

// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require('mongoose');     

//URL de notre base
var urlmongo = "mongodb+srv://TomLehna:LehnaTom@webelection.mun07.mongodb.net/wedb?retryWrites=true&w=majority"; 

// Nous connectons l'API à notre base de données
mongoose.connect(urlmongo);

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK"); 
});

// Nous créons un objet de type Express
var app = express();
app.use(cors());

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router();

// Nous créons un objet de type bodyParser et nous l'intégrons à notre application
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nous créons des schémas nécessaires à la modélisation des données par mongoose
//TWEETS
var tweetSchema = mongoose.Schema({
    photo: String
});

var Tweet = mongoose.model('Tweet', tweetSchema);

//CANDIDATS
var candiSchema = mongoose.Schema({
    nom: String,
    parti: String,
    photo: String,
});

var Candi = mongoose.model('Candi', candiSchema);

myRouter.route('/')
    // all permet de prendre en charge toutes les méthodes. 
    .all(function (req, res) {
        res.json({ message: "Bienvenue sur nos APIs ", methode: req.method });
    });

// Création de ma route (/tweets).  
myRouter.route('/tweets')
    // J'implémente les méthodes GET, et POST
    // GET
    .get(function (req, res) {
        //Utilisation de notre schéma tweetSchema pour interroger la base
        Tweet.find(function(err, tweets){
            if (err){
                res.send(err);
            }
            res.json(tweets);
        });
    })
    //POST
    .post(function (req, res) {
        //Nous utilisons le schema tweetSchema pour écrire dans la DB
        var tweet = new Tweet();
        // Nous récupérons les données reçues pour les ajouter à l'objet Piscine
        tweet.photo = req.body.photo
        tweet.save(function(err){
            if(err){
                red.send(err);
            }
            res.send({message : 'Bravo, le tweet est maintenant stocké en base de données'});
        });
    });

myRouter.route('/tweets/:tweet_id')
    // J'implémente les méthodes GET, PUT, et DELETE pour un tweet donné
    //GET
    .get(function (req, res) {
        Tweet.findById(req.params.tweet_id, function(err, tweet){
            if(err){
                res.send(err);
            }
            res.json(tweet);
        });
    })
    //PUT
    .put(function (req, res) {
        Tweet.findById(req.params.tweet_id, function(err, tweet){
            if(err){
                res.send(err);
            }
            tweet.photo = req.body.photo
            tweet.save(function(err,){
                if(err){
                    res.send(err);
                }
                res.send({message: 'Bravo, données mise à jour'});
            });
        });
    })
    //DELETE
    .delete(function (req, res) {
        Tweet.remove({_id: req.params.tweet_id}, function(err, tweet){
            if(err){
                res.send(err);
            }
            res.send({message: 'Bravo, tweet supprimé'});
        });
    });


// Création de ma route (/candis).  
myRouter.route('/candis')
// J'implémente les méthodes GET, et POST
// GET
.get(function (req, res) {
    //Utilisation de notre schéma candiSchema pour interroger la base
    Candi.find(function(err, candis){
        if (err){
            res.send(err);
        }
        res.json(candis);
    });
})
//POST
.post(function (req, res) {
    //Nous utilisons le schema candiSchema pour écrire dans la DB
    var candi = new Candi();
    // Nous récupérons les données reçues pour les ajouter à l'objet Piscine
    candi.nom = req.body.nom,
    candi.parti = req.body.parti,
    candi.photo = req.body.photo
    candi.save(function(err){
        if(err){
            red.send(err);
        }
        res.send({message : 'Bravo, le candidat est maintenant stocké en base de données'});
    });
});

myRouter.route('/candis/:candi_id')
// J'implémente les méthodes GET, PUT, et DELETE pour un candidat donné
//GET
.get(function (req, res) {
    Candi.findById(req.params.candi_id, function(err, candi){
        if(err){
            res.send(err);
        }
        res.json(candi);
    });
})
//PUT
.put(function (req, res) {
    Candi.findById(req.params.candi_id, function(err, candi){
        if(err){
            res.send(err);
        }
        candi.nom = req.body.nom,
        candi.parti = req.body.parti,
        candi.photo = req.body.photo
        candi.save(function(err,){
            if(err){
                res.send(err);
            }
            res.send({message: 'Bravo, données mise à jour'});
        });
    });
})
//DELETE
.delete(function (req, res) {
    Candi.remove({_id: req.params.candi_id}, function(err, candi){
        if(err){
            res.send(err);
        }
        res.send({message: 'Bravo, candidat supprimé'});
    });
});

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur 
app.listen(port, hostname, function () {
    console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});