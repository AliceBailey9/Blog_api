#!/bin/bash


blogs="https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"


for b in $blogs
do
    if [ ${b##*.} != "txt" ] && [ ${b##*.} != "md" ] && [ ${b##*.} != "doc" ]; then
        echo "This file format can not be uploaded"
        continue 
    fi
    
    echo "this worked"
    # request header
    CONTENTLENGTH= curl -sI ${b} | grep -i Content-Length | awk '{print $2}'

    if [ "$CONTENTLENGTH" != "0" ]; then 
        cd ./Data && { curl -O ${b} ; cd -; }
    fi
done

for file in ./Data/*.*
do 

filename="${file%.*}"
mv -v "$file" "${filename}.txt"

done