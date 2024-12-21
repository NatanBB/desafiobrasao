# <img src="./web/public/favicon.png" height=25 alt="logo brasao sistemas"> Dynamic Fields Project | Brasão Challenge

### :blue_heart: This project is a simple application of dynamic fields, developed with Node, React and Typescript
![alt text](https://i.imgur.com/ZqkHjAo.png)

## Features

**Fields**:
Create dynamic fields with the following types:
- Text
- Number
- Date
- Boolean

**Fillings**:
Filling in the fields that were created by the user

## Technologies Used

- **Backend**:
  - Node.js + Typescript
  - Express + Cors
  - TypeORM
  - Zod

- **Frontend**:
  - React
  - TypeScript
  - Axios for HTTP requests
  - Tailwind CSS
  - Zod
  - Jest + Testing Library
    
- **Database**:
  - MySQL

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NatanBB/desafiobrasao.git
   cd desafiobrasao
   ```
2. **Setup Backend:**
   ```bash
   cd server
   npm install
   npm run dev
   ```
   
4. **Setup Frontend:**
   
   ```bash
   cd web
   npm install
   npm run dev
   ```

## Database

The database will be created automatically after running the server.

## Usage

### Create Fields:
- Type the field name.
- Select field type.
- Mark if is required.
- Add new field.

### Fill Created Fields:
- Select any created field.
- Type if the filling is required.
- Add some content
- Save!

## Contributing

Feel free to contribute improvements to this project! If you have suggestions, open an issue or submit a pull request.
