# Express with PostgreSQL Example

This is a simple example demonstrating how to use PostgreSQL with Express in a Node.js application.

## Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- PostgreSQL driver (https://www.postgresql.org/)

## Getting Started

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/GiorgiMakh/postgresql-express.git
   ```

2. Install dependencies by running:

   ```bash
   cd postgresql-express
   npm install
   ```

3. Set up configuration:

   - Configure the PORT in the `.env` file. Replace `3001` with your free PORT.
   - Configure the Database secrets in the `.env` file. Replace DBUSER, DBHOST, DBDATABASE, DBPASSWORD, DBPORT with your keys or it will stay default.

4. Create simple datas with seeder:
   
   Run seeder with:

   ```bash
   npm seed
   ```

Run the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3001`.

## Testing

This repository includes test cases using Jest for unit testing and integration testing.

To run the tests, use the following command:

```bash
npm test
```

## API Endpoints

The server exposes the following API endpoints:

- `GET /api/users`: Get all users.
- `POST /api/users`: Add new user. Required fields: `name` and `lastname`.

## Customization

You can customize the server to add more routes, modify the data models, or implement additional features according to your specific requirements. Feel free to extend the functionality to suit your project needs.

## Contributing

If you find any issues with the server or want to contribute to its improvement, please submit a pull request. We welcome contributions from the community to make this server even better.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using this backend server template! If you have any questions or need further assistance, feel free to reach out to us or open an issue on this repository. Happy coding!
