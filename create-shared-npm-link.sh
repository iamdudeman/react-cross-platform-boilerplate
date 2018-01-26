#!/usr/bin/env sh
cd ./shared
npm link

cd ../native
npm link shared

cd ../desktop
npm link shared
