import BridgeMan from '$assets/home/desktop/create-and-share.jpg';
import DesktopLaptop from '$assets/home/desktop/beautiful-stories.jpg';
import CameraMan from '$assets/home/desktop/designed-for-everyone.jpg';
import Mountain from '$assets/stories/desktop/mountains.jpg';
import cityScapes from '$assets/stories/desktop/cityscapes.jpg';
import walkingMan from '$assets/stories/desktop/18-days-voyage.jpg';
import architecture from '$assets/stories/desktop/architecturals.jpg';
import noLimit from '$assets/features/desktop/no-limit.svg';
import responsive from '$assets/features/desktop/responsive.svg';
import embeded from '$assets/features/desktop/embed.svg';
import type { PageLoad } from './$types';


export const load: PageLoad = () => {
  return {
    listItems: [
      {
        image: BridgeMan,
        title: 'CREATE AND SHARE YOUR PHOTO STORIES.',
        description:
          'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
        additionalClasses: {
          background: 'bg-black',
          title: 'text-white',
          minibar: 'left-[0%] -translate-y-1/2 transform bg-sideone'
        }
      },
      {
        image: DesktopLaptop,
        title: 'BEAUTIFUL STORIES EVERY TIME',
        description:
          'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
        additionalClasses: {
          background: 'bg-white',
          title: 'text-black',
          minibar: 'left-[100%] -translate-y-1/2 transform -translate-x-2 bg-lightone'
        }
      },
      {
        image: CameraMan,
        title: 'DESIGNED FOR EVERYONE',
        description:
          'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
        additionalClasses: {
          background: 'bg-white',
          title: 'text-black',
          minibar: 'left-[0%] -translate-y-1/2 transform bg-notsolightone'
        }
      }
    ],
    miniCards: [
      {
        image: Mountain,
        title: "The Mountains",
        author: "John Appleseed "
      },
      {
        image: cityScapes,
        title: "Sunset Cityscapes",
        author: "Benjamin Cruz",
      },
      {
        image: walkingMan,
        title: "18 Days Voyage",
        author: "Alexei Borodin",
      },
      {
        image: architecture,
        title: "Architecturals",
        author: "Samantha Brooke",
      },
    ],
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
        image: embeded,
        title: "Available to Embed",
        desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
      }
    ]
  }
}
