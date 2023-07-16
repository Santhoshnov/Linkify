const express = require('express');
const mongoose = require('mongoose');
const validUrl = require('valid-url');
const shortId = require('shortid');

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://santhosh13112002:MrtNyDKGsTUS8VC5@cluster0.jikeuia.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortUrl: String
});

const Url = mongoose.model('Url', urlSchema);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  if (!validUrl.isUri(longUrl)) {
    return res.render('index', { error: 'Invalid URL' });
  }

  try {
    let url = await Url.findOne({ longUrl });
    if (url) {
      return res.render('index', { shortUrl: url.shortUrl });
    }

    const shortUrl = shortId.generate();

    url = new Url({
      longUrl,
      shortUrl
    });

    await url.save();
    res.render('index', { shortUrl: `https://${req.get('host')}/${url.shortUrl}` });
  } catch (err) {
    console.error(err);
    res.render('index', { error: 'Server error' });
  }
});

app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.render('error', { error: 'URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.render('error', { error: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
