# WNW Bookmarklets

Some helpful [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) for WNW admins and members.

## Create a bookmarklet

Create a JS file in `/javascripts`. This file has a specific format. The first two lines should be comments and are required. The first is a short description of what this bookmarklet does. The second is the name that will appear when a user adds it as a bookmark. Then your Javascript which should be wrapped in an immediately-invoked function:

```javascript
// Convert all instances of 'Hello' to 'Hello, world!'
// Hello, World!

(function() {
    // some javascript
}());
```

After testing run `./compile` from the root directory to convert all of the bookmarklet JS files into `public/index.html` which is ready to be served to the world. Users simply drag/drop the link/button on that page to their bookmarks bar:


