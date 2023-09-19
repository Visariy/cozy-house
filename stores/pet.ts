import { defineStore } from "pinia";

export const usePetStore = defineStore("petStore", () => {
  const pets = [
    {
      id: "1",
      name: "Katrine",
      breed: "Cat",
      story:
        "In a cozy home filled with warmth and love, the pitter-patter of paws echoed through the halls. Katrine, a graceful and curious cat, was the first to find solace in her adopted family. With her enchanting green eyes, she brought an air of elegance to every corner of the house",
      age: "1 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-katrine.png",
    },
    {
      id: "2",
      name: "Jennifer",
      breed: "Dog - Labrador",
      story:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-jennifer.png",
    },
    {
      id: "3",
      name: "Woody",
      breed: "Dog",
      story:
        "Woody, a loyal and playful dog, bounded into their lives shortly after. His boundless energy and wagging tail brought laughter and joy to all who crossed his path. Together, Katrine and Woody became an inseparable duo, embarking on countless adventures in the great outdoors.",
      age: "3 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-woody.png",
    },
    {
      id: "4",
      name: "Sophia",
      breed: "Dog",
      story:
        "Sophia, a mischievous and independent dog, joined the clan with an air of mystery. Her sleek black fur and piercing yellow eyes masked her playful nature, leaving everyone intrigued by her hidden depths. Sophia's presence added a touch of enigma to the household, keeping everyone on their toes.",
      age: "4 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-sophia.png",
    },
    {
      id: "5",
      name: "Timmy",
      breed: "Cat",
      story:
        "Timmy, a timid yet affectionate cat, found comfort in the loving embrace of his new family. With his gentle nature and soulful eyes, he captured the hearts of all who met him. Timmy blossomed in their care, gradually shedding his shyness to become a cherished member of the feline fraternity.",
      age: "5 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-timmy.png",
    },
    {
      id: "6",
      name: "Charly",
      breed: "Dog",
      story:
        "Charly, a boisterous and lovable dog, arrived with a zest for life that was infectious. His wagging tail and endless enthusiasm brought laughter and happiness to everyone he encountered. Charly's playful antics turned even the simplest moments into unforgettable memories.",
      age: "6 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-charly.png",
    },
    {
      id: "7",
      name: "Scarlett",
      breed: "Dog",
      story:
        "Scarlett, a gentle and caring dog, entered their lives with a heart full of compassion. Her soft, golden fur and kind eyes mirrored her nurturing spirit. Scarlett's presence brought a sense of tranquility and comfort to the household, as she offered solace to anyone in need.",
      age: "7 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-scarlet.png",
    },
    {
      id: "8",
      name: "Freddie",
      breed: "Cat",
      story:
        "Freddie, a mischievous and clever cat, completed the colorful cast of adopted pets. His tabby fur and mischievous eyes hid an intellect that often led him into amusing escapades. Freddie's antics kept everyone on their toes, reminding them to cherish the lighthearted moments in life.",
      age: "8 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-freddie.png",
    },
    {
      id: "9",
      name: "Katrine",
      breed: "Cat",
      story:
        "In a cozy home filled with warmth and love, the pitter-patter of paws echoed through the halls. Katrine, a graceful and curious cat, was the first to find solace in her adopted family. With her enchanting green eyes, she brought an air of elegance to every corner of the house",
      age: "1 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-katrine.png",
    },
    {
      id: "10",
      name: "Jennifer",
      breed: "Dog - Labrador",
      story:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-jennifer.png",
    },
    {
      id: "11",
      name: "Woody",
      breed: "Dog",
      story:
        "Woody, a loyal and playful dog, bounded into their lives shortly after. His boundless energy and wagging tail brought laughter and joy to all who crossed his path. Together, Katrine and Woody became an inseparable duo, embarking on countless adventures in the great outdoors.",
      age: "3 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-woody.png",
    },
    {
      id: "12",
      name: "Sophia",
      breed: "Dog",
      story:
        "Sophia, a mischievous and independent dog, joined the clan with an air of mystery. Her sleek black fur and piercing yellow eyes masked her playful nature, leaving everyone intrigued by her hidden depths. Sophia's presence added a touch of enigma to the household, keeping everyone on their toes.",
      age: "4 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-sophia.png",
    },
    {
      id: "13",
      name: "Timmy",
      breed: "Cat",
      story:
        "Timmy, a timid yet affectionate cat, found comfort in the loving embrace of his new family. With his gentle nature and soulful eyes, he captured the hearts of all who met him. Timmy blossomed in their care, gradually shedding his shyness to become a cherished member of the feline fraternity.",
      age: "5 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-timmy.png",
    },
    {
      id: "14",
      name: "Charly",
      breed: "Dog",
      story:
        "Charly, a boisterous and lovable dog, arrived with a zest for life that was infectious. His wagging tail and endless enthusiasm brought laughter and happiness to everyone he encountered. Charly's playful antics turned even the simplest moments into unforgettable memories.",
      age: "6 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-charly.png",
    },
    {
      id: "15",
      name: "Scarlett",
      breed: "Dog",
      story:
        "Scarlett, a gentle and caring dog, entered their lives with a heart full of compassion. Her soft, golden fur and kind eyes mirrored her nurturing spirit. Scarlett's presence brought a sense of tranquility and comfort to the household, as she offered solace to anyone in need.",
      age: "7 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-scarlet.png",
    },
    {
      id: "16",
      name: "Freddie",
      breed: "Cat",
      story:
        "Freddie, a mischievous and clever cat, completed the colorful cast of adopted pets. His tabby fur and mischievous eyes hid an intellect that often led him into amusing escapades. Freddie's antics kept everyone on their toes, reminding them to cherish the lighthearted moments in life.",
      age: "8 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
      image: "pets-freddie.png",
    },
  ];

  return { pets };
});
