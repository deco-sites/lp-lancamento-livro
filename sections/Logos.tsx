import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
  icon?: {
    src?: ImageWidget;
    alt?: string;
  };
  showIcon?: boolean;
}

const IMG_PLACEHOLDER = Array(30).fill(0).map(() => ({
  src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
}));

export default function Logos({
  title = "Edit this heading however you want",
  icon = { src: "", alt: "" },
  logos = IMG_PLACEHOLDER,
  showIcon = true,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo, index) => (
        <Image
          key={index}
          src={logo.src || ""}
          alt={logo.altText || ""}
          width={342}
          height={519}
          class="h-auto"
        />
      ))}
    </div>
  );

  const iconContent = (
    <Image class="mx-4"
      src={icon.src || ""}
      alt={icon.alt || ""}
      width={50}
      height={50}
    />
  );

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-12">
        <div class="flex justify-center items-center">
          {showIcon && iconContent}
          <p class="text-center text-4xl mx-2">{title}</p>
          {showIcon && iconContent}
        </div>
        <div class="relative w-full overflow-hidden h-[519px]">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-[519px]">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
