const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const Address = require('./models/address');
const addressRouter = require('./routes/addressRoute');
const addressRouterApi = require('./routes/addressRouteApi');
const elevatorRouter = require('./routes/elevatorRoute');
const elevatorRouterApi = require('./routes/elevatorRouteApi');
const methodOverride = require('method-override');

const dbUrl = `mongodb+srv://${config.user}:${config.pass}@cluster0.eiv23.mongodb.net/${config.db}`;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to database!');
	})
	.catch(() => {
		console.log('Connection failed!');
	});
mongoose.set('useCreateIndex', true);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
	next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(methodOverride('_method'));

// Address.collection.dropIndex('*', function(err, result) {
// 	    if (err) {
// 	        console.log('Error in dropping index!', err);
// 	    }
// 	    console.log(result);
// });

app.get('/', (req, res) => {
	Address.aggregate([{
		$lookup: {
			from: 'elevators',
			localField: "typeElevator.typeId",
			foreignField: "_id",
			as: "elevator"
		}
	}]).exec((err, results) => {
		if (err) throw err;
		res.render('addresses', { results });
	});
});

app.get("/search", function (req, res) {
	Address.aggregate([{ $match: { $text: { $search: req.query.search } } }, {
		$lookup: {
			from: 'elevators',
			localField: "typeElevator.typeId",
			foreignField: "_id",
			as: "elevator"
		}
	}]).exec((err, results) => {
		res.render('addresses', { results });
	});
});

app.use('/address', addressRouter);
app.use('/api/address', addressRouterApi);
app.use('/elevator', elevatorRouter);
app.use('/api/elevator', elevatorRouterApi);

module.exports = app;