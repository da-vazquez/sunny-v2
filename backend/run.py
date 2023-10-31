from app import create_app
from settings import secrets


app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=secrets.HOME_LAYER_PORT[secrets.ENV])