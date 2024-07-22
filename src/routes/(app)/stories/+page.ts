import type { PageLoad } from "../$types";
import walkingMan from '$assets/stories/desktop/18-days-voyage.jpg';
import architecture from '$assets/stories/desktop/architecturals.jpg';
import behindWaves from '$assets/stories/desktop/behind-the-waves.jpg';
import calmWater from '$assets/stories/desktop/calm-waters.jpg';
import cityScape from '$assets/stories/desktop/cityscapes.jpg';
import darkForst from '$assets/stories/desktop/dark-forest.jpg';
import kingLion from '$assets/stories/desktop/king-on-africa.jpg';
import dreamland from '$assets/stories/desktop/land-of-dreams.jpg';
import milkyWay from '$assets/stories/desktop/milky-way.jpg';
import mountain from '$assets/stories/desktop/mountains.jpg';
import seaRage from '$assets/stories/desktop/rage-of-the-sea.jpg';
import bojack from '$assets/stories/desktop/running-free.jpg';
import flower from '$assets/stories/desktop/somwarpet.jpg';
import tree from '$assets/stories/desktop/trip-to-nowhere.jpg';
import bigTree from '$assets/stories/desktop/unforeseen-corners.jpg';
import world from '$assets/stories/desktop/world-tour.jpg';


export const load: PageLoad = () => {

  return {
    cardsList: [
      {
        image: mountain,
        date: "April 16th 2020",
        title: "The Mountains",
        author: "John Appleseed",
      },
      {
        image: cityScape,
        date: "April 14th 2020",
        title: "Sunset Cityscapes",
        author: "Benjamin Cruz",
      },
      {
        image: walkingMan,
        date: "April 11th 2020",
        title: "18 Days Voyage",
        author: "Alexei Borodin",
      },
      {
        image: architecture,
        date: "April 9th 2020",
        title: "Architecturals",
        author: "Samantha Brooke",
      },
      {
        image: world,
        date: "April 7th 2020",
        title: "World Tour 2019",
        author: "Timothy Wagner",
      },
      {
        image: bigTree,
        date: "April 3th 2020",
        title: "Unforeseen Corners",
        author: "William Malcom",
      },
      {
        image: kingLion,
        date: "March 29th 2020",
        title: "King on Africa: Part II",
        author: "Tim Hillenburg",
      },
      {
        image: tree,
        date: "March 21st 2020",
        title: "The Trip to Nowhere",
        author: "Felicia Rourke",
      },
      {
        image: seaRage,
        date: "March 19th 2020",
        title: "Rage of The Sea",
        author: "Mohammed Abdul",
      },
      {
        image: bojack,
        date: "March 16th 2020",
        title: "Running Free",
        author: "Michelle",
      },
      {
        image: behindWaves,
        date: "March 11th 2020",
        title: "Behind The Waves",
        author: "Lamarr Wilson",
      },
      {
        image: calmWater,
        date: "March 9th 2020",
        title: "Calm Waters",
        author: "Samantha Brooke",
      },
      {
        image: milkyWay,
        date: "March 5th 2020",
        title: "The Milky Way",
        author: "Benjamin Cruz",
      },
      {
        image: darkForst,
        date: "March 4th 2020",
        title: "Night at The Dark Forest",
        author: "Mohammed Abdul",
      },
      {
        image: flower,
        date: "March 1st 2020",
        title: "Somwarpet’s Beauty",
        author: "Michelle",
      },
      {
        image: dreamland,
        date: "February 25th 2020",
        title: "Land of Dreams",
        author: "William Malcolm",
      },
    ]
  }
}
