# Nested
Demonstrates how to have nested Routers. This allows a single URL to
load different components based on the routers.

```
npm install
npm start
```

```
http://localhost:8080/Application/TAY215485
/application/:appId
```

```
http://localhost:8080/Application/TAY215485/notes/232
/application/:appId/notes/
```

```
http://localhost:8080/Application/TAY215485/notes/232
/application/:appId/notes/:noteid
```

```
http://localhost:8080/Application/TAY215485/notes/232/user/EMP2485
/application/:appId/notes/:noteid/user/:userId
```

```
http://localhost:8080/Application/TAY215485/notes/232
/application/:appId/addresses/
```

```
http://localhost:8080/Application/TAY215485/notes/232
/application/:appId/addresses/:id
```

In these examples you can see that you can use as many splats as required.
Here we are loading an application (TAY215485) and getting a note (232).

This would allow you to make a call to an API to return details about the
application and the given note, displaying the results within the selected
component.

With this pattern it's possible to keep drilling down into more details on a
given dataset. For example, an Application, then the notes, then a given note,
then the user who wrote the note, then details about that user.

```
http://localhost:8080/Application/TAY215485/notes/232/user/EMP254851
```
