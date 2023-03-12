/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

// Import axios
const axios = require('axios')

app.get('/coins', function(req, res) {
  // Define base url
  let apiUrl = `https://api.coinlore.com/api/tickers?start=0&limit=10`

  // Check if there are any query string parameters
  // If so, reset the base url to include them
  if (req.apiGateway && req.apiGateway.event.queryStringParameters) {
   const { start = 0, limit = 10 } = req.apiGateway.event.queryStringParameters
   apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`
  }

  // Call API and return response
  axios.get(apiUrl)
    .then(response => {
      res.json({  coins: response })
    })
    .catch(err => res.json({ error: err }))
})

//Creation of a new endpoint to get born date of Github profile

app.get('/born', function(req, res) {


let githubApiURL = "https://api.github.com/users/spatel2mtc";
let sampleReturn = {
  "login": "spatel2mtc",
  "id": 89953193,
  "node_id": "MDQ6VXNlcjg5OTUzMTkz",
  "avatar_url": "https://avatars.githubusercontent.com/u/89953193?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/spatel2mtc",
  "html_url": "https://github.com/spatel2mtc",
  "followers_url": "https://api.github.com/users/spatel2mtc/followers",
  "following_url": "https://api.github.com/users/spatel2mtc/following{/other_user}",
  "gists_url": "https://api.github.com/users/spatel2mtc/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/spatel2mtc/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/spatel2mtc/subscriptions",
  "organizations_url": "https://api.github.com/users/spatel2mtc/orgs",
  "repos_url": "https://api.github.com/users/spatel2mtc/repos",
  "events_url": "https://api.github.com/users/spatel2mtc/events{/privacy}",
  "received_events_url": "https://api.github.com/users/spatel2mtc/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-02T01:36:07Z",
  "updated_at": "2023-03-10T01:41:09Z"
};

axios.get(githubApiURL)
.then(response => {
  res.json({  born: response.data.data })
})
.catch(err => res.json({ error: err }))



});











app.get('/item', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/item', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/item', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/item', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
