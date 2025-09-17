echo "Installing dependencies"
yarn install
echo "Start to build your package"
yarn build

echo "Deploying"
mkdir -p /var/www/html/docs
cp -r ./dist/* /var/www/html/docs/

echo "Finished!