#!/bin/sh

NOW=`date '+%s'`
DATE=`date -r $NOW +%Y%m%d`
DATETIME=`date -r $NOW +%Y-%m-%dT%H:%M:%S`
DIR="src/pages/$DATE"
FILE="$DIR/index.md"

echo "Today is $DATE"

if [ -e $DIR ]; then
  echo "$DIR is already exists!!"
  exit 1
fi

mkdir $DIR
touch $FILE

echo "---" >> $FILE
echo "title: \"\"" >> $FILE
echo "date: \"$DATETIME\"" >> $FILE
echo "category: \"\"" >> $FILE
echo "tags: []" >> $FILE
echo "---" >> $FILE

echo "Page is created. $FILE "
