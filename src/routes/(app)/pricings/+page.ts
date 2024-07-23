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
  }
}
