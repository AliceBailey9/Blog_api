#!/bin/bash


blogs="https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
# while IFS= read -r line
# do
#   echo "$line"
# done < "$input"



for b in $blogs
do
    if [ ${b##*.} != "txt" ] && [ ${b##*.} != "md" ] && [ ${b##*.} != "doc" ]; then
        echo "This file format can not be uploaded"
        continue 
    fi
        echo "this worked"
    
    CONTENTLENGTH= curl -sI ${b} | grep -i Content-Length | awk '{print $2}'

    if [ "$CONTENTLENGTH" != "0" ]; then 
        echo "hello"
    fi
    
    # curl ${b} > ./Temp/output.txt
    # check if output txt is empty 
    # curl to data folder 
done












        # if [ -s $CONTENT  ]; then
        # echo "not empty"
        # fi
# check if content is 0
# check how many files in data and save as file.txt

        # CONTENT=$(curl ${b})
        # echo $CONTENT
        # "cat $CONTENT"    