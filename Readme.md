<h3>Project setup steps:</h3>

- create venv <br> ```python -m venv [envname]```
- change .gitignore file to ignore new .env file
- run venv
- install requirements <br> ```pip install -r requirements.txt```
- install ```pip install pip-upgrader``` and run ```pip-upgrade```
- change project name using <br> ```python manage.py renameproject grinddev-boilerplate [newname]```
- change ```wsgi.py``` to use production settings
- install Tailwindcss and Flowbite packages <br>
Tailwindcss:
```npm install -D tailwindcss```
```npx tailwindcss init```<br>
Flowbite:
```npm install flowbite```


Compile the Tailwind CSS

```
npx tailwindcss -i ./website/static/css/src.css -o ./website/static/css/main.css --watch
```