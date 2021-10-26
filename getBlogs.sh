#!/bin/bash


blogs="https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.py https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
# while IFS= read -r line
# do
#   echo "$line"
# done < "$input"



for b in $blogs
do
echo cat ${b}
    if [ "${b##*.}" == "py" ] || [  "${b##*.}" == "exe" ]; then
        echo "This file format can not be uploaded"
    else
        CONTENT=$(curl ${b})
        # echo $CONTENT
        # "cat $CONTENT"    
        if [ -s $CONTENT  ]; then
        echo "not empty"
        fi
    fi
done

# check if content is 0
# check how many files in data and save as file.txt

# if [ -s blog1 ]; then
#         .
#         echo "the file is not-empty"
# else
        
#         echo "the file is empty"
  
# fi