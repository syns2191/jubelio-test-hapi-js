
**Backend Service**

-stack
	-- hapi.js
	-- postgrestql
	-- sequelize (ORM)

how to install

- clone repo
- ```bash
	npm install
	```

initialize database
- please setting configuration database in config/config.js
	- default backend configuration 
	- ```json
		-  "development": {
	        "username": "postgres",
	        "password": "123",
	        "database": "jubelio",
	        "host": "127.0.0.1",
	        "dialect": "postgres",
	        "operatorsAliases": false,
	        "port": 5433,
	        "eleveniaApiKey": "721407f393e84a28593374cc2b347a98",
	        "eleveniaApi": "http://api.elevenia.co.id/rest"
			}
		```
		
- databse migration
	- migration database 
	```bash
		npm run migrate
	```
	- seed data from elevenia api 
	```bash
		npm run seed:dev
	```

	
- if database migrate and seed success, now you can run service
	 ```bash
	 npm start
	```
- undo your database migration note: initial data will be lost
 - undo migration  (will remove your table)
	
	```bash
	npm run migrate:undo
	```
- undo seed  (will remove your record of table)
	```bash
	npm run seed:undo
	```

**Author**: Sutralia
