#!/bin/bash
set -eu

export SELENIUM_BROWSER=browser
export SELENIUM_REMOTE_URL="http://localhost:4444/wd/hub"

tsc
node build/main.js