export interface Testimonial {
  name: string;
  dog: string;
  area: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Harshita Puri",
    dog: "Alpy, Indie",
    area: "Bengaluru",
    text: "We had a wonderful experience working with Mr. Govind. He is extremely professional, patient, knowledgeable, and genuinely cares about the dogs he trains. My dog (Alpy) has shown such amazing progress, and I've also learned so much about handling her better. The training sessions were always positive, effective, and tailored to our needs. I'm really grateful for all the help and would highly recommend Mr. Govind to anyone looking for a dedicated and professional dog trainer!",
    rating: 5,
  },
  {
    name: "Tejaswini Vasu",
    dog: "Tyson, Rottweiler",
    area: "Bengaluru",
    text: "Amazing dog trainer! Govind Raj is knowledgeable, patient, and caring, with a gentle and effective training approach. Highly recommended!",
    rating: 5,
  },
  {
    name: "Madhavi Peters",
    dog: "Birbal, Beagle",
    area: "Bengaluru",
    text: "As a first-time pet owner, Govind was a godsend in giving our family the confidence to care for our very energetic puppy. His love for dogs is evident in his approach, which focuses on gentle parenting rather than an authoritarian/harsh approach. He works with the dog's innate personality rather than against it. Highly recommend his services.",
    rating: 5,
  },
  {
    name: "Deepak Rao",
    dog: "Ginger & Max, Indies",
    area: "Bengaluru",
    text: "We adopted two Indie dogs and were struggling with their adjustment. The Special Indie Pack was exactly what we needed. Both dogs are now settled, happy, and a joy to be around.",
    rating: 5,
  },
  {
    name: "Ravi Shankar",
    dog: "Zuri, German Shepherd",
    area: "Bengaluru",
    text: "The pet photography session was magical! They captured Zuri's personality so beautifully. Every photo tells a story. We treasure these images and keep coming back for more sessions.",
    rating: 5,
  },
  {
    name: "Rajesh R",
    dog: "Churo, Beagle",
    area: "Bengaluru",
    text: "We enrolled our Beagle in the board and train program with Govind and it was one of the best decisions we made. He kept us updated throughout and we had complete peace of mind. By the end of the program our Beagle had learned basic obedience, improved leash manners, better impulse control, and most importantly had become a much calmer and more confident puppy. The handover sessions were extremely helpful and ensured that we knew how to continue the training at home. What impressed us the most was Govind's patience, knowledge, and genuine love for dogs. We are incredibly grateful and would highly recommend Paws of Persistence to anyone looking for a trustworthy and compassionate trainer.",
    rating: 5,
  },
  {
    name: "Akriti Verma",
    dog: "Fofo & Rio, Toy Poodles",
    area: "Bengaluru",
    text: "Govind has been the best possible trainer we could have asked for! We found him online and since his first visit we knew we liked him. Absolutely polite, great with both our dogs, always available in case of any questions or concerns. He himself has two dogs and a number of times we have left our dogs, Fofo and Rio, with him and his wife, and they have given them immense love and care. The training period went very well and Fofo and Rio love Govind. He covered indoor as well as outdoor training along with recommendations whenever necessary. We really appreciate his time and efforts.",
    rating: 5,
  },
  {
    name: "Nandini",
    dog: "Maxx, Shih Tzu",
    area: "Bengaluru",
    text: "Very good experience we had with Paws of Persistence. As first-time pet parents we got a lot of insights from Mr. Govind. His daycare is also excellent, my dog Maxx loved him and was in the hands of good care.",
    rating: 5,
  },
  {
    name: "Karthik Karur",
    dog: "Minchu, Indie",
    area: "Bengaluru",
    text: "Govind is very passionate about animals. He has a lot of compassion towards them and provides tricks that can help with taking better care of your pets. I would definitely recommend him.",
    rating: 5,
  },
  {
    name: "Lakshmi S",
    dog: "Chiku & Irish, Labradors",
    area: "Bengaluru",
    text: "Training meant a lot to us since we had two Lab breed pets. The basic behaviours you taught were picked up fast by the pets. It shows the talent of training and the affection you have towards the pets. Thanks a lot.",
    rating: 5,
  },
  {
    name: "Bharani S",
    dog: "Mango, Beagle",
    area: "Bengaluru",
    text: "We had a fantastic experience with Govind at Paws of Persistence! As new dog parents, we were struggling with basic training issues like toilet training, biting, and jumping. Govind used positive reinforcement techniques that were easy to follow and really effective. In just a few sessions our puppy became more obedient and calm. The training was fun for both us and our dog, and we felt so much more confident as pet parents. I highly recommend Govind for anyone looking for a friendly and skilled dog trainer!",
    rating: 5,
  },
];

/** First name only, used where a short attribution is needed. */
export const firstName = (name: string) => name.split(" ")[0];

/**
 * Returns a randomly ordered copy of a list (Fisher-Yates). Used to rotate
 * review order on every page load so every pet parent gets exposure.
 */
export const shuffle = <T,>(items: readonly T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
