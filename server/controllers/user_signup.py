from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from models.user import User
from repositories.users_repository import UsersRepo

user_signup_blueprint = Blueprint("user_signup", __name__)

@user_signup_blueprint.route("/api/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if UsersRepo.get_user_by_username(username):
        return jsonify({'message': f'User {username} already exists'})
    new_user = User(username, password)
    new_user.hash_password()
    user = UsersRepo.save_user(new_user)
    if user:
        try:
            access_token = create_access_token(identity = username)
            return {
                'success': True,
                'message': f'User {username} was created',
                'username': username,
                'access_token': access_token
                }
        except Exception:
            return {'success': False, 'message': 'Something went wrong'}, 500
    else:
        return {'success': False, 'message': 'Something went wrong'}, 500

@user_signup_blueprint.route("/api/secret", methods=["GET"])
@jwt_required()
def secret():
    return {'message': True}
