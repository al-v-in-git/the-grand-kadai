import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { CalendarIcon, Clock, Users, Phone, Mail, User } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { supabase } from "../lib/supabase";

export function ReservationsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    specialRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone || !formData.guests || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    try {
      // Prepare data for Supabase
      const reservationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: parseInt(formData.guests),
        date: selectedDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
        time: formData.time,
        message: formData.specialRequests || null,
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('reservations')
        .insert([reservationData]);

      if (error) {
        console.error('Supabase error:', error);
        toast.error("Failed to submit reservation. Please try again.");
        return;
      }

      toast.success("Thank you for reaching out — we'll get back to you soon!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        time: "",
        specialRequests: "",
      });
      setSelectedDate(undefined);
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
    "10:00 PM"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#FFF8E7] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-[#8B2500] mb-4">Reserve Your Table</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience fine dining at The Grand Kadai. Book your table now and let us make your dining experience memorable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-2xl border-[#CC5500]/20">
              <CardHeader className="bg-gradient-to-r from-[#8B2500] to-[#CC5500] text-white">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  Reservation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-[#8B2500]">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-[#CC5500]/30 focus:border-[#CC5500]"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-[#8B2500]">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-[#CC5500]/30 focus:border-[#CC5500]"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-[#8B2500]">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-[#CC5500]/30 focus:border-[#CC5500]"
                      required
                    />
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2 text-[#8B2500]">
                      <Users className="w-4 h-4" />
                      Number of Guests *
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="border-[#CC5500]/30 focus:border-[#CC5500]">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Time Slot */}
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-[#8B2500]">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="border-[#CC5500]/30 focus:border-[#CC5500]">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="requests" className="text-[#8B2500]">
                      Special Requests
                    </Label>
                    <Textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special requests or dietary requirements?"
                      className="border-[#CC5500]/30 focus:border-[#CC5500] min-h-24"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#8B2500] to-[#CC5500] hover:from-[#CC5500] hover:to-[#8B2500] text-white py-6"
                  >
                    Reserve Table
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Calendar & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Calendar */}
            <Card className="shadow-xl border-[#CC5500]/20">
              <CardHeader className="bg-[#FFF8E7]">
                <CardTitle className="text-[#8B2500]">Select Date</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                  className="rounded-md border-[#CC5500]/20"
                />
              </CardContent>
            </Card>

            {/* Information Card */}
            <Card className="shadow-xl border-[#CC5500]/20 bg-gradient-to-br from-[#8B2500] to-[#CC5500] text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl">Reservation Policy</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4A700]">•</span>
                    <span>Reservations are confirmed based on availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4A700]">•</span>
                    <span>Please arrive within 15 minutes of your reservation time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4A700]">•</span>
                    <span>For parties of 10 or more, please call us directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4A700]">•</span>
                    <span>Cancellations must be made at least 2 hours in advance</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm">Need assistance?</p>
                  <p className="text-lg">Call us: +91 97428 33448</p>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="shadow-xl border-[#CC5500]/20">
              <CardHeader className="bg-[#FFF8E7]">
                <CardTitle className="text-[#8B2500]">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-[#8B2500]">09:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday - Sunday</span>
                    <span className="text-[#8B2500]">09:00 AM - 11:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-700">Lunch Service</span>
                    <span className="text-[#8B2500]">12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Dinner Service</span>
                    <span className="text-[#8B2500]">6:00 PM - 11:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
