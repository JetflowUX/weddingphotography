export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: 'Weddings' | 'Ceremonies' | 'Engagements' | 'Pre-wedding';
  orientation: 'portrait' | 'landscape';
};

export const studioConfig = {
  // CLIENT PLACEHOLDER — replace every value in this file with approved studio content.
  businessName: 'Aurelia & Co.',
  city: 'Charleston, South Carolina',
  tagline: 'Photographs that remember how it felt.',
  introLine: 'For the moments between the moments.',
  email: 'hello@aureliaco.studio',
  phone: '+1 843 555 0188',
  whatsapp: '+18435550188',
  instagram: 'https://instagram.com/',
  pinterest: 'https://pinterest.com/',
  heroImage: '/images/hero.png',
  about: {
    eyebrow: 'The studio',
    title: 'A quiet witness to your most vivid day.',
    copy: 'We photograph weddings with an eye for the unrepeatable: the held breath before a vow, the quiet hand beneath the table, the rooms you will remember long after they are empty. Our work is led by instinct, composition, and a deep reverence for what is real.',
    signature: '— Elodie & Marc, founders',
    portrait: '/images/about_portrait.png'
  },
  featured: [
  {
    src: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1200&h=1500&q=80',
    alt: 'Bride standing in sunlit garden'
  },
  {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1500&h=1000&q=80',
    alt: 'Quiet moment at an intimate gathering'
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1500&h=1000&q=80',
    alt: 'Couple on a coastal walk'
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1500&h=1000&q=80',
    alt: 'Wedding flowers in soft afternoon light'
  },
  {
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&h=1500&q=80',
    alt: 'Portrait in a heritage venue'
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1500&h=1000&q=80',
    alt: 'A joyful wedding celebration'
  }],

  galleries: [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&h=1350&q=80',
    alt: 'Couple beneath old oaks',
    category: 'Weddings',
    orientation: 'portrait'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&h=950&q=80',
    alt: 'Guests at a candlelit reception',
    category: 'Weddings',
    orientation: 'landscape'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1000&h=1320&q=80',
    alt: 'Bride in a silk dress',
    category: 'Ceremonies',
    orientation: 'portrait'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&h=930&q=80',
    alt: 'Private vows by the sea',
    category: 'Ceremonies',
    orientation: 'landscape'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1000&h=1400&q=80',
    alt: 'Engaged couple walking outdoors',
    category: 'Engagements',
    orientation: 'portrait'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1450&h=970&q=80',
    alt: 'Table flowers and stationery',
    category: 'Pre-wedding',
    orientation: 'landscape'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&w=1000&h=1350&q=80',
    alt: "Bride's quiet getting-ready moment",
    category: 'Weddings',
    orientation: 'portrait'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1450&h=970&q=80',
    alt: 'Portrait in a historic courtyard',
    category: 'Engagements',
    orientation: 'landscape'
  }] as
  GalleryImage[],
  packages: [
  {
    name: 'The Keepsake',
    detail: 'Intimate celebrations',
    price: 'From $4,800',
    includes: [
    '6 hours of coverage',
    'Two photographers',
    'Fine-art online gallery']

  },
  {
    name: 'The Heirloom',
    detail: 'The full wedding story',
    price: 'From $7,200',
    includes: [
    '10 hours of coverage',
    'Two photographers',
    'Engagement session',
    'Hand-finished album']

  },
  {
    name: 'The Elsewhere',
    detail: 'Destination celebrations',
    price: 'Custom',
    includes: [
    'Full weekend coverage',
    'Film add-on available',
    'Travel consultation']

  }],

  testimonials: [
  {
    quote:
    'They gave us photographs that feel like memories, not simply beautiful images.',
    names: 'Clara & Theo',
    place: 'Lowndes Grove'
  },
  {
    quote:
    'Every frame is so deeply us. Their calm presence changed the whole pace of our day.',
    names: 'Maya & James',
    place: 'The Dewberry'
  },
  {
    quote:
    'The images are cinematic, tender, and entirely without pretense. We could not love them more.',
    names: 'Ana & Felix',
    place: 'Wild Dunes'
  }],

  formOptions: [
  'The Keepsake',
  'The Heirloom',
  'The Elsewhere',
  'Not sure yet']

};