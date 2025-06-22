import ImagesSlider from "@/components/ImageSliders";
import { ServerSideFunction } from "@/utils/server-utils"
import { Suspense } from "react";
export default function ServerRoutePage() {
    const result = ServerSideFunction();
    return (
        <>
            <h1>Server Route Page {result}</h1>
            <Suspense fallback={<p>Bentar Der</p>}>
                <ImagesSlider />
            </Suspense>
        </>
    )
}