# Gulp Pocket Guide For Busy People

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## Definition

Build process automator

## Purpose

Preprocess code in development environments (before sending to production). Tipically used for tasks like:

- concatenating and minifying CSS and JavaScript files
- compressing new or modified images
- removing console and debugger statements from scripts
- deploying updates to a production server

## Install

Gulp runs on Node and NPM, so you'll need those installed first. Refer to [Node Pocket Guide](https://github.com/heyallan/node-pocket/) for more information on Node.

```shell
## initialize a package.json file (if you haven't)
$ npm init

## install gulp CLI (prepend with 'sudo' if you are on a mac)
$ npm install -g gulp

## install gulp in current project, and save as dependency in package.json
$ npm install --save gulp
```

## Setup

```shell
## create gulpfile.js
$ touch gulpfile.js

## open file in text editor (Atom for instance)
$ open -a 'Atom' gulpfile.js
```

## Plugins

```shell
## install gulp plugins
$ npm install --save gulp-less
$ npm install --save gulp-minify-css
```

## Example

See attached file for an example
