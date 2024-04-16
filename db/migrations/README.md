# Procedure without docker

1. Develop with sync on
2. At the time of deployment run 
```bash
$ npm run migration:generate -- db/migrations/new
$ npm run migration:run
 
 ```

