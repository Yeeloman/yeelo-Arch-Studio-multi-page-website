import type { PageLoad } from '../$types';
import cameraMan from '$assets/features/desktop/hero.jpg';
import responsive from '$assets/features/desktop/responsive.svg';
import noLimit from '$assets/features/desktop/no-limit.svg';
import embed from '$assets/features/desktop/embed.svg';
import customDomain from '$assets/features/desktop/custom-domain.svg';
import boostExpo from '$assets/features/desktop/boost-exposure.svg';
import dragDrop from '$assets/features/desktop/drag-drop.svg';
import desertHill from '$assets/shared/desktop/bg-beta.jpg';



export const load: PageLoad = () => {
  return {
    item: {
      image: cameraMan,
      title: 'FEATURES',
      description:
        'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
    },
    flatItem: {
      image: desertHill,
      title: "WE'RE IN BETA. GET YOUR INVITE TODAY!",
    },
    smallSections: [
      {
        image: responsive,
        title: "100% Responsive",
        desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
      },
      {
        image: noLimit,
        title: "No Photo Upload Limit",
        desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
      },
      {
        image: embed,
        title: "Available to Embed",
        desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
      },
      {
        image: customDomain,
        title: "Custom Domain",
        desc: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
      },
      {
        image: boostExpo,
        title: "Boost Your Exposure",
        desc: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
      },
      {
        image: dragDrop,
        title: "Drag & Drop Image",
        desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
      },
    ]

  }
}
