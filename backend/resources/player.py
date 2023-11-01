from flask_restful import Resource, reqparse, abort
from app import db
from models.player import Player
from schemas.player import player_schema, players_schema


class PlayerResource(Resource):
    def get(self, id):
        # Get a single player by ID
        player = Player.query.get(id)
        if not player:
            abort(404, message="Player not found")
        return player_schema.jsonify(player)

    def put(self, id):
        # Update a player by ID
        player = Player.query.get(id)
        if not player:
            abort(404, message="Player not found")

        parser = reqparse.RequestParser()
        parser.add_argument('api_id', type=int, required=True)
        parser.add_argument('name', type=str)
        parser.add_argument('age', type=int)
        parser.add_argument('position', type=str)
        parser.add_argument('number', type=int)
        parser.add_argument('points_per_game', type=int)
        parser.add_argument('assists_per_game', type=int)
        parser.add_argument('steals_per_game', type=int)
        parser.add_argument('rebounds_per_game', type=int)
        parser.add_argument('field_goal_percent', type=int)
        parser.add_argument('three_point_percent', type=int)
        parser.add_argument('free_throw_percent', type=int)
        parser.add_argument('minutes_played', type=int)
        parser.add_argument('plus_minus', type=int)

        args = parser.parse_args()

        player.api_id = args['api_id']
        player.name = args['name']
        player.age = args['age']
        player.position = args['position']
        player.number = args['number']
        player.points_per_game = args['points_per_game']
        player.assists_per_game = args['assists_per_game']
        player.steals_per_game = args['steals_per_game']
        player.rebounds_per_game = args['rebounds_per_game']
        player.field_goal_percent = args['field_goal_percent']
        player.three_point_percent = args['three_point_percent']
        player.free_throw_percent = args['free_throw_percent']
        player.minutes_played = args['minutes_played']
        player.plus_minus = args['plus_minus']

        db.session.commit()
        return player_schema.jsonify(player)

    def delete(self, id):
        # Delete a player by ID
        player = Player.query.get(id)

        if not player:
            abort(404, message="Player not found")

        db.session.delete(player)
        db.session.commit()
        return {"message": f"player successfully deleted"}, 200

class PlayerListResource(Resource):
    def get(self):
        # Get all players
        players = Player.query.all()
        return players_schema.jsonify(players)

    def post(self):
        # Create a new player
        parser = reqparse.RequestParser()
        parser.add_argument('api_id', type=int, required=True)
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('age', type=int)
        parser.add_argument('position', type=str)
        parser.add_argument('number', type=int)
        parser.add_argument('points_per_game', type=float)
        parser.add_argument('assists_per_game', type=float)
        parser.add_argument('steals_per_game', type=float)
        parser.add_argument('rebounds_per_game', type=float)
        parser.add_argument('field_goal_percent', type=float)
        parser.add_argument('three_point_percent', type=float)
        parser.add_argument('free_throw_percent', type=float)
        parser.add_argument('minutes_played', type=float)
        parser.add_argument('plus_minus', type=float)

        args = parser.parse_args()

        existing_player = Player.query.filter_by(name=args['name']).first()
        if existing_player:
            return {"message": "Player with the same name already exists."}, 409  # 409 Conflict

        new_player = Player(
            api_id=args['api_id'],
            name=args['name'],
            age=args['age'],
            position=args['position'],
            number=args['number'],
            points_per_game=args['points_per_game'],
            assists_per_game=args['assists_per_game'],
            steals_per_game=args['steals_per_game'],
            rebounds_per_game=args['rebounds_per_game'],
            field_goal_percent=args['field_goal_percent'],
            three_point_percent=args['three_point_percent'],
            free_throw_percent=args['free_throw_percent'],
            minutes_played=args['minutes_played'],
            plus_minus=args['plus_minus'],
        )

        db.session.add(new_player)
        db.session.commit()
        print({"message": "new player created!", "data": new_player}), 201 # Creates resource


if __name__ == '__main__':
    pass