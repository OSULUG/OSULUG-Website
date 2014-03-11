#! /bin/bash

# Update repo
git pull --ff-only origin master

# Enable venv
if [ ! -d venv ]; then
    virtualenv venv
fi
source venv/bin/activate

# Update packages
pip install -r requirements.txt

# Rebuild static content
wok 

# Disable venv
deactivate

