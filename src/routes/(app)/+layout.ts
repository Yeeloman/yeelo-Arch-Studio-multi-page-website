import type { LayoutLoad } from "./$types";

import logoDark from '$assets/logo.svg';
import logoLight from '$assets/logo-white.svg';
import facebookWhite from '$assets/shared/desktop/facebook-white.svg';
import facebookColored from '$assets/shared/desktop/facebook.svg';
import instagramWhite from '$assets/shared/desktop/instagram-white.svg';
import instagramColored from '$assets/shared/desktop/instagram.svg';
import twitterWhite from '$assets/shared/desktop/twitter-white.svg';
import twitterColored from '$assets/shared/desktop/twitter.svg';
import pintrestWhite from '$assets/shared/desktop/pinterest-white.svg';
import pintrestColored from '$assets/shared/desktop/pinterest.svg';
import youtubeWhite from '$assets/shared/desktop/youtube-white.svg';
import youtubeColored from '$assets/shared/desktop/youtube.svg';

export const load: LayoutLoad = () => {
  return {
    logoDark,
    logoLight,
    socialMediaLogos: [
      {
        white: facebookWhite,
        colored: facebookColored,
      },
      {
        white: instagramWhite,
        colored: instagramColored,
      },
      {
        white: youtubeWhite,
        colored: youtubeColored,
      },
      {
        white: twitterWhite,
        colored: twitterColored,
      },
      {
        white: pintrestWhite,
        colored: pintrestColored
      },
    ]
  }
}
