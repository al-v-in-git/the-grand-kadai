import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, ChefHat, Leaf, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SignatureDish {
  id: string;
  name: string;
  description: string;
  image: string;
  vegetarian?: boolean;
  spicy?: boolean;
  specialty: string;
}

export function SignatureDishesPage() {
  const signatureDishes: SignatureDish[] = [
    {
      id: "sig1",
      name: "Hyderabadi Chicken Biriyani",
      description: "A royal delicacy from Hyderabad, slow-cooked with fragrant basmati rice, tender marinated meat, and a blend of hand-ground spices that capture the essence of traditional dum biryani.",
      image: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/1186d53fbdf1463a8b241f666de44725.jpg",
      spicy: true,
      specialty: "Authentic Dum Biryani",
    },
    {
      id: "sig2",
      name: "Kerala Parotta",
      description: "Flaky, soft, and golden-layered South Indian bread, skillfully hand-tossed and cooked on a hot griddle. Perfectly crisp on the outside and tender inside, it’s best enjoyed with spicy gravies or rich curries.",
      image: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/29f5a7d908788865071c252c93726108.jpg",
      vegetarian: true,
      specialty: "South Indian Favorite",
    },
    {
      id: "sig3",
      name: "Royal Chicken Kebab",
      description: "Juicy, smoky, and perfectly spiced minced meat skewers grilled to perfection over live charcoal. A timeless delicacy that blends the rich flavors of Mughlai cuisine with a modern gourmet touch.",
      image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0YW5kb29yaSUyMGNoaWNrZW58ZW58MXx8fHwxNzYxOTc5MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specialty: "Grilled Specialty",
    },
    {
      id: "sig4",
      name: "Manchow Soup",
      description: "A spicy and flavorful Indo-Chinese soup made with finely chopped vegetables, aromatic garlic, soy, and a dash of pepper — topped with crispy fried noodles for that perfect balance of heat and crunch.",
      image: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/a14d595797bf421cd91cca756d882ca8.jpg",
      spicy: true,
      specialty: "Hot & Spicy Delight",
    },
    {
      id: "sig5",
      name: "Sheek Kebab",
      description: "A traditional Mughlai delicacy made with finely minced meat, infused with aromatic spices, and grilled on skewers over open flames for that irresistible smoky flavor. Served hot, juicy, and packed with rich, authentic taste.",
      image: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/ea249584de66746e8fe955a1cbc014c3.jpg",
      spicy: true,
      specialty: "Charcoal-Grilled Perfection",
    },
    {
      id: "sig6",
      name: "Drums of Heaven",
      description: "Juicy chicken lollipops marinated in a spicy Indo-Chinese sauce, deep-fried till crisp, and tossed in a flavorful blend of garlic, soy, and chili. A sizzling appetizer that perfectly balances heat, crunch, and heavenly taste.",
      image: "https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/11d3597e93354e8bdaa964e539add8e1.jpg",
      spicy: true,
      specialty: "Chef’s Signature Appetizer",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#FFF8E7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-[#8B2500] to-[#CC5500] p-4 rounded-full">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl text-[#8B2500] mb-4">Chef's Signature Dishes</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our most celebrated creations, handcrafted by Chef Rajesh Kumar. Each dish 
            represents years of culinary expertise, blending traditional flavors with modern innovation.
          </p>
        </motion.div>

        {/* Signature Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-[#CC5500]/20 hover:border-[#CC5500]">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Award Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-br from-[#F4A700] to-[#CC5500] p-2 rounded-full shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Dietary Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {dish.vegetarian && (
                      <Badge className="bg-green-600 hover:bg-green-700 shadow-lg">
                        <Leaf className="w-3 h-3 mr-1" />
                        Veg
                      </Badge>
                    )}
                    {dish.spicy && (
                      <Badge className="bg-red-600 hover:bg-red-700 shadow-lg">
                        <Flame className="w-3 h-3 mr-1" />
                        Spicy
                      </Badge>
                    )}
                  </div>

                  {/* Specialty Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/95 text-[#8B2500] hover:bg-white shadow-lg">
                      {dish.specialty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl text-[#8B2500]">{dish.name}</h3>
                    <span className="text-xl text-[#CC5500]">{dish.price}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <ChefHat className="w-4 h-4 text-[#CC5500]" />
                    <span>{dish.chef}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chef's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-[#8B2500] to-[#CC5500] text-white shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div className="bg-white/20 p-4 rounded-full">
                    <ChefHat className="w-12 h-12" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4">A Note from Our Founder</h2>
                  <p className="text-white/95 leading-relaxed mb-4">
                    "When I started my journey in the food industry over five years ago, I learned that food is more than just taste, it’s emotion, culture, and connection. My experience managing Kenny’s Chinese Takeaways and later launching Jerry’s Kitchen taught me the importance of passion, precision, and teamwork. With The Grand Kadai, I wanted to create more than a restaurant, a place where every meal tells a story, every flavor feels familiar, and every guest feels at home."
                  </p>
                  <p className="text-white/95 leading-relaxed">
                    "At The Grand Kadai, our goal is simple, to celebrate the diversity of flavors that bring people together. From timeless Indian classics to global favorites, every dish is crafted with care and a touch of innovation. This restaurant is not just my dream, but a reflection of the incredible team that makes it possible and the guests who give it life. Thank you for being part of our story, we can’t wait to serve you something truly special."
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-xl">- Jerad M</p>
                    <p className="text-sm text-white/80">Founder</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
