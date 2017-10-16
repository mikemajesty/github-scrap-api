# The simplest github scrap API.

## API link.
[https://legend-of-github-api.herokuapp.com/](https://legend-of-github-api.herokuapp.com/)

### Custom repository information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/format?username={username}&stars=10&forks=5```

*stars: optional* Stars to define a relevant repository, the default is >= 5.<br>
*forks: optional* Forks to define a relevant repository, the default is >= 2.

##### Response
```JSON
{
    "stars": 152,
    "forks": 18,
    "language": "C#",
    "bestRepositoty": {
        "name": "Chocobo-Date-Range-Picker",
        "language": "JavaScript",
        "stars": 24,
        "forks": 6
    },
    "repositories": {
        "relevants": [
            {
                "name": "Vue-Dual-List",
                "language": "Vue",
                "stars": 16,
                "forks": 4
            }
        ],
        "full": [
            {
                "name": "github-scrap-api",
                "language": "JavaScript",
                "stars": 5,
                "forks": 0
            },
            {
                "name": "legend_of_github",
                "language": "JavaScript",
                "stars": 0,
                "forks": 0
            }
        ]
    }
}
```
### Custom user information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/full?username={username}```
##### Response
```JSON
{
    "stars": 312,
    "followers": 34,
    "following": 63,
    "commits": 1567,
    "organizations": 4,
    "commitsAverage": 4.3
}
```
### Custom streak information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/streak/quantity?username={username}```
##### Response
```JSON
{
    "streak": "365"
}
```
### Custom contributions information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/contributor/contributions?username={username}```
##### Response
```JSON
{
    "forks": 1,
    "contrinutions": [
        {
            "isContributor": true,
            "repository": "relato-express"
        }
    ],
    "contributionsAmount": 1
}
```

<hr>

### Repository information

#### Get all repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/full?username={username}```
##### Response
```JSON
[
    {
        "name": "github-scrap-api",
        "language": "JavaScript",
        "stars": 6,
        "forks": 0
    },
    {
        "name": "legend_of_github",
        "language": "JavaScript",
        "stars": 0,
        "forks": 0
    },
    {
        "name": "coolvalidator",
        "language": "C#",
        "stars": 6,
        "forks": 0
    }
]
```
#### Gets all stars from the repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/stars?username={username}```
##### Response
```JSON
{
    "stars": 153
}
```
#### Gets all forks from the repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/forks?username={username}```
##### Response
```JSON
{
    "forks": 18
}
```
#### Gets the best repository

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/best?username={username}```
##### Response
```JSON
{
    "bestRepositoty": {
        "name": "Chocobo-Date-Range-Picker",
        "language": "JavaScript",
        "stars": 24,
        "forks": 6
    }
}
```
#### Gets the favorite language

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/favorite/language?username={username}```
##### Response
```JSON
{
    "language": "C#"
}
```
#### Gets all languages from repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/languages?username={username}```
##### Response
```JSON
{
    "repositories": [
        {
            "language": "C#"
        },
        {
            "language": "C#"
        },
        {
            "language": "C#"
        },
        {
            "language": "C#"
        },
        {
            "language": "C#"
        }]
}
```
#### Gets all names from repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/names?username={username}```
##### Response
```JSON
{
    "repositories": [
        {
            "name": "AbstractFactory"
        },
        {
            "name": "AprendendoAjaxComAsp.NetMVC5"
        },
        {
            "name": "AspNetCoreTutorial"
        },
        {
            "name": "BeaconMusic"
        },
        {
            "name": "CadastroDePedidos"
        }]
}
```
<hr>

### User information

#### Gets all stars in other repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/stars?username={username}```
##### Response
```JSON
{
    "stars": 312
}
```

#### Get all your followers

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/followers?username={username}```
##### Response
```JSON
{
    "followers": 34
}
```
#### Get user following

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/following?username={username}```
##### Response
```JSON
{
    "following": 63
}
```
#### Gets the average of the commit

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/commits/average?username={username}```
##### Response
```JSON
{
    "commitsAverage": 4.3
}
```
#### Gets the amount of commits

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/commits?username={username}```
##### Response
```JSON
{
    "commits": 1573
}
```
#### Gets the amount of organizations

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/organizations?username={username}```
##### Response
```JSON
{
    "organizations": 4
}
```

<hr>

### Get streak information

#### Gets the day with more commits

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/streak/maxcommit?username={username}```
##### Response
```JSON
{
    "date": "2016-10-29",
    "commit": 64
}
```
#### Gets all streak information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/streak/full?username={username}```
##### Response
```JSON
[
    {
        "date": "2016-10-09",
        "commit": 0
    },
    {
        "date": "2016-10-10",
        "commit": 0
    },
    {
        "date": "2016-10-11",
        "commit": 0
    },
    {
        "date": "2016-10-12",
        "commit": 0
    },
    {
        "date": "2016-10-13",
        "commit": 0
    }
]
```
## How to solve the locale problem when I get the streak?

#### Using VUE with axios
*On the client side.*
```JavaScript
const getCurrentStreak = axios.get(`https://legend-of-github-api.herokuapp.com/streak/full?username={username}`)
.then(res => {
        let currentStreak = []
        let lastCommit = 0
        res.data.forEach(function (data, index) {
          const date = data.date
          const currentCommit = data.commit
          if (new Date(data.date.replace('-', '/')).getTime() <= new Date().getTime()) {
            if (currentCommit > 0 && (lastCommit > 0 || currentStreak.length === 0)) {
              currentStreak.push({
                date: date,
                commit: currentCommit
              })
            } else {
              currentStreak = []
            }
          }
          lastCommit = data.commit
        })
        return currentStreak.length
      }).catch(e => {
        console.log(e)
      })
```
<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
