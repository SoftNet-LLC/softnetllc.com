import { FC } from "react";
import Head from "next/head";
import { SeoProps } from "@utils/types/layout.type";


const SeoHead: FC<SeoProps> = (props) => {
    const { title, description, keywords = [], image, url } = props;

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title itemProp="name" lang="en">{title}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content={title}/>
            <meta property="og:image" content={image?.url}/>
            <meta property="og:image:width" content={image?.width?.toString() || "1920"}/>
            <meta property="og:image:height" content={image?.height?.toString() || "1024"}/>
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:locale" content="en_US"/>
            <meta itemProp="name" content={title}/>
            <meta itemProp="description" content={description}/>
            <meta itemProp="image" content={image?.url}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={url || ""}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image?.url}/>
            <meta name="twitter:image:alt" content={title}/>
        </Head>
    )
}


export default SeoHead
