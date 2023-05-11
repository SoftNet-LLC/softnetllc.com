import dynamic from "next/dynamic";

const BaseMap = dynamic(()=>import("./base"), { ssr: false })

export {
    BaseMap
}