# The simplest github scrap API.

## API link.
[https://legend-of-github-api.herokuapp.com/](https://legend-of-github-api.herokuapp.com/)

### Repository information
##### Request
GET ```https://legend-of-github-api.herokuapp.com/repository/format?username=mikemajesty&stars=10&forks=5```
*stars: optional* Stars to define a relevant repository, the default is >= 5.
*stars: optional* Stars to define a relevant repository, the default is >= 2.
##### Response
```
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

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
