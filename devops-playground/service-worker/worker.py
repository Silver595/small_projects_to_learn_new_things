import time
import os

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")


def run_once():
    print("Worker started, connecting to", REDIS_URL)
    return True


if __name__ == "__main__":
    while True:
        run_once()
        time.sleep(5)
