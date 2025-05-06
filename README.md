# Calvary Chapel Casper 2025

> https://www.calvarychapelcasper.com



A little about web design ...

Front end web revolves around these three: `HTML | CSS | JS`

**HTML**: frameworks: what is on the screen

**CSS**: beautification: make it look pretty

**JS**: functionality: make it do something

## What is Blaze?

BlazeJS is a **reactive UI library** designed for building user interfaces with **HTML templates**. Basically a templating tool for reused JS and HTML

## What is Meteor?

Meteor (or MeteorJS) is a **full-stack JavaScript framework** designed for building **real-time web and mobile applications**. It simplifies development by allowing developers to use **JavaScript for both client-side and server-side code**

Essentially Meteor is a wrapper around `Node.js` that lets you incorporate a database without using something like `express`. By defaualt it uses `MongoDB`, a no-SQL database and talks to *its* server with `Meteor.call` and queries mongo from the server

```ts
			await ServerDB.updateUser(
				{ _id: user._id },
				{
					$set: {
						"user.dataId": iDstring,
					},
				},
			);
```



```mermaid
graph TD;

MeteorClient-->MeteorHTML;
MeteorClient-->MeteorCSS;
MeteorClient-->MeteorJS;
MeteorJS-->MeteorServer;

MeteorServer-->QueryFuction;
QueryFuction-->Database;

```

# Web Architecture Skinny

In web design and development, **RESTful** refers to a web architecture that follows the principles of **Representational State Transfer (REST)**. REST is a widely used standard for building **scalable and efficient web services** and is used to make websites use CRUD:

`GET` (Retrieve data)

`POST` (Create new data)

`PUT` (Update data)

`DELETE` (Remove data)

CRUD stands for **Create, Read, Update, and Delete**—the four basic operations that can be performed on a database.

The language I like to use:

-   `fetch` data :get or read
-   `set` data: post, create, or update
-   `delet` or clear wipe data

## Deploy

read the docs: https://docs.meteor.com/about/web-apps.html

>   Tiny containers are designed for hobby projects and open-source demos

```bash
meteor create ccc --blaze
```

```bash
meteor deploy ccc
```
## Links
**Apps** https://galaxy-beta.meteor.com/zbomb/us-east-1/apps

**Container**(s) https://beta.galaxycloud.app/zbomb/us-east-1/apps/ccc.meteorapp.com/overview

**Demo**: https://ccc.meteorapp.com will be always online when upgraded from free tier.