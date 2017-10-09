# The simplest github scrap API.

## API link.
[click here](https://legend-of-github-api.herokuapp.com/)

## Repository information

#### Get repository information  ```repository/full```
[![repository.png](https://s1.postimg.org/8bcyuqz2yn/api1.png)](https://postimg.org/image/7tmx65xpdn/)

##### Angular
``` JavaScript

$http.post('https://legend-of-github-api.herokuapp.com/repository/full', { username: 'yourgithubprofilename' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/full`, { username: 'yourgithubprofilename' })
```
#### Get all the stars in your repositories.
[![repository-stars.png](https://s1.postimg.org/7gwsxsxhgf/api2.png)](https://postimg.org/image/3c17lp0bdn/)

##### Angular
``` JavaScript

$http.post('https://legend-of-github-api.herokuapp.com/repository/stars', { username: 'yourgithubprofilename' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/stars`, { username: 'yourgithubprofilename' })
```














### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
