#!/bin/bash

# Check if the .env file exists in the current directory
if [ -f .env ]; then
  # Read the .env file line by line and export each variable
  while IFS= read -r line; do
    export "$line"
  done < .env
  echo "Environment variables from .env file have been exported."
else
  echo ".env file not found in the current directory."
fi