import type { CommunityEvent } from "@/components/home-dashboard/events/events.types";

export const communityEvents: CommunityEvent[] = [
  {
    slug: "codecon-summit-2025",
    title: "Codecon Summit 2025",
    dateLabel: "18–19 Jul 2025",
    location: "Curitiba, Brazil",
    photos: [
      "/events/codecon25-01.jpeg",
      "/events/codecon25-02.jpeg",
      "/events/codecon25-03.jpeg",
      "/events/codecon25-04.jpeg",
      "/events/codecon25-05.jpeg",
    ],
    story: [
      "This time, the place was Curitiba for Codecon Summit 2025.",
      "The event was great in it's structure, organization, talks and speakers with amazing Brazilian developers. I had the chance to talk with Erick Wendel, Ana Neri e Fernanda Kipper, learning from their experience, and understanding the key points that make them the best.",
      "During the last talk of the last day, even though I was tired, I watched a developer speaking how he created Dracula theme. I didn't know it was a Brazilian and this caught my attention. I was inspired by his history when he created the theme while sick and even had his computer stolen in the Hospital. I learning a lot from this talk and I decided to stay until the end. And for me, it was one of the best talks.",
      "It was 2 days of immense learning from the best developers. Even living and working in Manaus, I could see what big companies and other developers are doing, bringing new ideias and concepts to the team.",
      "Excited for the next stop.",
    ],
  },
  {
    slug: "rocketseat-assemble",
    title: "Rocketseat Assemble",
    dateLabel: "Aug 2022",
    location: "Florianópolis, Brazil",
    photos: [
      "/events/assemble-01.jpeg",
      "/events/assemble-02.jpeg",
      "/events/assemble-03.jpeg",
      "/events/assemble-04.jpeg",
      "/events/assemble-05.jpeg",
    ],
    story: [
      "A few weeks ago I had the chance to attend the Rocketseat Assemble Event, about how to be a better Tech Lead, and it was an amazing and unique experience.",
      "I met many devs who have been an inspiration to me. The most important, I was able to network and exchange of experiences.",
      "This model event is essencial because you learn new concepts and methodologist to enhance your developer team (concepts I never heard before), you have the chance to talk with other devs, listen and learn from each experience.",
      "Amazing!",
    ],
  },
];

export function getCommunityEvents(): CommunityEvent[] {
  return communityEvents;
}

export function getCommunityEventBySlug(
  slug: string,
): CommunityEvent | undefined {
  return communityEvents.find((event) => event.slug === slug);
}
