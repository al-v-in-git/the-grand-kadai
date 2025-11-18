import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Award, Heart, Utensils, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TestimonialsSection } from "./TestimonialsSection";
import chefImage from "figma:asset/4987ab3a07fab79a1cfb8e2763a783b3ad6ba47b.png";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "Every dish is crafted with love and dedication to authentic flavors",
    },
    {
      icon: Users,
      title: "Family First",
      description: "Creating memorable dining experiences for families and friends",
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "We source only the finest, freshest ingredients for our dishes",
    },
    {
      icon: Utensils,
      title: "Traditional Recipes",
      description: "Honoring time-tested recipes passed down through generations",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B2500] to-[#CC5500] text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl mb-6">Our Story</h1>
            <p className="text-xl text-white/90">
              A journey through India's rich culinary heritage, reimagined for the modern palate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-[#8B2500] mb-6">Where It All Began</h2>
            <p className="text-gray-700 mb-4">
              Every great journey starts with a passion — ours began with a deep love for food and the joy of bringing people together. The Grand Kadai was born from the dream of creating a space where tradition meets modernity, and flavors from across the world come alive under one roof.
            </p>
            <p className="text-gray-700 mb-4">
              What started as an idea to celebrate authentic Indian cooking soon evolved into a multi-cuisine experience that embraces global influences while preserving the soul of Indian hospitality. Every dish is crafted with the finest ingredients, authentic spices, and a touch of creativity that reflects our commitment to excellence.
            </p>
            <p className="text-gray-700">
              Today, The Grand Kadai stands as more than just a restaurant — it’s a celebration of culture, flavor, and togetherness. A place where every meal tells a story, every bite sparks nostalgia, and every guest feels at home.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <ImageWithFallback
              src="https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/1761979933821.JPG"
              alt="Indian cuisine"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <ImageWithFallback
              src="https://pcihjcuzwkpryzwsgpip.supabase.co/storage/v1/object/public/grandkadai-assets/1761979933754.JPG"
              alt="Indian spices"
              className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#FFF8E7] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#8B2500] mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to serving our guests
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B2500] to-[#CC5500] rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[#8B2500] mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={chefImage}
              alt="Jerad M"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-[#8B2500] mb-6">Meet Our Founder</h2>
            <h3 className="text-2xl text-[#CC5500] mb-4">Jerad M</h3>
            <p className="text-gray-700 mb-4">
             With over five years of experience managing Kenny’s Chinese Takeaways, Jerad M has built a reputation for blending culinary excellence with seamless team leadership. His journey in the food industry began with a simple love for flavor and hospitality, which quickly evolved into a passion for creating memorable dining experiences. Having led large kitchen and service teams, Jerad understands that great food is not just about recipes, it’s about the people, the precision, and the passion behind every plate.
            </p>
            <p className="text-gray-700 mb-4">
              Continuing his pursuit of culinary innovation, Jerad recently launched Jerry’s Kitchen, a bespoke catering venture that has successfully served more than ten major events within just two months. His vision for The Grand Kadai extends beyond a restaurant, it’s a space where tradition meets creativity, and guests experience the warmth of authentic hospitality paired with the sophistication of modern dining. Under his leadership, The Grand Kadai stands as a celebration of taste, teamwork, and timeless flavor
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-[#FFF8E7] px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600">Experience</p>
                <p className="text-[#8B2500]">5+ Years</p>
              </div>
              <div className="bg-[#FFF8E7] px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600">Events Served</p>
                <p className="text-[#8B2500]">10+</p>
              </div>
              <div className="bg-[#FFF8E7] px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600">Team Members Led</p>
                <p className="text-[#8B2500]">20+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
