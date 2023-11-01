from flask import request, Blueprint
from app import db
from models.player import Player
from schemas.player import player_schema, players_schema
from resources.player import PlayerResource, PlayerListResource

player_bp = Blueprint('players', __name__)

# Map route functions to resource methods
player_list_resource = PlayerListResource.as_view('player_list_resource')
player_resource = PlayerResource.as_view('player_resource')

# Create a Player
player_bp.add_url_rule('/add_player', view_func=player_list_resource, methods=['POST'])

# Get all Players
player_bp.add_url_rule('/all_players', view_func=player_list_resource, methods=['GET'])

# Get a single Player by ID
player_bp.add_url_rule('/player/<int:id>', view_func=player_resource, methods=['GET'])

# Update a Player by ID
player_bp.add_url_rule('/player/<int:id>', view_func=player_resource, methods=['PUT'])

# Delete a Player by ID
player_bp.add_url_rule('/player/<int:id>', view_func=player_resource, methods=['DELETE'])
