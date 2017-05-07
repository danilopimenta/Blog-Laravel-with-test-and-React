<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bloguinho</title>

        <link rel="stylesheet" href="{{ mix('css/front.css') }}">
    </head>
    <body>
    <div class="page">
        <h1>Bloguinho</h1>
        <main id="front" class="container"></main>
    </div>
    </body>
    <script src="{{ mix('js/front.js') }}" ></script>
</html>
