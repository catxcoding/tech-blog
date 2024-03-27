# 14 Model-View-Controller (MVC): Tech Blog

# Tech Blog

A dynamic, CMS-style blog platform built with the MVC (Model-View-Controller) architecture, designed for developers to share and discuss the latest in technology, coding practices, and development challenges.

## About The Project

Tech Blog aims to create a community where developers can publish their insights, share developments, and engage in discussions through comments on each other's posts. This platform is built from the ground up with a focus on simplicity, ease of use, and providing a seamless user experience for both content creators and readers.

## Deployment

This application is deployed on Heroku. You can view the live application at [Tech Blog Live](https://git.heroku.com/tech-blog-cat.git).

### Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Handlebars.js](https://handlebarsjs.com/) (via [express-handlebars](https://www.npmjs.com/package/express-handlebars))
- [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
- [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) for session management

### Features

- **CMS-style Blog**: Users can create, update, and delete their blog posts.
- **User Authentication**: Secure login mechanism to manage user sessions.
- **Comment System**: Readers can comment on posts, fostering a community discussion.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/catxcoding/tech-blog.git

   ```

2. Install NPM packages

   ```sh
   `npm install`

   ```

3. Create a .env file in the root directory with the following configurations:
   ```sh
   `DB_NAME='techblog_db'
    DB_USER='your_database_username'
    DB_PASS='your_database_password'
    DB_HOST='localhost'
    SESSION_SECRET='your_session_secret'
   ```

4. Run schema.sql in MySQLWorkbench to create the database

5. Start Server
    ```sh
    `npm start`


## License

Distributed under the MIT License. See `LICENSE` for more information.


## Resources

- [Bootstrap](https://getbootstrap.com)
- [jQuery](https://jquery.com)
- StackOverflow
- MDN Docs

