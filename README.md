Todo:
1. Run a basic app
2. Run with docker
3. Add database (docker) 
4. Write tests
5. Configure pre commits 
6. Make ansible playbook for provisioning the server
7. Write ci/cd 


```bash
$ nest generate module user
$ nest generate controller user/user --flat
$ sudo docker-compose -f docker-compose.dev.yml --env-file .env.dev up --build -d
```