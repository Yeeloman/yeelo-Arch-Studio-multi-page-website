import type { PageLoad } from "../$types";
import desertHill from '$assets/shared/desktop/bg-beta.jpg';
import cameraWoman from '$assets/pricing/desktop/hero.jpg';

export const load: PageLoad = () => {
  return {
    item: {
      image: cameraWoman,
      title: "PRICING",
      description: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
    },
    flatItem: {
      image: desertHill,
      title: "WE'RE IN BETA. GET YOUR INVITE TODAY!",
    },
    priceCards: [
      {
        title: "Basic",
        desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
        price: {
          month: "19.00",
          year: "190.00",
        },
      },
      {
        title: "Pro",
        desc: "More advanced features available. Recommended for photography veterans and professionals.",
        price: {
          month: "39.00",
          year: "390.00"
        },
      },
      {
        title: "Business",
        desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
        price: {
          month: "99.00",
          year: "990.00",
        },
      },
    ]
  }
}
