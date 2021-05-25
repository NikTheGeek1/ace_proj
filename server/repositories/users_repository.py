import json
from models.user import User

class UsersRepo:

    @staticmethod
    def does_username_exist(users, new_user):
        for existing_user in users:
            if existing_user.username == new_user.username:
                return True
        return False

    @staticmethod
    def save_user(user):
        users = UsersRepo.fetch_all_users()
        if UsersRepo.does_username_exist(users, user):
            return False
        user_id = len(users)
        user.id = user_id
        users.append(user)
        with open('db/users-data.json', 'w') as f:
            json.dump({"users": [user.object() for user in users]}, f, ensure_ascii=False, indent=4)
        return user
     
    @staticmethod
    def fetch_all_users():
        users = []
        try:
            with open('db/users-data.json', 'rb') as f:
                data = json.load(f)
                for user in data['users']:
                    users.append(User(user["username"], user['password'], user['id']))
        except FileNotFoundError:
            pass
        return users

    @staticmethod
    def get_user_by_username(username):
        fetched_user = None
        users = UsersRepo.fetch_all_users()
        for user in users:
            if user.username == username:
                fetched_user = user
        return fetched_user



    