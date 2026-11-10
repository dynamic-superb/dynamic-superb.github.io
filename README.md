# Instruction for setting up Frontend server
0. Please check the `nodejs`, `npm`, and `yarn` are installed. Or
```bash
sudo apt install nodejs
sudo apt install npm
sudo npm install --global yarn
```

1. Install dependency
```bash
yarn install
```

2. Create static files (written to `./build`)
```bash
yarn build
```
For local development, run `yarn start` (Vite dev server on http://localhost:3000).

3. Copy the static files to the corresponding directory
```bash
sudo cp -r ./build/* /var/www/html/
```

4. Restart `nginx`
```bash
sudo systemctl restart nginx 
```
