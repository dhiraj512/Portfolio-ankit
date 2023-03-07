import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#000000" />
                    <meta property="og:title" content="Ankit's Portfolio" />
                    <meta property="og:site_name" content="Ankit's Portfolio" />
                    <meta property="og:url" content="https://ankitsingh.vercel.app" />
                    <meta property="og:description" content="This is my portfolio site made with React, NextJS, Typescript and TailwindCSS." />
                    <meta property="og:type" content="profile" />
                    <meta property="og:image" content="" />
                </Head>
                <body className="selection:bg-primary selection:text-gray-100 antialiased min-h-screen bg-neutral-900 text-slate-200 ">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
