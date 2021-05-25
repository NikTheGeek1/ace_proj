from controllers.user_signup import user_signup_blueprint
from controllers.user_login import user_login_blueprint
from controllers.jobs import jobs_blueprint

from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# setting up the flask application
app = Flask(__name__)
app.config.update(
    SECRET_KEY="secret_key",
    SESSION_COOKIE_HTTPONLY=True,
    REMEMBER_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    JWT_SECRET_KEY='jwt-secret-string'
)
app.register_blueprint(user_signup_blueprint)
app.register_blueprint(user_login_blueprint)
app.register_blueprint(jobs_blueprint)
jwt = JWTManager(app)

cors = CORS(
    app,
    resources={
        r"/api/*": {
            "origins": "http://localhost:3000",
        }
    },
    expose_headers=["Content-Type", "X-CSRFToken"],
    supports_credentials=True,
)

if __name__ == "__main__":
    app.run(debug=True)
