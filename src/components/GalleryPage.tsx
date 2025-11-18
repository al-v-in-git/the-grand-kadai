import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import chefCookingImage from "figma:asset/8d2e5b5e8277547af6ba8570dbca2ae1c70bbffc.png";

export function GalleryPage() {
  const galleryImages = [
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/1186d53fbdf1463a8b241f666de44725.jpg",
      title: "Signature Biriyani",
      category: "Food",
    },
    {
      url: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0YW5kb29yaSUyMGNoaWNrZW58ZW58MXx8fHwxNzYxOTc5MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Chicken Kebab",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/29f5a7d908788865071c252c93726108.jpg",
      title: "Flaky Kerala Parotta",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/1761979933743.JPG",
      title: "Exterior",
      category: "Premises",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/WhatsApp%20Image%202025-11-05%20at%2019.22.37_c9713384.jpg",
      title: "Fine Dining Setup",
      category: "Interior",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/6ee4b181043c7473891cf6ce7be7081c.jpg",
      title: "Fresh Spices",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/11d3597e93354e8bdaa964e539add8e1.jpg",
      title: "Drums Of Heaven",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/f98e57c45d8442aeca196de12b6ea081.jpg",
      title: "Sweet Delights",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/ea249584de66746e8fe955a1cbc014c3.jpg",
      title: "Sheek Kebab",
      category: "Food",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/4b6229e49cba45cbbfc09be7f0159b91.jpg",
      title: "Chai",
      category: "Beverages",
    },
    {
      url: chefCookingImage,
      title: "Culinary Excellence",
      category: "Events",
    },
    {
      url: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/a14d595797bf421cd91cca756d882ca8.jpg",
      title: "Soups",
      category: "Food",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-[#8B2500] mb-4">Gallery</h1>
          <p className="text-lg text-gray-700">
            A visual journey through our culinary creations and ambiance
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <p className="text-sm mb-1 text-[#F4A700]">{image.category}</p>
                  <h3 className="text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
