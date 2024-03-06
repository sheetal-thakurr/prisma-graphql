Create project

* node version 16.20.2
* npm init 
* npm install express dotenv

To run project 
* npm run dev
* npm run start 

Adding Graphql with apollo/server

* npm install @apollo/server graphql 
* graphql server http://localhost:4000/graphql

---------------------------------------------


Adding prisma with postgres db

* npm install prisma @prisma/client
* Set the database url in the .env file in format 
    -> DATABASE_URL="postgres://<username>:<password>@localhost:5432/<db-name>"
* npx prisma migrate dev

    -> When you want to use `prisma migrate dev` or `prisma migrate reset` without seeding, you can pass the --skip-seed flag.
    -> Database seeding happens in two ways with Prisma: manually with prisma db seed and automatically in prisma migrate dev and prisma migrate reset.