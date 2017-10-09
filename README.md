# The simplest github scrap API.

## API link.
[click here](https://legend-of-github-api.herokuapp.com/)

## Repository information

#### Get repository information 
[![repository.png](https://s1.postimg.org/8bcyuqz2yn/api1.png)](https://postimg.org/image/7tmx65xpdn/)

##### Angular
``` JavaScript

$http.post('https://legend-of-github-api.herokuapp.com/repository/full', { username: 'mikemajesty' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/full`, { username: 'mikemajesty' })
```

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
