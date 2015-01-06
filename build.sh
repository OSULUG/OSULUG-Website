#! /bin/bash

# Are we root? Fail if so
[ $UID -eq 0 ] && echo "Please don't run this script as root...terminating" && exit 1

# Update repo, overwriting local changes
git fetch --all
git reset --hard origin/master

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
wok -v

# Disable venv
deactivate

