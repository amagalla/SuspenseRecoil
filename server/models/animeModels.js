const mongoose = require('mongoose');

MONGO_URI =
  'mongodb+srv://amagalla:animeshows@cluster0.gsmwu.mongodb.net/animeshows?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'animeshows',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// Create Schema
const AnimeSchema = new Schema({
  show: {
    type: String,
    required: true,
  },
});

module.exports = Anime = mongoose.model('anime', AnimeSchema);
