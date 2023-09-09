start:
	uvicorn server:app --reload --port 8001

check_type:
	mypy --strict --exclude /venv/ server.py

unittest:
	python3 -m unittest discover

test: check_type unittest;

activate-env:
	source venv/bin/activate

deactivate-env:
	deactivate

save-env:
	python3 -m pip freeze > requirements.txt

restore-env:
	python3 -m pip install -r requirements.txt

update-env:
	python3 -m pip install -r requirements.txt --upgrade

clean:
	rm -rf __pycache__
