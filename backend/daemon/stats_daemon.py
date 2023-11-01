from settings import secrets
import schedule
import time

from external_apis.bdl import update_player_stats

schedule.every(secrets.DAEMON_TIMERS[secrets.ENV]).minutes.do(update_player_stats)

def start_daemon():
    print("player updated stats daemon started")
    while True:
        schedule.run_pending()
        time.sleep(1)


if __name__ == '__main__':
    start_daemon()