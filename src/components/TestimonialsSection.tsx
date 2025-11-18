import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      badge: "Culinary Masterpiece",
      badgeColor: "bg-[#F4A700] text-white",
      review: "The butter chicken is absolutely divine, and their Thai green curry is equally impressive! The way they blend Indian spices with Asian flavors is genius. A true multi-cuisine gem!",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      badge: "Flavor Perfection",
      badgeColor: "bg-[#CC5500] text-white",
      review: "Being Chinese, I'm picky about Asian food, but their Szechuan dishes are authentic! And the Indian biryani? Outstanding. This place does justice to every cuisine they serve.",
      date: "1 month ago",
    },
    {
      name: "Sarah Johnson",
      badge: "Family Favorite",
      badgeColor: "bg-[#8B2500] text-white",
      review: "Perfect for our diverse family! Dad loves the tandoori, mom adores the pasta, and the kids can't get enough of the Asian noodles. Everyone leaves happy!",
      date: "3 weeks ago",
    },
    {
      name: "Rahul Verma",
      badge: "Exceptional Experience",
      badgeColor: "bg-[#F4A700] text-white",
      review: "The Grand Kadai never disappoints. Their Indian curries are authentic, the Continental dishes are refined, and the ambiance is perfect for any occasion. Consistently excellent!",
      date: "1 week ago",
    },
    {
      name: "Maria Rodriguez",
      badge: "Simply Divine",
      badgeColor: "bg-[#CC5500] text-white",
      review: "I came for the tikka masala, stayed for everything else! Their menu variety is incredible - from classic Indian to Mediterranean flavors. The service and presentation are top-notch.",
      date: "2 months ago",
    },
    {
      name: "James Anderson",
      badge: "Unforgettable Fusion",
      badgeColor: "bg-[#8B2500] text-white",
      review: "The fusion dishes here are creative without losing authenticity. The paneer tikka pizza and Indo-Chinese starters are must-tries. A unique dining experience that honors every cuisine!",
      date: "3 weeks ago",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#8B2500] to-[#CC5500] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">What Our Guests Say</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Badge className={`${testimonial.badgeColor} px-3 py-1`}>
                      {testimonial.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#8B2500]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
