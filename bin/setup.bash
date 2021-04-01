#!/bin/bash
echo "Checking node version:"
node --version
if [[ $? != 0 ]]; then
    echo "Node not installed!"
    exit 1
else
	read -r -p "Is this node version okay? [Y/n] " confirm
	if [[ ! $confirm =~ ^[Yy]$ ]]; then	
		echo "exiting."
		exit 0
	fi
fi
yarn install # check if yarn install works
cd ios || exit 1
pod install --repo-update
cd ..
echo "Node modules and pods successfully installed."