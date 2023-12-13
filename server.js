const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.post(
      'https://us17.api.mailchimp.com/3.0/lists/a2b81893f8/members',
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: 'apikey 5d8e4396cead2fdcf5121aa01cfbadee-us17',
        },
      }
    );

    console.log(response.data);
    res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ success: false, message: 'Subscription failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
