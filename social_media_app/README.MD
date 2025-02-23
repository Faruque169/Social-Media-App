# Social Media App (Django)

## Overview
This is a simple social media web application built with Django for the backend and HTML, CSS, and JavaScript for the frontend. Users can register, log in, create posts, and view posts from other users.

## Features
- User registration and authentication
- Global feed displaying all posts
- User profile page showing only the logged-in user's posts
- Create, edit, and delete posts
- Simple navigation bar and footer
- Message notifications using Django messages framework

## Technology Stack
- **Backend:** Django (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (default Django database)
- **Version Control:** Git (GitHub)

## Installation & Setup
### Prerequisites
Ensure you have Python and virtual environment tools installed.

### Step 1: Clone the Repository
```sh
git clone <repository-url>
cd social_media_app
```

### Step 2: Create and Activate Virtual Environment
```sh
pipenv shell

```

### Step 3: Install Dependencies
```sh

```

### Step 4: Apply Migrations
```sh
python manage.py migrate
```

### Step 5: Create a Superuser (Optional for Admin Access)
```sh
python manage.py createsuperuser
```

### Step 6: Run the Development Server
```sh
python manage.py runserver
```
Then, open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

## Usage
- **Register/Login**: Users can create an account and log in.
- **Create a Post**: Users can create posts with text and optional images.
- **Edit/Delete Posts**: Only the owner of a post can edit or delete it.
- **View Posts**: All users can view the global feed of posts.

```

## ER Diagram
![ER Diagram](er_diagram.png) *(Include ER diagram in the repository)*

## Testing Credentials
| Username | Password |
|----------|---------|
| testuser | testpass123 |
| admin    | admin |

## Contribution
Feel free to submit issues or pull requests if you'd like to contribute!

## License
This project is open-source under the MIT License.

