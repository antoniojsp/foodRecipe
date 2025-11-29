#!/bin/bash

message=$1   # grabs first argument

git add .
git commit -m $message
git push

