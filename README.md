# Job Finder

Welcome to the **Job Finder** repository, a job posting site developed as part of the JavaScript course taught by Professor Matheus Battisti.

## Technologies Used

- **JavaScript**: Main language for front-end and back-end development.
- **Node.js**: Execution environment for JavaScript on the server.
- **npm**: Package manager for installing dependencies.
- **Express**: Web framework for creating routes and APIs.
- **Handlebars.js**: Templating engine for rendering dynamic HTML pages.
- **Sequelize**: ORM (Object-Relational Mapping) for database manipulation, making interactions with the database more intuitive.
- **SQLite**: Lightweight and self-contained database engine. It stores data in a single `.db` file, making it ideal for small- to medium-sized projects that don't require a server-based database.
- **Postman**: Tool for testing and documenting APIs.

## Features

- Registration of job vacancies.
- Listing and searching for available vacancies.
- Applying for vacancies by sending contact details.

## How SQLite Is Used

SQLite is utilized as the database engine for this project. It is a file-based relational database that requires minimal configuration. The data is stored in a `.db` file, located in the `.db/app.db` path in this repository. Sequelize is used to interact with SQLite, abstracting raw SQL queries into more readable JavaScript code.

SQLite was chosen for this project because it is easy to set up and is well-suited for development and testing environments. For larger-scale deployments, a more robust database like PostgreSQL or MySQL could be used with Sequelize as well.

## Project Result

https://github.com/user-attachments/assets/693fe648-c0fa-4882-ac2c-77501f82090a

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute, open issues, or suggest improvements! 😄
