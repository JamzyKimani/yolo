db.createUser(
    {
        user: "root",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "yolodb"
            }
        ]
    }
);
db.createCollection("test"); 
//MongoDB creates the database when you first store data in that database