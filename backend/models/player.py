from app import db

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    api_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer)
    position = db.Column(db.Text)
    number = db.Column(db.Integer)
    points_per_game = db.Column(db.Float)
    assists_per_game = db.Column(db.Float)
    steals_per_game = db.Column(db.Float)
    rebounds_per_game = db.Column(db.Float)
    field_goal_percent = db.Column(db.Float)
    three_point_percent = db.Column(db.Float)
    free_throw_percent = db.Column(db.Float)
    minutes_played = db.Column(db.String)
    plus_minus = db.Column(db.Float)

    def __init__(
        self,
        api_id, 
        name, 
        age,
        position,
        number,
        points_per_game,
        assists_per_game,
        steals_per_game,
        rebounds_per_game,
        field_goal_percent,
        three_point_percent,
        free_throw_percent,
        minutes_played,
        plus_minus,
        ):

        self.api_id = api_id
        self.name = name
        self.age = age
        self.position = position
        self.number = number
        self.points_per_game = points_per_game
        self.assists_per_game = assists_per_game
        self.steals_per_game = steals_per_game
        self.rebounds_per_game = rebounds_per_game
        self.field_goal_percent = field_goal_percent
        self.three_point_percent = three_point_percent
        self.free_throw_percent = free_throw_percent
        self.minutes_played = minutes_played
        self.plus_minus = plus_minus