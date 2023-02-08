import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta
                    name="google-site-verification"
                    content="NYPo--D5bfJS12SG4DK7MgqSyXB_nDElWEpWahY1I3E"
                />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicons/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
