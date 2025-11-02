export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit 2025",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-06-13",
    time: "09:00 AM"
  },
  {
    image: "/images/event2.png",
    title: "AI DevWorld Conference",
    slug: "ai-devworld-2025",
    location: "San Francisco, CA",
    date: "2025-07-22",
    time: "10:00 AM"
  },
  {
    image: "/images/event3.png",
    title: "Cloud Native Hackathon",
    slug: "cloud-native-hackathon",
    location: "Austin, TX",
    date: "2025-08-05",
    time: "08:00 AM"
  },
  {
    image: "/images/event4.png",
    title: "Web3 Builders Summit",
    slug: "web3-builders-summit",
    location: "Dubai, UAE",
    date: "2025-09-10",
    time: "08:00 AM"
  },
  {
    image: "/images/event5.png",
    title: "DevOps Days Berlin",
    slug: "devops-days-berlin",
    location: "Berlin, Germany",
    date: "2025-10-14",
    time: "09:00 AM"
  },
  {
    image: "/images/event6.png",
    title: "Mobile Dev Meetup",
    slug: "mobile-dev-meetup-nov",
    location: "London, UK",
    date: "2025-11-08",
    time: "06:00 PM"
  }
];
