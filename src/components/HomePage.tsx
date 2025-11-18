import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Award, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import buffetImage from "figma:asset/d0fdc2c6863b0d28a0d78fc47a0e6507c3830b66.png";
import biryaniImage from "figma:asset/9d8044b7330642654471f2e18175cf0d269749ea.png";
import thaliImage from "figma:asset/c56771d93f8542ca2ef3fba10b60c0f1c0b02426.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Fresh ingredients and authentic spices",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect ambiance for all occasions",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast delivery and dine-in service",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={buffetImage}
            alt="Restaurant buffet spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Animated floating spices */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#F4A700] rounded-full opacity-30"
              initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
              animate={{
                y: "-10vh",
                x: `${Math.random() * 100}vw`,
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl text-white mb-6 relative"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
              }}
              transition={{ 
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(244, 167, 0, 0.5), 0 0 40px rgba(244, 167, 0, 0.3), 0 0 60px rgba(244, 167, 0, 0.2)",
                    "0 0 30px rgba(244, 167, 0, 0.8), 0 0 50px rgba(244, 167, 0, 0.5), 0 0 70px rgba(244, 167, 0, 0.3)",
                    "0 0 20px rgba(244, 167, 0, 0.5), 0 0 40px rgba(244, 167, 0, 0.3), 0 0 60px rgba(244, 167, 0, 0.2)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                The Grand Kadai
              </motion.span>
            </motion.h1>
            <p className="text-xl md:text-3xl text-[#F4A700] mb-8 font-serif italic tracking-wide">
              Where Every Flavor Tells a Story
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
              Experience the authentic taste of India with our carefully crafted dishes,
              blending traditional recipes with modern culinary excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#8B2500] hover:bg-[#CC5500] text-white px-8"
                onClick={() => onNavigate("reservations")}
              >
                Reserve a Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E38F29] px-8 bg-[rgb(227,143,41)]"
                onClick={() => onNavigate("signature")}
              >
                Signature Dishes
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#8B2500] mb-4">
                A Grand Journey of Flavors
              </h2>
              <p className="text-gray-700 mb-6">
                At The Grand Kadai, we blend global flavors with India's rich culinary heritage. Our chefs craft every dish with the finest ingredients and authentic spices, offering a modern multi-cuisine experience that celebrates taste, tradition, and togetherness.
              </p>
              <p className="text-gray-700 mb-6">
                Wheather you're in the mood for classic Indian delicacies, bold Asian flavors, or comforting global favorites, The Grand Kadai has something special to satisfy every palate.
              </p>
              <Button
                className="bg-[#CC5500] hover:bg-[#8B2500] text-white"
                onClick={() => onNavigate("about")}
              >
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <ImageWithFallback
                src={thaliImage}
                alt="Indian thali with variety of dishes"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src={biryaniImage}
                alt="Biryani in traditional kadai"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#8B2500] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional dining experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B2500] to-[#CC5500] rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[#8B2500] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B2500] to-[#CC5500] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-4">Ready to Experience The Grand Kadai?</h2>
            <p className="text-xl mb-8 text-white/90">
              Visit us today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#8B2500] hover:bg-gray-100 px-8"
                onClick={() => onNavigate("gallery")}
              >
                Gallery
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#A4751B] px-8 bg-[rgb(227,143,41)]"
                onClick={() => onNavigate("contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
