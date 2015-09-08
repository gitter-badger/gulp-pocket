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

Gulp runs on Node.js, so you'll need Node installed first. Refer to [Node Pocket Guide](https://github.com/heyallan/node-pocket/) for more information.

```shell
## initialize a package.json file (if you haven't)
$ npm init

## install gulp CLI (prepend with 'sudo' if you are on a mac)
$ npm install -g gulp

## install gulp in current project, and save as dependency in package.json
$ npm install --save gulp
```

## Example
