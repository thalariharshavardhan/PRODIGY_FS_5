# Social Media Application

This application is a basic social media platform built using Flask. Users can create profiles, share posts, like posts, and comment on others' posts. It provides a foundational backend structure that can be extended to include more advanced features like real-time notifications, tagging, and multimedia uploads.

## Features

- **User Registration**: Users can register with a unique username, email, and password.
- **Post Creation**: Users can create posts with text content and optional image URLs.
- **Likes**: Users can like posts to show appreciation.
- **Comments**: Users can comment on posts for interaction.
- **Feed**: A chronological feed displaying all posts along with their likes and comments.

## Technologies Used

- **Backend Framework**: Flask
- **Database**: SQLite
- **Languages**: Python

## API Endpoints

### User Endpoints

1. **Register User**
   - **Endpoint**: `/register`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "username": "example_user",
       "email": "user@example.com",
       "password": "securepassword"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User registered successfully"
     }
     ```

### Post Endpoints

2. **Create Post**
   - **Endpoint**: `/create_post`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "user_id": 1,
       "content": "This is a post",
       "image_url": "http://example.com/image.jpg"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Post created successfully"
     }
     ```

3. **Get Feed**
   - **Endpoint**: `/feed`
   - **Method**: GET
   - **Response**:
     ```json
     [
       {
         "post_id": 1,
         "user_id": 1,
         "content": "This is a post",
         "image_url": "http://example.com/image.jpg",
         "created_at": "2025-01-28T12:00:00",
         "likes": 5,
         "comments": [
           {
             "user_id": 2,
             "content": "Nice post!",
             "created_at": "2025-01-28T12:05:00"
           }
         ]
       }
     ]
     ```

### Interaction Endpoints

4. **Like Post**
   - **Endpoint**: `/like_post`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "user_id": 1,
       "post_id": 1
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Post liked successfully"
     }
     ```

5. **Comment on Post**
   - **Endpoint**: `/comment_post`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "user_id": 1,
       "post_id": 1,
       "content": "Great post!"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Comment added successfully"
     }
     ```

## Getting Started

### Prerequisites

- Python 3.7 or later
- Flask
- Flask-SQLAlchemy

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Initialize the database:
   ```bash
   python
   >>> from app import db
   >>> db.create_all()
   >>> exit()
   ```

4. Run the application:
   ```bash
   flask run
   ```

5. Access the application at `http://127.0.0.1:5000`.

## Future Enhancements

- Real-time notifications
- User profile pages
- Image/video uploads
- Post tagging and hashtags
- Search functionality

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

For any questions or contributions, feel free to open an issue or submit a pull request!

