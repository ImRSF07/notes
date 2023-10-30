# hopla-careers-playground

## Objective

This repository serves multiple purposes:

- **Onboarding and Training:** It acts as a valuable resource for onboarding and training prospective web developers from HOPLA.Online in the `careers` project.

- **Technical Assessments:** It provides a platform for conducting technical assessments to evaluate candidates' skills.

- **Immersive Learning Environment:** The repository offers an immersive playground environment that replicates the project's tools and structure to facilitate a comprehensive learning experience.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager): You can download and install them from [nodejs.org](https://nodejs.org/).

- MySQL Database: You should have a MySQL database set up or access to one for the back-end.

- MySQL Workbench (Optional): To manage your MySQL databases more conveniently, you can use [MySQL Workbench](https://www.mysql.com/products/workbench/).

## Installation

To get started with this project, follow the steps below to set up your front-end and back-end environments.

### Front-End Setup

1. Navigate to the `front-end` directory.
2. Run `npm install` and wait for the installation to finish.
3. Run `npm run dev` to start your front-end.

### Back-End Setup

1. Navigate to the `back-end` directory.
2. Run `npm install --legacy-peer-deps` and wait for the installation to finish.
3. Using [MySQL Workbench](https://www.mysql.com/products/workbench/) or a similar tool of your choice, Create a new MySQL database called `hopla_notes`.
4. In your `config/config.js` file in the `back-end` directory, Make sure to provide the correct `port`, `user`, and `password`. This should be based on your local MySQL connection.
5. Run `npm run dev` to start your back-end.



