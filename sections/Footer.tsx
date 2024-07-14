import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
  ariaLabel?: string;
}

export interface SocialPesonalizado {
  icon: {
    src: ImageWidget;
    alt?: string;
  };
  network: string;
  href: string;
  ariaLabel: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
    alt?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
  socialPersonalizado?: SocialPesonalizado[]; // Adicionando a nova propriedade
}

function SocialIcon({ icon, network, href }: SocialPesonalizado) {
  return (
    <a class="block" href={href} target="_blank" aria-label={network}>
      <img src={icon.src} alt={`${icon.alt || network} icon`} width="24" height="24" />
    </a>
  );
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  subscribe = {
    title: "Subcribe",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
    alt:"Logo Deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "", ariaLabel: "Icone de link para o Facebook"  },
    { network: "Instagram", href: "", ariaLabel: "Icone de link para o Instagram" },
    { network: "X - Twitter", href: "", ariaLabel: "Icone de link para o X - Twitter"  },
    { network: "Linkedin", href: "", ariaLabel: "Icone de link para o InsLinkedintagram"  },
    { network: "Youtube", href: "", ariaLabel: "Icone de link para o Youtube"  },
  ],
  socialPersonalizado = [], // Adicionando um valor padrão
}: Props) {
  return (
    <div class="bg-secondary m-0 w-full mx-0 px-4 pt-16 text-sm">
      <div class="flex flex-col mx-8 gap-2">
        <div class="flex flex-col gap-6 justify-between lg:flex-row">
          <div>
            <Image
              src={logo.src || ""}
              width={190}
              height={50}
              alt={logo.alt}
            />
          </div>

          <div class="lg:w-[40%]">
            <p class="font-semibold text-xl text-white mb-4">
              {subscribe?.title}
            </p>
            <form class="flex flex-col gap-4">
              <div class="flex gap-4">
                <input
                  type="text"
                  placeholder="Escreva sua mensagem aqui"
                  class="w-full input input-bordered input-primary"
                />
                <button
                  type="submit"
                  class="btn btn-primary font-normal"
                  aria-label="Subscribe"
                >
                  Enviar
                </button>
              </div>
              <p class="text-xs text-white">
              </p>
            </form>
          </div>
        </div>
        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
          <div class="text-white flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.alt}
              />
            </a>
            <span>{copyright}</span>
            <div class="flex gap-2 justify-between lg:gap-6">
              {bottomLinks?.map((item) => (
                <a class="link" href={item.href} target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex gap-3">
            {social?.map((item) => (
              <a class="block" href={item.href} target="_blank" aria-label={item.ariaLabel}>
                {item.network == "Facebook" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.3311C22 6.77453 17.5229 2.27002 12 2.27002C6.47715 2.27002 2 6.77453 2 12.3311C2 17.3528 5.65684 21.5152 10.4375 22.27V15.2394H7.89844V12.3311H10.4375V10.1145C10.4375 7.59298 11.9305 6.20014 14.2146 6.20014C15.3088 6.20014 16.4531 6.39665 16.4531 6.39665V8.87263H15.1922C13.95 8.87263 13.5625 9.64824 13.5625 10.4439V12.3311H16.3359L15.8926 15.2394H13.5625V22.27C18.3432 21.5152 22 17.353 22 12.3311Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
                {item.network == "Instagram" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 3.27002H8C5.23858 3.27002 3 5.5086 3 8.27002V16.27C3 19.0314 5.23858 21.27 8 21.27H16C18.7614 21.27 21 19.0314 21 16.27V8.27002C21 5.5086 18.7614 3.27002 16 3.27002ZM19.25 16.27C19.2445 18.0626 17.7926 19.5145 16 19.52H8C6.20735 19.5145 4.75549 18.0626 4.75 16.27V8.27002C4.75549 6.47737 6.20735 5.02551 8 5.02002H16C17.7926 5.02551 19.2445 6.47737 19.25 8.27002V16.27ZM16.75 8.52002C17.3023 8.52002 17.75 8.0723 17.75 7.52002C17.75 6.96774 17.3023 6.52002 16.75 6.52002C16.1977 6.52002 15.75 6.96774 15.75 7.52002C15.75 8.0723 16.1977 8.52002 16.75 8.52002ZM12 7.77002C9.51472 7.77002 7.5 9.78474 7.5 12.27C7.5 14.7553 9.51472 16.77 12 16.77C14.4853 16.77 16.5 14.7553 16.5 12.27C16.5 9.78474 14.4853 7.77002 12 7.77002ZM12 14.52C10.6193 14.52 9.5 13.4007 9.5 12.02C9.5 10.6393 10.6193 9.52002 12 9.52002C13.3807 9.52002 14.5 10.6393 14.5 12.02C14.5 13.4007 13.3807 14.52 12 14.52Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
                {item.network == "X - Twitter" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.5 6.27002C22.8 6.57002 22.1 6.78002 21.3 6.89002C22.1 6.41002 22.7 5.65002 23 4.75002C22.3 5.19002 21.5 5.50002 20.6 5.68002C19.9 4.92002 18.9 4.44002 17.8 4.44002C15.7 4.44002 14 6.14002 14 8.25002C14 8.55002 14 8.85002 14.1 9.14002C11.1 9.00002 8.5 7.65002 6.8 5.57002C6.5 6.07002 6.3 6.64002 6.3 7.26002C6.3 8.43002 6.9 9.46002 7.9 10.0402C7.3 10.0402 6.8 9.86002 6.3 9.61002C6.3 9.62002 6.3 9.63002 6.3 9.64002C6.3 11.3002 7.6 12.6902 9.3 12.9902C9 13.0802 8.7 13.1302 8.3 13.1302C8.1 13.1302 7.8 13.1102 7.6 13.0502C8.1 14.4002 9.4 15.3702 10.9 15.4002C9.7 16.2802 8.1 16.7802 6.3 16.7802C6 16.7802 5.7 16.7702 5.4 16.7202C6.9 17.6802 8.7 18.2702 10.7 18.2702C17.7 18.2702 21.2 13.1902 21.2 8.62002C21.2 8.46002 21.2 8.30002 21.2 8.14002C21.9 7.64002 22.6 7.02002 23.1 6.27002H23.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
                {item.network == "Linkedin" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 3.27002H5C4.44772 3.27002 4 3.71774 4 4.27002V20.27C4 20.8223 4.44772 21.27 5 21.27H19C19.5523 21.27 20 20.8223 20 20.27V4.27002C20 3.71774 19.5523 3.27002 19 3.27002ZM17 10.27C16.1683 9.44174 15.0734 9 13.9048 9C13.4011 9 12.9076 9.10224 12.4461 9.30072C11.9846 9.4992 11.5621 9.79147 11.2041 10.1594C10.8461 10.5273 10.5595 10.9648 10.3628 11.4481C10.1662 11.9313 10.0645 12.4512 10.0645 12.976V17.27H8.06445V8.27002H10.0645V10.27H10.1137C10.3587 9.7891 10.7255 9.38705 11.1738 9.10501C11.622 8.82296 12.1351 8.67128 12.6582 8.67002H12.735C13.7502 8.67002 14.7235 9.08179 15.4491 9.81212C16.1747 10.5425 16.6126 11.5289 16.6825 12.5767V17.27H18.6825V10.27H17ZM6.06445 17.27H8.06445V8.27002H6.06445V17.27ZM8.06445 6.27002H6.06445C5.90092 6.27002 5.74075 6.23658 5.59567 6.17221C5.45058 6.10783 5.3244 6.01394 5.22548 5.89775C5.12656 5.78156 5.05723 5.64538 5.02367 5.49962C4.99011 5.35386 4.9932 5.20272 5.0327 5.0583C5.0722 4.91388 5.14708 4.78012 5.25048 4.66767C5.35388 4.55522 5.48246 4.46762 5.62548 4.412C5.76849 4.35638 5.92265 4.33486 6.07587 4.34909C6.22909 4.36332 6.3772 4.41287 6.50955 4.49384C6.64191 4.5748 6.75571 4.68443 6.84334 4.81493C6.93097 4.94543 6.99051 5.09312 7.01774 5.24866C7.04498 5.4042 7.03923 5.56318 7.00098 5.71558C6.96274 5.86797 6.89205 6.00946 6.79467 6.13099C6.69729 6.25252 6.57528 6.35124 6.43748 6.42002C6.30648 6.48625 6.16652 6.52806 6.02288 6.54212C5.87924 6.55618 5.7342 6.54207 5.5964 6.50002H5.60645C5.45075 6.42658 5.31123 6.32124 5.19838 6.19167C5.08554 6.06211 5.00222 5.91105 4.95445 5.74802C4.90669 5.58499 4.89584 5.41457 4.92203 5.24896C4.94823 5.08335 5.01074 4.92702 5.10445 4.78802C5.19816 4.64903 5.32004 4.5317 5.4604 4.44525C5.60076 4.3588 5.75673 4.30568 5.91745 4.29002C6.07816 4.27436 6.23991 4.29652 6.392 4.35502C6.5441 4.41352 6.68235 4.50725 6.79445 4.62802C6.91045 4.74891 7.00173 4.89652 7.06045 5.06102C7.11917 5.22551 7.14392 5.40102 7.13372 5.577C7.12352 5.75297 7.0785 5.92421 6.99945 6.08002C6.9204 6.23583 6.80911 6.3717 6.67245 6.47802C6.53624 6.58406 6.37869 6.65656 6.20902 6.68727C6.03934 6.718 5.86273 6.70641 5.69455 6.65302C5.52637 6.59963 5.37109 6.50592 5.24045 6.38002H6.06445V6.27002Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
                {item.network == "Youtube" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.4985 7.61532C23.2919 6.79498 22.6713 6.1743 21.851 5.96775C20.0363 5.4895 12 5.4895 12 5.4895C12 5.4895 3.96367 5.4895 2.14898 5.96775C1.32865 6.1743 0.708072 6.79498 0.501519 7.61532C0.0232544 9.43002 0.0232544 12.4853 0.0232544 12.4853C0.0232544 12.4853 0.0232544 15.5406 0.501519 17.3553C0.708072 18.1756 1.32865 18.7963 2.14898 19.0028C3.96367 19.4811 12 19.4811 12 19.4811C12 19.4811 20.0363 19.4811 21.851 19.0028C22.6713 18.7963 23.2919 18.1756 23.4985 17.3553C23.9768 15.5406 23.9768 12.4853 23.9768 12.4853C23.9768 12.4853 23.9768 9.43002 23.4985 7.61532ZM9.60075 15.0617V9.90891L15.8828 12.4853L9.60075 15.0617Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
              </a>
            ))}
            {socialPersonalizado?.map((item: SocialPesonalizado) => (
              <SocialIcon key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
