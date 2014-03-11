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

# Delete old output. If files were removed by a commit, they should 
# no longer be available on the site.
rm -rf output/

# Rebuild static content
wok 

# Disable venv
deactivate

