echo "Installing dependencies"
yarn install
echo "Start to build your package"
yarn build

echo "Deploying"
rm -rf /var/www/html/docs
mkdir -p /var/www/html/docs
mv ./dist/* /var/www/html/docs/

echo "Finished!