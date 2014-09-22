

Marc Simpson

# How many points have you earned?

80/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

10

# What is the most difficult part about this week's challenge?

fill-in-your-answer

# Show and tell

## Link (3 points)

[The Beginner’s Guide to Quantified Self (Plus, a List of the Best Personal Data Tools Out There)](http://technori.com/2013/04/4281-the-beginners-guide-to-quantified-self-plus-a-list-of-the-best-personal-data-tools-out-there/)

## How do you relate to this article personally? (3 points)

I did not know anything on this topic so I needed to learn about what this topic was and how to use it, so that is why i chose it.

# API (II) (5 points x 4 + 8 points x 2 = 36 points)

## Challenges

### 1 (4 points)

* Code: [github1.js](var restler = require('restler');

restler.get('https://api.github.com/repositories').on('complete', function(data){
	console.log(data);
});)
* Result: [result1.json](http://i.imgur.com/fHrpzY9.png)

### 2 (4 points)

* Code: [github2.js](var restler = require('restler');

restler.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(data){
	console.log(data);
});)
* Result: [result2.json](http://i.imgur.com/CYcEpi9.png)

### 3 (4 points)

* Code: [github3.js](var restler = require('restler'));

restler.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/forks').on('complete', function(data){
	console.log(data);
}))
* Result: [result3.json](http://i.imgur.com/5LAjc9u.png)

### 4 (4 points)

* Code: [github4.js](var restler = require('restler');

restler.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls?state=closed').on('complete', function(data){
	console.log(data);
});)
* Result: [result4.json](http://i.imgur.com/9NpmwH7.png)

### 5 (4 points)

* Code: [github5.js](var restler = require('restler');

restler.get('https://api.github.com/repos/peymanmortazavi/hackathon-accesslog/stats/contributors').on('complete', function(data){
	console.log(data);
});)
* Result: [result5.json](http://i.imgur.com/b6Mms24.png)

### 6 (8 points)

* Code: [github6.js](var restler = require('restler');

restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/pre-class-survey/issues', {"title":"test", "body":"just testing the api"}, {username: "<username>", password:"<password>"}).on('success', function(data){
	console.log(data);
});)
* Result: [result6.json](var restler = require('restler');
//this makes the json that contains our parameters to post. 
restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues',params).on('complete', function(repos) {
  if (repos instanceof Error) {
    console.log('Error:', repos.message);
    this.retry(500);
  } 
  else {
    console.log(repos);
  }
});)

### 7 (8 points)

* Code: [github7.js](var restler = require('restler');
 
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});
 
function getClassEventsForPage(i, callback){
	github.repos.getFromOrg({
	    org:"CSCI-4830-002-2014",
	    page: i
	}, callback);
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
}
async.map([1,2,3,10], getClassEventsForPage, function(err, results){
 
 	flattened = flatten_fast(results);    
	
	console.log(JSON.stringify(flattened, undefined, 10));
});)


# Refine

## Checkpoints (4 points x 5 = 20 points)

### 1 (4 points)

![image](http://i.imgur.com/6VyAdQb.png)

### 2 (4 points)

![image](http://i.imgur.com/8qTleWw.png)

### 3 (4 points)

![image](http://i.imgur.com/jRIBMgy.png)

### 4 (4 points)

![image](http://i.imgur.com/RDTvQsV.png)

### 5 (4 points)

![image](http://i.imgur.com/YaV35OD.png)

## Challenges (4 points x 7 + 10 points x 1 = 38 points)

### 1 (4 points)

![image](http://i.imgur.com/d41xGX3.png)

### 2 (4 points)

![image](http://i.imgur.com/p5DW1JH.png)

### 3 (4 points)

![image](http://i.imgur.com/DCqzIK0.png)

### 4 (4 points)

![image](http://i.imgur.com/kOTT6eo.png)

### 5 (4 points)

![image](http://i.imgur.com/eNFmHbt.png)

### 6 (4 points)

![image](http://i.imgur.com/DWPQl2Z.png)

### 7 (4 points)

![image](http://i.imgur.com/276sYFK.png)

### 8 (10 points)

![image](http://i.imgur.com/cdLH4Wt.png)
