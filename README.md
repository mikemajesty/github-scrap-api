# The simplest github scrap API.

## API link.
[click here](https://legend-of-github-api.herokuapp.com/)

## Repository information

```repository/format```
#### Gets specific information formatted from repositories
[![repository-format.png](https://s1.postimg.org/8f1ojqknb3/api8.png)](https://postimg.org/image/2id4cq44cb/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/repository/format', { username: 'mikemajesty',
	'relevantrepository': {
		'stars': 5,
		'fork': 1
	} } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/repository/format`, { username: 'mikemajesty',
	'relevantrepository': {
		'stars': 5,
		'fork': 1
	} } )
```
```relevantrepository``` *Rules to define a relevant repository*

<hr>

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

## User information

```user/full```
#### Get all user information
[![user-all.png](https://s1.postimg.org/93xmkrzu9r/outro.png)](https://postimg.org/image/1q2xc0f6kb/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/full', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/full`, { username: 'username' })
```

<hr>

```user/stars```
#### Get all stars in other repositories
[![user-stars.png](https://s1.postimg.org/1o9ufc48j3/api9.png)](https://postimg.org/image/924jo3ow8b/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/stars', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/stars`, { username: 'username' })
```

<hr>


```user/followers```
#### Get user followers
[![user-followers.png](https://s1.postimg.org/8hzq3xuckv/api10.png)](https://postimg.org/image/939dq8osvf/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/followers', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/followers`, { username: 'username' })
```

<hr>


```user/following```
#### Get user following
[![user-following.png](https://s1.postimg.org/75fh6fl8y7/api12.png)](https://postimg.org/image/11np3zikjv/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/following', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/following`, { username: 'username' })
```

<hr>

```user/commits```
#### Get user commits
[![user-commits.png](https://s1.postimg.org/48jilf69zz/api13.png)](https://postimg.org/image/5t99kw3hgb/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/commits', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/commits`, { username: 'username' })
```

<hr>

```user/organizations```
#### Get user organizations
[![user-organizations.png](https://s1.postimg.org/1lwchksovj/api14.png)](https://postimg.org/image/2lcfuqvg17/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/organizations', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/organizations`, { username: 'username' })
```

<hr>

```user/commits/average```
#### Get user commits average
[![commit-average.png](https://s1.postimg.org/1nbe29ii8v/novo.png)](https://postimg.org/image/4b0ucmbjkr/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/user/commits/average', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/user/commits/average`, { username: 'username' })
```

<hr>

## User streak information
[![user-streak.png](https://s1.postimg.org/5gvwqoyeun/api20.png)](https://postimg.org/image/4z5v23x19n/)
```streak```
#### Get user streak

##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/streak', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/streak`, { username: 'username' })
```

<hr>

```streak/full```
#### Get all the streaks of the user
[![api16.png](https://s1.postimg.org/54h9yp4v7j/api16.png)](https://postimg.org/image/1vi621hdkr/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/streak/full', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/streak/full`, { username: 'username' })
```

<hr>

```/streak/maxcommit```
#### Get max commits day
[![max-commit.png](https://s1.postimg.org/9rsfrpyf9b/api17.png)](https://postimg.org/image/5qggdbubwb/)
##### Angular
``` JavaScript
$http.post('https://legend-of-github-api.herokuapp.com/streak/maxcommit', { username: 'username' } )
```
##### VUE axios
``` JavaScript
axios.post(`https://legend-of-github-api.herokuapp.com/streak/maxcommit`, { username: 'username' })
```




### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
