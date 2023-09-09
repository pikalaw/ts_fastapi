start:
	uvicorn server:app --reload --port 8001

check_type:
	mypy --strict --exclude /venv/ server.py

unittest:
	python3 -m unittest discover

test: check_type unittest;

activate-env:
	. venv/bin/activate

deactivate-env:
	deactivate

install-env: install-env-client install-env-server update-env-python-path
	echo 'Install done!'

install-env-client:
	npm i

install-env-server:
	python3 -m venv venv
	. venv/bin/activate
	python3 -m pip install -r requirements.txt

save-env:
	python3 -m pip freeze > requirements.txt

update-env: update-env-client update-env-server
	echo 'Update done!'

update-env-client:
	npx ncu --upgrade
  npm i

update-env-python-path:
  python_path=$(which python3) \
  sed -i "s/python_path/${python_path}/g" .vscode/settings.json

update-env-server:
	python3 -m pip install -r requirements.txt --upgrade

clean:
	rm -rf __pycache__
