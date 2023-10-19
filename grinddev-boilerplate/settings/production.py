# production.py

# IMPORTANT - MUST BE ON THE TOP OF THE FILE
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Don't worry it's not actually real site secret key :)
SECRET_KEY = 'nr329rj239e193i012-3ke102mje19nh21983j103j102'

# Allow all hosts
ALLOWED_HOSTS = ['*']

try:
    from .local import *
except ImportError:
    pass
