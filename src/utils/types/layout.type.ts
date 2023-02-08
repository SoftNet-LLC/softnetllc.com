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

export type LayoutType = {
    children?: React.ReactElement | React.ReactElement[] | string | undefined | any;
    seo?: SeoProps
}
