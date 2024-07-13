import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Button {
    text: string;
    link: string;
}

export interface Props {
    title: string;
    description: string;
    src: ImageWidget;
    altText?: string;
    buttons: Button[];
}

export default function CustomComponent({
    title,
    description,
    src,
    altText,
    buttons,
}: Props) {
    return (
        <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-8">
            <div class="flex flex-col align-center lg:flex-row gap-4 justify-center">
                <div class="flex flex-col max-w-screen-xl bg-accent p-6 rounded-xl shadow-md lg:flex-row overflow-hidden">
                    <div class="lg:w-1/3 w-full">
                        <Image
                            src={src || ""}
                            alt={altText || ""}
                            width={400}
                            height={566}
                            class="object-cover w-full h-full"
                        />
                    </div>
                    <div class="lg:w-2/3 w-full p-8 flex flex-col justify-center">
                        <h2 class="text-3xl lg:text-5xl font-bold text-white mb-4">
                            {title}
                        </h2>
                        <p class="text-lg lg:text-xl text-neutral mb-8">
                            {description}
                        </p>
                        <div class="flex flex-wrap gap-4">
                            {buttons.map((button, index) => (
                                <a
                                    key={index}
                                    href={button.link}
                                    class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
