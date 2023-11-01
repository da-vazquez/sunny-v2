import requests
from settings import secrets
from models.player import Player
from app import create_app, db
import schedule
import time


app = create_app()
api_url = secrets.BALL_DONT_LIE_EXTERNAL_URL
phoenix_roster = secrets.PHOENIX_ROSTER

current_player_data = [
    {'name': 'Devin Booker', 'api_id': 57, 'age': 27, 'position': 'sg', 'number': 1}, 
    {'name': 'Udoka Azubuike', 'api_id': 3547095, 'age': 24, 'position': 'c', 'number': 27}, 
    {'name': 'Keita Bates-Diop', 'api_id': 32, 'age': 27, 'position': 'sf', 'number': 21}, 
    {'name': 'Bradley Beal', 'api_id': 37, 'age': 30, 'position': 'sg', 'number': 3}, 
    {'name': 'Bol Bol', 'api_id': 666451, 'age': 23, 'position': 'c', 'number': 11}, 
    {'name': 'Kevin Durant', 'api_id': 140, 'age': 35, 'position': 'pf', 'number': 35}, 
    {'name': 'Drew Eubanks', 'api_id': 147, 'age': 26, 'position': 'pf', 'number': 14}, 
    {'name': 'Jordan Goodwin', 'api_id': 18678058, 'age': 25, 'position': 'g', 'number': 0}, 
    {'name': 'Eric Gordon', 'api_id': 178, 'age': 34, 'position': 'sg', 'number': 23}, 
    {'name': 'Damion Lee', 'api_id': 272, 'age': 31, 'position': 'sg', 'number': 10}, 
    {'name': 'Saben Lee', 'api_id': 3547298, 'age': 24, 'position': 'g', 'number': 24}, 
    {'name': 'Nassir Little', 'api_id': 666729, 'age': 23, 'position': 'sf', 'number': 23}, 
    {'name': 'Chimezie Metu', 'api_id': 314, 'age': 26, 'position': 'pf', 'number': 4}, 
    {'name': 'Jusuf Nurkic', 'api_id': 349, 'age': 29, 'position': 'c', 'number': 20}, 
    {'name': 'Josh Okogie', 'api_id': 356, 'age': 25, 'position': 'sf', 'number': 2}, 
    {'name': 'Yuta Watanabe', 'api_id': 470, 'age': 29, 'position': 'sf', 'number': 18},
]



def get_list_current_players():
    players = []
    for name in phoenix_roster:
        players.append(name)
    
    return players


def get_all_player_ids():
    player_dict = {}
    
    all_players = get_list_current_players()

    for player in all_players:
    
        response = requests.get(f"{api_url}/players?search={player}")

        if response.status_code == 200:
            player = response.json()

            for idx,data in enumerate(player["data"]):
                if data["team"]["id"] == 24:
                    player_first_name = data["first_name"]
                    player_last_name = data["last_name"]
                    player_id = data["id"]

                    player_dict[player_first_name + " " + player_last_name] = player_id
            
        else:
            print(f"Request failed with status code {response.status_code}")

    return player_dict


def get_all_player_stats_bdl(api_id):
    stats = {}
    response = requests.get(f"{api_url}/season_averages?player_ids%5B%5D={api_id}&seasons%5B%5D=2023&seasons%5B%5D=2024")

    if response.status_code == 200:
        player = response.json()

        for idx,data in enumerate(player["data"]):
            stats = {
                "minutes_played": data['min'],
                "points_per_game": data['pts'],
                "assists_per_game": data['ast'],
                "steals_per_game": data['stl'],
                "rebounds_per_game": data['reb'],
                "field_goal_percent": data['fg_pct'] * 100,
                "three_point_percent": data['fg3_pct'] * 100,
                "free_throw_percent": data['ft_pct'] * 100,
                "minutes_played": data['min'],
                "plus_minus": 0.0,
            }
        
    else:
        print(f"Request failed with status code {response.status_code}")


    return stats


def get_all_player_stats_db():
    player_stats = []
    with app.app_context():
        players = Player.query.all()
        
        for player in players:
            player_data = {
                'id': player.id,
                'name': player.name,
                'api_id': player.api_id,
            }

            player_stats.append(player_data)
            print("player stats found!", player_data)

    return player_stats
        

def update_player_stats():
    start_time = time.time() 
    player_data = []

    with app.app_context():
        players = Player.query.all()
        
        for player in players:
            updated_data = get_all_player_stats_bdl(player.api_id)
            for key, value in updated_data.items(): # loop through keys, values and set object attributes
                setattr(player, key, value)

            db.session.commit()
    
            
    end_time = time.time()
    execution_time = end_time - start_time
    print({"message": "player stats successfully updated", "duration": f"{execution_time:.2f} seconds"})


def add_all_players():
    for player in current_player_data:
        new_player = Player(
            api_id=player["api_id"],
            name=player["name"],
            age=player["age"], 
            position=player['position'], 
            number=player['number'], 
            points_per_game=0.0, 
            assists_per_game=0.0, 
            steals_per_game=0.0, 
            rebounds_per_game=0.0, 
            field_goal_percent=0.0, 
            three_point_percent=0.0, 
            free_throw_percent=0.0,
            minutes_played=0.0, 
            plus_minus=0.0
        )

        with app.app_context():
            db.session.add(new_player)
            db.session.commit()
            print(f"new player added: {player['name']}")



if __name__ == '__main__':
    # print(get_list_current_players())
    # print(get_all_player_ids())
    # print(add_all_players())
    # print(get_all_player_stats_db())
    # print(update_player_stats())
    pass