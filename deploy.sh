echo "Installing dependencies"
yarn install > /dev/null 2> /dev/null
echo "Start to build your package"
yarn build > /dev/null 2> /dev/null

echo "Deploying"
rm -rf /var/www/html/docs
mkdir -p /var/www/html/docs
mv ./dist/* /var/www/html/docs/

echo "Finished!"