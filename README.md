# The simplest github scrap API.

## API link.
[https://legend-of-github-api.herokuapp.com/](https://legend-of-github-api.herokuapp.com/)

### Custom repository information

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/format?username=mikemajesty&stars=10&forks=5```

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
*```GET:```* ```https://legend-of-github-api.herokuapp.com/user/full?username=mikemajesty```
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
*```GET:```* ```https://legend-of-github-api.herokuapp.com/streak/quantity?username=mikemajesty```
##### Response
```JSON
{
    "streak": "365"
}
```

<hr>

### Repository information

#### Get all repositories

##### Request
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/full?username=mikemajesty```
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
*```GET:```* ```https://legend-of-github-api.herokuapp.com/repository/stars?username=mikemajesty```
##### Response
```JSON
{
    "stars": 153
}
```

<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
