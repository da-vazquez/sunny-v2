import os

ENV = os.getenv("ENV")

DAEMON_TIMERS = {
    "LOCAL": 1,
    "DEV": 1440,
}

HOME_LAYER_PORT = {
    "LOCAL": os.getenv("HOME_INTERNAL_LAYER_PORT_LOCAL"),
    "DEV": os.getenv("HOME_INTERNAL_LAYER_PORT_DEV"),
}

POSTGRES_DATABASE = {
    "USERNAME": os.getenv("PG_DATABASE_USERNAME"),
    "PASSWORD": os.getenv("PG_DATABASE_PASSWORD"),
    "SECRET": os.getenv("PG_DATABASE_SECRET"),
}

PHOENIX_ROSTER = [
    "devin booker",
    "udoka azubuike",
    "keita bates-diop",
    "bradley beal",
    "bol bol",
    "kevin durant",
    "drew eubanks",
    "jordan goodwin",
    "eric gordon",
    "damion lee",
    "saben lee",
    "nassir little",
    "chimezie metu",
    "jusuf nurkic",
    "josh okogie",
    "yuta watanabe",
]

BALL_DONT_LIE_EXTERNAL_URL = 'https://www.balldontlie.io/api/v1'