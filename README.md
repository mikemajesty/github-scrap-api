# The simplest github scrap API.

## API link.
[click here](https://legend-of-github-api.herokuapp.com/)

## Repository information



```repository/full```
#### Get repository information
[![repository.png](https://s1.postimg.org/8bcyuqz2yn/api1.png)](https://postimg.org/image/7tmx65xpdn/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/full', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/full`, { username: 'username' })
```

<hr>

```repository/stars```
#### Get all the stars in your repositories

[![repository-stars.png](https://s1.postimg.org/7gwsxsxhgf/api2.png)](https://postimg.org/image/3c17lp0bdn/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/stars', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/stars`, { username: 'username' })
```
<hr>

```repository/forks```
#### Get all the forks in your repositories
[![repository-forks.png](https://s1.postimg.org/93se84bacv/api3.png)](https://postimg.org/image/7x92zimdrf/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/forks', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/forks`, { username: 'username' })
```

<hr>

```repository/best```
#### Get the best repository
[![repository-best.png](https://s1.postimg.org/7ayf4j33r3/api4.png)](https://postimg.org/image/5flubwqo57/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/best', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/best`, { username: 'username' })
```

<hr>

```repository/language```
#### Gets the most used language
[![repository-language.png](https://s1.postimg.org/7k67czed9r/api5.png)](https://postimg.org/image/5sd8i2v0dn/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/language', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/language`, { username: 'username' })
```

<hr>

```repository/full/languages```
#### Gets all languages of repositories
[![repository-all-languages.png](https://s1.postimg.org/7a8wc6p8cf/api6.png)](https://postimg.org/image/5lzjezyy63/)

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/full/languages', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/full/languages`, { username: 'username' })
```

<hr>

```repository/full/names```
#### Gets all names of repositories
[![api7.png](https://s1.postimg.org/9gmc9y2vmn/api7.png)](https://postimg.org/image/26b8ywbamz/)


##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/full/names', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/full/names`, { username: 'username' })
```

<hr>








### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
