<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Ghana International Trade Commission') }}</title>
        <!-- Fonts -->
        {{-- <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}
<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7COpen%20Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%7CAsap%3Aregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%7CRoboto%3A400&#038;subset=cyrillic-ext%2Cvietnamese%2Clatin%2Ccyrillic%2Clatin-ext%2Cgreek-ext%2Cgreek&#038;display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7COpen%20Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%7CAsap%3Aregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%7CRoboto%3A400&#038;subset=cyrillic-ext%2Cvietnamese%2Clatin%2Ccyrillic%2Clatin-ext%2Cgreek-ext%2Cgreek&#038;display=swap" media="print" onload="this.media='all'" />
        
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
