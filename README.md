# Sportsfete Frontend

Tech Stack: React JS

## Setup - Development

- Clone this repo
- Create .env file from .env.example as sample inside src/env/ 
- Run the following command

```bash
docker-compose --env-file src/env/.env up
```
### Setup - Android pwa

```bash
npm run build
npx cap sync
npx cap run android
```

### Setup - Ios pwa

```bash
npm run build
npx cap sync
npx cap run ios
```