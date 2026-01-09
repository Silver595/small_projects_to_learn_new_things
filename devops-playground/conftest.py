import os
import sys

ROOT = os.path.dirname(__file__)
# Ensure test imports can find the service packages when running from repo root
sys.path.insert(0, os.path.join(ROOT, "service-api"))
sys.path.insert(0, os.path.join(ROOT, "service-worker"))
