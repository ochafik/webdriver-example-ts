#!/bin/bash
set -eu

if [[ ! -x $(npm bin)/webdriver-manager ]]; then
  npm i
fi
$(npm bin)/webdriver-manager update
$(npm bin)/webdriver-manager start

