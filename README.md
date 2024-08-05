## Project

This project is a resource containing brief information about the principle of operation of the OAuth2.0 protocol in two languages, 
which also contains a test, the results of which are displayed on a separate page. 
Access to results page is limited by authorization.

Technologies used:
TypeScript, Material Ui, React, Node js, Express.js, MySQL


## Setup Instructions

### Database Setup
1. Ensure Docker is installed on your system.
2. From the project's root directory, execute the following commands:

docker rm -f mysql
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456789 -d -p 3306:3306 -v ${PWD}/Data:/var/lib/mysql mysql:8.0.36 --default-authentication-plugin=mysql_native_password

### Backend Setup
1. Navigate to the Backend directory: `cd Backend`
2. Install dependencies: `npm i`
3. Start the server: `npm run dev`

### Frontend Setup
1. Navigate to the Frontend directory: `cd Frontend`
2. Install dependencies: `npm i`
3. Run the application: `npm run dev`
4. The application will be available at [http://localhost:3005].



## Results page login and pssword
username: user123
password: 5566
