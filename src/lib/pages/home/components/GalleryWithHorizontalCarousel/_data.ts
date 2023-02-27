export const images = [
  {
    id: "01",
    src: "https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/HOLS0743.JPG",
    alt: "Kate"
  },
  {
    id: "02",
    src: "https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/HOLS0656.JPG",
    alt: "Kate"
  }
];

export interface GalleryImage {
  id: string,
  src: string,
  alt: string
}

export interface GetAssetsProps {
  from: number,
  till: number
}

export const getThumbnails = ({ from, till }: GetAssetsProps) => {
  let images: GalleryImage[] = [];
  for (let i = from; i < till; i++) {
    images.push({
      id: `id_${i}`,
      src: `https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/Thumbnails/Salon+de+Bon+Bon+%231+🔮+-+Foto+${i}+van+142.jpeg`,
      alt: `${i}'de foto van de magische avond 🔮`
    });
  }
  return images;
};

export const getImages = ({ from, till }: GetAssetsProps) => {
  let images: GalleryImage[] = [];
  for (let i = from; i < till; i++) {
    images.push({
      id: `id_${i}`,
      src: `https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/Salon+de+Bon+Bon+%231+🔮+-+Foto+${i}+van+142.jpeg`,
      alt: `${i}'de foto van de magische avond 🔮`
    });
  }
  return images;
};

export const products = [
  {
    id: "1",
    name: "Bamboo Tan",
    currency: "USD",
    price: 199,
    flag: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "USD",
    price: 199,
    salePrice: 179.99,
    flag: "on-sale",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images
  },
  {
    id: "3",
    name: "Marble Leather",
    currency: "USD",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images
  },
  {
    id: "4",
    name: "Silve wolf",
    currency: "GBP",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
    rating: 5,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images
  }
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export type ProductImage = ElementType<typeof images>;
