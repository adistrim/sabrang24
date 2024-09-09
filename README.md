# Sabrang 2024

`Rejoice.` `Rejuvenate.` `Rave.`

## Docker

Build the Docker image
```bash
docker build -t sabrang-website .
```
Run the Docker container
```bash
docker run -p 3000:3000 --env-file .env.local sabrang-website
```

### Example `.env.local`

```bash
MONGODB_URI=--mongodb-uri--
NEXTAUTH_SECRET=--created-password--
```

## LICENSE
[MIT License](LICENSE)