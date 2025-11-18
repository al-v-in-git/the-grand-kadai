import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Users, MessageCircle, PartyPopper } from "lucide-react";
import { toast } from "sonner@2.0.3";
import worldMapImage from "figma:asset/fb4ce77e06651d28be51af3bee5495db425d7676.png";
import { supabase } from "../lib/supabase";

export function ContactPage() {
  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Prepare data for Supabase
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: inquiryType || "General Inquiry",
        message: formData.message,
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (error) {
        console.error('Supabase error:', error);
        toast.error("Failed to submit message. Please try again.");
        return;
      }

      toast.success("Thank you for reaching out — we'll get back to you soon!");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setInquiryType("");
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error("An error occurred. Please try again.");
    }
  };

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
            <h1 className="text-5xl mb-6">Visit Us</h1>
            <p className="text-xl text-white/90">
              We'd love to see you! Book a table or just drop by
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl text-[#8B2500] mb-6">Get In Touch</h2>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#8B2500] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#8B2500] mb-2">Address</h3>
                    <p className="text-gray-700">
                      #28/4,opp. Regal Hospital,<br /> Chokkanahalli Bus Stop, Hegde Nagar Main Road,<br /> Bengaluru-560064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#CC5500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#8B2500] mb-2">Phone</h3>
                    <p className="text-gray-700">
                      +91 97428 33448<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F4A700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#8B2500] mb-2">Email</h3>
                    <p className="text-gray-700">
                      jerryjothi@yahoo.com<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5C4033] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#8B2500] mb-2">Opening Hours</h3>
                    <p className="text-gray-700">
                      Monday - Sunday<br />
                      09:00 AM - 11:00 PM<br />
                      <span className="text-sm text-gray-600">(Kitchen closes at 10:30 PM)</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B2500]">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest dishes, events, and special offers
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-[#8B2500] to-[#CC5500] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-[#8B2500] to-[#CC5500] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-[#8B2500] to-[#CC5500] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact/Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* General Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B2500] flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        id="fname"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        id="lname"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select value={inquiryType} onValueChange={setInquiryType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Feedback">Feedback</SelectItem>
                        <SelectItem value="Private Events">Private Events</SelectItem>
                        <SelectItem value="Catering Services">Catering Services</SelectItem>
                        <SelectItem value="Career Opportunities">Career Opportunities</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us what you'd like to know..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#8B2500] hover:bg-[#CC5500] text-white"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Private Events Card */}
            <Card className="bg-gradient-to-br from-[#FFF8E7] to-white border-2 border-[#CC5500]/30">
              <CardHeader>
                <CardTitle className="text-[#8B2500] flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" />
                  Jerry's Kitchen (Catering)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-sm">
                  Planning a special celebration? We offer:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CC5500] mt-0.5">•</span>
                    <span>Custom menu planning with our chef</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CC5500] mt-0.5">•</span>
                    <span>Full-service catering for off-site events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CC5500] mt-0.5">•</span>
                    <span>Corporate events & business meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CC5500] mt-0.5">•</span>
                    <span>Weddings, birthdays, anniversaries & more</span>
                  </li>
                </ul>
                <div className="pt-3 border-t border-[#CC5500]/20">
                  <p className="text-sm text-gray-600">
                    <strong className="text-[#8B2500]">Contact our events team:</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    📞 +91 97428 33448<br />
                    ✉️ jerryjothi@yahoo.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="h-96 flex items-center justify-center relative">
            <img 
              src={worldMapImage} 
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="text-center p-8 relative z-10">
              <MapPin className="w-16 h-16 text-[#8B2500] mx-auto mb-4" />
              <p className="text-gray-900 mb-2 text-xl">Find Us Here</p>
              <p className="text-gray-800">
                #28/4,opp. Regal Hospital, Chokkanahalli Bus Stop, Hegde Nagar Main Road, Bengaluru-560064
              </p>
              <Button
                className="mt-4 bg-[#8B2500] hover:bg-[#CC5500] text-white"
                onClick={() => window.open('https://maps.app.goo.gl/FNPBe3o9DeWB4bkY7', '_blank')}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
