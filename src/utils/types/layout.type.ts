import React from "react";

export type SeoProps = {
    title?: string;
    description?: string;
    image?: {
        url?: string;
        width?: number;
        height?: number;
    };
    keywords?: string[];
    url?: string;
}

export type Children = React.ReactElement | React.ReactElement[] | string | undefined | any

export type LayoutType = {
    children?: Children;
    seo?: SeoProps
}
