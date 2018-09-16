release: python manage.py migrate --no-input
web: gunicorn config.wsgi:application
worker: celery worker --app=genomics_geek.taskapp --loglevel=info
