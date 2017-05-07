# Blog using Laravel with test and react:

## configuring

```shell
composer install
```

configure your `.env`

```shell
php artisan migrate 
```

```shell
npm install 
```

```shell
php artisan key:generate 
```

```shell
php artisan serve
```

```shell
php artisan cache:clear
```

To create posts access `localhost:8000/admin/posts`

to test, just execute `phpunit`