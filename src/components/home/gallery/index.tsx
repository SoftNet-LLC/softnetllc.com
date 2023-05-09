import React, { FC } from "react";
import HomeGalleryWrap from "@components/home/gallery/style/wrap";
import Grid from "@mui/material/Unstable_Grid2";
import {
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    B8,
    B9,
    B10,
    B11,
    B12,
    B13,
    B14,
    B15,
    B16,
    B17,
    B18,
    B19,
    B20,
    B21,
    B22,
    B23,
    B24,
    B25,
    B26,
    B27,
    B28,
    B29,
    B30,
    B31,
    B32,
    B33,
    B34,
    B35,
    B36,
    B37,
    B38,
    B39,
    B40,
} from "@assets/images"
import Image from "next/image";

const HomeGallery: FC = () => {
    const images = [
        [B1, B2,],
        [B3, B4,],
        [B5, B6,],
        [B7, B8,],
        [B9, B10,],
        [B11, B12,],
        [B13, B14,],
        [B15, B16,],
        [B17, B18,],
        [B19, B20,],
        [B21, B22,],
        [B23, B24,],
        [B25, B26,],
        [B27, B28,],
        [B29, B30,],
        [B31, B32,],
        [B33, B34,],
        [B35, B36,],
        [B37, B38,],
        [B39, B40,],
    ]

    return (
        <HomeGalleryWrap>
            <div className="gallery">
                {
                    images.map((img, index) => (
                        <div className="gallery-item" key={`image-${index}`}>
                            <Image
                                placeholder="blur"
                                style={{ width: 384, borderRadius: "16px" }}
                                width={600}
                                height={338}
                                src={img[0]}
                                alt="Banner Image"/>
                            <Image
                                placeholder="blur"
                                style={{ width: 384, borderRadius: "16px" }}
                                width={600}
                                height={338}
                                src={img[1]}
                                alt="Banner Image"/>
                        </div>
                    ))
                }
            </div>
        </HomeGalleryWrap>
    );
};

export default HomeGallery;