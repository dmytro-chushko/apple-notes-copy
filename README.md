# Note manager

Application allows users to create, edit, and delete notes efficiently. Each
note displays the creation timestamp, helping users track their entries. The app
features a powerful search function that enables users to find notes by their
titles quickly. Additionally, it offers a seamless switch between light and dark
themes, ensuring a comfortable user experience in any lighting condition. The
application is fully responsive, providing a correct display on devices with
different screen sizes, including both desktops and mobile devices.

## Installation:

### Requirenments:

Make sure you have a version of [Node.js](https://nodejs.org/en/download) not
lower than 16 version installed on your computer. Download and install if it is
necessary.

### Clone the repo from comand line:

```bash
$ git clone https://github.com/dmytro-chushko/apple-notes-copy.git
$ cd apple-notes-copy
```

### Install packeges:

```bash
$ npm i
```

## Configuration of the QuintaDB service and `.env` file:

### QuintaDB:

Go to the https://quintadb.com.ua/.

1. You should sign up and create new application and form (fields: title,
   content, date).
2. Create your API KEY (see the
   [documentation](https://quintadb.com.ua/api/index))
3. By learning the documentation, you should get the following keys (you may use
   [Postman](https://www.postman.com/) for making required queries):

   - APP_ID;
   - ENTITY_ID;
   - Keys wich are the ids of each field of the form; (use
     [documentation](https://quintadb.com.ua/api/index))

### `.env` file:

Create `.env` file in the root directory and set the next variables:

- REACT_APP_BASE_URL=https://quintadb.com.ua
- REACT_APP_APP_ID = { APP_ID }
- REACT_APP_ENTITY_ID = { ENTITY_ID }
- REACT_APP_API_KEY = { API_KEY }
- REACT_APP_NOTE_TITLE = { id of "title" field }
- REACT_APP_NOTE_CONTENT = { id of "content" field }
- REACT_APP_NOTE_DATE = { id of "date" field }

## To run the project:

```bash
$ npm start
```

</br>

\__Navigate to the address in your browser http://localhost:3000. This page will
automatically reload after saving changes to project files._

## Technologies

- **Framework**: React SPA ([Create React App](https://create-react-app.dev/))
- **State**: [Context](https://react.dev/learn/passing-data-deeply-with-context)
- **Queries**: [Axios](https://axios-http.com/docs/intro)
- **UI**: [Styled-Components](https://styled-components.com/)
