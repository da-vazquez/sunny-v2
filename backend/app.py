from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from settings import config


db = SQLAlchemy()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    db.init_app(app)
    ma.init_app(app)

    # Register blueprints
    from routes.player import player_bp
    app.register_blueprint(player_bp, url_prefix='/players')

    return app
