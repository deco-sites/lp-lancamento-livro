import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, ou qualquer coisa entre eles, editar é apenas um clique de distância.
   */
  description?: string;
  image?: ImageWidget;
  imageBackground?: ImageWidget;
  imageBackgroundMobile?: ImageWidget; // Adicionando a propriedade para o banner mobile
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, ou qualquer coisa entre eles, editar é apenas um clique de distância.",
  image,
  imageBackground,
  imageBackgroundMobile, // Adicionando a propriedade para o banner mobile
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <nav class="w-full">
      <div class="flex flex-col items-center gap-8">
        <div class="relative w-full min-h-[1074px]">
          {/* Banner para Desktop */}
          {imageBackground && (
            <div
              class="hidden lg:block w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${imageBackground}')`, minHeight: '1074px' }}
            >
              <div class="w-full h-full flex flex-col items-center gap-8 bg-opacity-50 bg-black">
                <div class={`flex w-[700px] max-w-[700px] xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${image ? PLACEMENT[placement] : "flex-col items-center justify-center text-center"} lg:py-36 gap-12 md:gap-20 items-center`}>
                  {image && (
                    <Image
                      width={700}
                      height={700} // Defina a altura da imagem para evitar mudanças no layout
                      class="w-full lg:w-1/2 object-fit"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={image}
                      alt={image}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <div class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${image ? "lg:w-1/2 lg:max-w-xl" : "flex flex-col items-center justify-center lg:max-w-3xl"}`}>
                    <div
                      class="inline-block lg:text-[80px] text-4xl leading-none font-medium text-white"
                      dangerouslySetInnerHTML={{
                        __html: title,
                      }}
                    >
                    </div>
                    <p class="text-lg md:text-md leading-[150%] text-white">
                      {description}
                    </p>
                    <div class="flex items-center gap-3">
                      {cta?.map((item) => (
                        <a
                          key={item?.id}
                          id={item?.id}
                          href={item?.href}
                          target={item?.href.includes("http") ? "_blank" : "_self"}
                          class={`font-normal btn btn-primary ${item.outline && "btn-outline"}`}
                        >
                          {item?.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Banner para Mobile */}
          {imageBackgroundMobile && (
            <div
              class="block lg:hidden w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${imageBackgroundMobile}')`, minHeight: '1145px' }}
            >
              <div class="w-full h-full flex flex-col items-center gap-8 bg-opacity-50 bg-black">
                <div class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${image ? PLACEMENT[placement] : "flex-col items-center justify-center text-center"} lg:py-36 gap-12 md:gap-20 items-center`}>
                  {image && (
                    <Image
                      width={640}
                      height={640} // Defina a altura da imagem para evitar mudanças no layout
                      class="w-full lg:w-1/2 object-fit"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={image}
                      alt={image}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <div class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${image ? "lg:w-1/2 lg:max-w-xl" : "flex flex-col items-center justify-center lg:max-w-3xl"}`}>
                    <div
                      class="inline-block lg:text-[80px] text-4xl leading-none font-medium text-white"
                      dangerouslySetInnerHTML={{
                        __html: title,
                      }}
                    >
                    </div>
                    <p class="text-lg md:text-md leading-[150%] text-white">
                      {description}
                    </p>
                    <div class="flex items-center gap-3">
                      {cta?.map((item) => (
                        <a
                          key={item?.id}
                          id={item?.id}
                          href={item?.href}
                          target={item?.href.includes("http") ? "_blank" : "_self"}
                          class={`font-normal btn btn-primary ${item.outline && "btn-outline"}`}
                        >
                          {item?.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
