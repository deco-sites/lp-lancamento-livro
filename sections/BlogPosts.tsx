import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  image: ImageWidget;
}

export interface Props {
  title?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  posts = [
    {
      title: "Title of blogpost #1",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Title of blogpost #2",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Title of blogpost #3",
      image: DEFAULT_IMAGE,
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col align-center lg:flex-row gap-4 justify-center">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-3xl leading-snug text-center">
              {title}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center items-center md:grid-cols-4 gap-8">
          {posts?.map((post) => (
            <div class="overflow-hidden flex flex-col items-center justify-items-center">
              <Image
                width={220}
                class=" object-contain z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="space-y-2">
                  <h3 class="text-center text-lg">{post.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
