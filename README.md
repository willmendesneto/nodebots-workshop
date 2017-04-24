# Nodebots Workshop

> Nodebots Workshop using NodeJS and Johnny-five

[![slides-badge][slides-badge]][slides]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]


## How to install

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install # or `yarn install`
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install # or `yarn install`
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version 6.9.4
```


## Introduction

Repository using Arduino + Johnny Five + NodeJS used in my Nodebots Workshop.

Slides: [https://slides.com/willmendesneto/nodebots-workshop](https://slides.com/willmendesneto/nodebots-workshop);


## First steps

- [Install Arduino](https://www.arduino.cc/en/Main/Software)
- [Install NodeJS](https://nodejs.org/en/download/)
- [Setup your board](http://johnny-five.io/platform-support/)
- (Optional) Install Johnny-Five Package using ```npm install johnny-five <--global|--save>```


## Usage

```bash
$ git clone <project> && cd $_
$ npm install
$ node src/<filename>
```


## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>


[slides]: http://slides.com/willmendesneto/nodebots-workshop
[slides-badge]: https://cdn.rawgit.com/kentcdodds/custom-badges/2/badges/slides.svg

[license-badge]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[license]: https://github.com/willmendesneto/nodebots-workshop/blob/master/LICENSE

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com

[github-watch-badge]: https://img.shields.io/github/watchers/willmendesneto/nodebots-workshop.svg?style=social
[github-watch]: https://github.com/willmendesneto/nodebots-workshop/watchers

[github-star-badge]: https://img.shields.io/github/stars/willmendesneto/nodebots-workshop.svg?style=social
[github-star]: https://github.com/willmendesneto/nodebots-workshop/stargazers

[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20nodebots-workshop%20by%20@willmendesneto%20https://goo.gl/sqZ8dh%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/willmendesneto/nodebots-workshop.svg?style=social

