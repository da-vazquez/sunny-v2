from app import ma

class PlayerSchema(ma.Schema):
    class Meta:
        fields = (
            'id', 
            'name', 
            'age', 
            'position', 
            'number', 
            'points_per_game', 
            'assists_per_game',
            'steals_per_game',
            'rebounds_per_game',
            'field_goal_percent',
            'three_point_percent',
            'free_throw_percent',
            'minutes_played',
            'plus_minus'
            )


player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)