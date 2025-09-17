echo "Installing dependencies"
yarn install > /dev/null
echo "Start to build your package"
yarn build > /dev/null

echo "Deploying"
rm -rf /var/www/html/docs
mkdir -p /var/www/html/docs
mv ./dist/* /var/www/html/docs/

echo "Finished!"