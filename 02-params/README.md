# Parameters
Demonstrates how to use React-Router parameters.

```
npm install
npm start
```

## :id
A Splat allows you to grab a section of the URL and pass into your Component
as a Prop.

```
http://localhost:8080/post/:name
/posts/:name
```
Load a website blog post with a given name. This will get the name from the
given part of the URL and pass in as props to the assigned Component.

```
http://localhost:8080/Application/TAY215485/notes/232
/application/:appId/notes/:noteid
```
In this example you can see that you can use as many splats as required.
Here we are loading an application (TAY215485) and getting a note (232).

This would allow you to make a call to an API to return details about the
application and the given note, displaying the results within the selected
component.
