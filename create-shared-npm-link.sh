#!/usr/bin/env sh
cd ./shared
npm link

cd ../native
npm link shared

