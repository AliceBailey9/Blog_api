#!/bin/bash


blogs="https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.py https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
# while IFS= read -r line
# do
#   echo "$line"
# done < "$input"

# if [ -s blog1 ]; then
#         # The file is not-empty.
#         echo "the file is not-empty"
# else
#         # The file is empty.
#         echo "the file is empty"
#         echo blog1
# fi

for b in $blogs
do
    if [ "${b##*.}" == "py" ] || [  "${b##*.}" == "exe" ]; then
        echo "This file format can not be uploaded"
    else
        echo "the file is good"
    fi
done

