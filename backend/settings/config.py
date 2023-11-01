import os
from settings import secrets

SQLALCHEMY_DATABASE_URI = f"postgresql://{secrets.POSTGRES_DATABASE['USERNAME']}:{secrets.POSTGRES_DATABASE['PASSWORD']}@localhost:5432/players"
SECRET_KEY = secrets.POSTGRES_DATABASE['SECRET']
