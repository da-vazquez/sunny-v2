from app import create_app, db

# Initialize the database
def init_db():
    app = create_app()
    with app.app_context():
        db.create_all()
        print("Database tables created")

if __name__ == '__main__':
    init_db()