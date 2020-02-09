d=$(date +%Y%m%d%H%M%S)
echo $d
zip -r build.zip build
scp build.zip max@klishevich.ru:"/home/max/test/"
ssh max@klishevich.ru "cd /home/max/test/ && unzip build.zip && mv html old_html$d && mv build html && rm build.zip"
rm build.zip
