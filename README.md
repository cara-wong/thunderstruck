# Thunderstruck

## Setup
1. Ensure your dev enviornment is set up for both ios and android with the instructions [here](https://reactnative.dev/docs/environment-setup).
2. Use Node.js 10: To install - `nvm install 10`. To switch to version 10: `nvm use 10`.
3. Download the firebase ios plist file and place it in the `./ios` dir.
4. Download the firebase android json file and place it in the `./android/app` dir.
5. From the root directory run `./bin/setup.bash`

## Running the App

**IOS:**
Run `yarn ios` from the root dir

**Android:** Open the `android` dir in Android Studio the first time you clone the repo, sync with gradle and run from Android Studio. After this you can run `yarn android` from root dir in the terminal.
