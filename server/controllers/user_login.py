from flask import Blueprint, request
from flask_jwt_extended import create_access_token
from repositories.users_repository import UsersRepo

user_login_blueprint = Blueprint("user_login", __name__)

@user_login_blueprint.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    user = UsersRepo.get_user_by_username(username)
    if user and user.is_password_valid(password, user.password):
        access_token = create_access_token(identity = username)
        return {
            'success': True,
            'message': 'User {} was created'.format(username),
            'username': username,
            'access_token': access_token
            }
    return {
        'success': False,
        'message': 'Wrong credentials'
    }
