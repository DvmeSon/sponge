# dev.py

# IMPORTANT - MUST BE ON THE TOP OF THE FILE
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Print email in console instead send real email
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Allow all hosts
ALLOWED_HOSTS = ['*']

# livereload
INSTALLED_APPS += (
    'livereload',
)

MIDDLEWARE += (
    'livereload.middleware.LiveReloadScript',
)
try:
    from .local import *
except ImportError:
    pass
