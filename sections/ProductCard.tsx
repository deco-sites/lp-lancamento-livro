import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ProductCard {
    title: string;
    src: ImageWidget;
    altText?: string;
    priceLarge: string;
    priceLargeDescription: string;
    priceMedium?: string;
    priceMediumDescription?: string;
    buttonText: string;
    buttonLink: string;
}

export interface Props {
    title?: string;
    products: ProductCard[];
    icon?: {
        src?: ImageWidget;
        alt?: string;
    };
    showIcon?: boolean;
}

export default function ProductSection({
    title = "Opções de compra",
    products,
    icon = { src: "", alt: "" },
    showIcon = true,
}: Props) {
    const iconContent = (
        <Image
            class="mx-4"
            src={icon.src || ""}
            alt={icon.alt || ""}
            width={50}
            height={50}
        />
    );

    return (
        <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-8">
            <div class="flex flex-col align-center lg:flex-row gap-4 justify-center">
                <div class="bg-accent p-6 rounded-xl shadow-md">
                    <h2 class="text-center text-4xl font-bold text-neutral mb-8">
                        {title}
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                class="bg-white rounded-lg p-6 flex flex-col items-center justify-between text-center shadow-md"
                            >
                                <div>
                                    <div class="flex justify-center items-center mb-4">
                                        {showIcon && iconContent}
                                    </div>
                                    <h3 class="text-4xl font-bold mb-4">
                                        {product.title}
                                    </h3>
                                </div>

                                <Image
                                    src={product.src}
                                    alt={product.altText}
                                    width={250}
                                    height={250}
                                    class="mb-4"
                                />
                                <div>
                                    <p class="text-3xl font-bold mb-1">
                                        {product.priceLarge}
                                    </p>
                                    <p class="text-base mb-4">
                                        {product.priceLargeDescription}
                                    </p>
                                </div>

                                <div>
                                    {product.priceMedium && (
                                        <>
                                            <p class="text-2lg font-semibold mb-1">
                                                {product.priceMedium}
                                            </p>
                                            <p class="text-sm mb-4">
                                                {product.priceMediumDescription}
                                            </p>
                                        </>
                                    )}
                                </div>

                                <a
                                    href={product.buttonLink}
                                    class="bg-secondary text-white py-2 px-4 rounded hover:bg-primary"
                                >
                                    {product.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
