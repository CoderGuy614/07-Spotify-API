<!-- How to get your local SequelPro DB data into a Heroku SQL Database:

1. Add your project API to Heroku
2. In Heroku, click on the "Resources" tab
3. Search for the Add-On called "ClearDB MySQL"
4. Choose the free option and add it to the project
5. Go into ClearDB and click on the database that it has created automatically (looks like "heroku_xxxxxxxx). Copy and paste this DB name into your .db file in the API.
6. Find the access credentials (username and password) in the System Information tab.
7. In the .db file in your API, enter your credentials. Now it should look like this:

const db = mysql.createConnection({
host: "",
user: "bxxxxxxxxx",
password: "xxxxxxxx",
database: "heroku_xxxxxxxx"
});

8. To get the host, go into your Heroko / Settings / Config Vars and you should see an automatically generated CLEARDB_DATABASE_URL.
9. copy the section of this url between the @ and the /. Use this as the "host" in your .db file.

Now it should look like this:

const db = mysql.createConnection({
host: "us-cdbr-iron-east-02.cleardb.net",
user: "bxxxxxxxxx",
password: "xxxxxxxx",
database: "heroku_xxxxxxxx"
});

10. Remember to push your changes to GitHub since you modified the .db file.
11. Go into SequelPro and choose File  New Connection.
12. enter in the same host / username / pw that you used in .db. Port can be left as default (3306)
13. Check that SequelPro can connect to your Heroku Database.
14. Export the data in your local database as a single SQL file
15. import the SQL file into the Heroku DB. -->
