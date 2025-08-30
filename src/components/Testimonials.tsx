import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Student",
      location: "New York, USA",
      image: "👩‍🎓",
      rating: 5,
      text: "UniSign transformed my learning experience. The 3D models helped me understand hand movements perfectly, and the AI feedback kept me motivated every step of the way."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Teacher",
      location: "California, USA",
      image: "👨‍🏫",
      rating: 5,
      text: "As a sign language instructor, I recommend UniSign to all my students. The interactive quizzes and progress tracking make it easy to supplement classroom learning."
    },
    {
      name: "Emma Thompson",
      role: "Parent",
      location: "London, UK", 
      image: "👩‍💼",
      rating: 5,
      text: "My daughter loves using UniSign. It's amazing to see her confidence grow as she learns to communicate more effectively. The app is intuitive and engaging."
    },
    {
      name: "David Kim",
      role: "Student",
      location: "Seoul, Korea",
      image: "👨‍💻",
      rating: 5,
      text: "The sign-to-text AI feature is incredible! It gives me instant feedback on my signing and helps me improve faster than I ever thought possible."
    },
    {
      name: "Lisa Garcia",
      role: "Accessibility Advocate",
      location: "Toronto, Canada",
      image: "👩‍⚕️",
      rating: 5,
      text: "UniSign is a game-changer for accessibility education. The technology is cutting-edge, and the impact on the deaf and mute community is remarkable."
    },
    {
      name: "Ahmed Hassan",
      role: "Student",
      location: "Dubai, UAE",
      image: "👨‍🎓",
      rating: 5,
      text: "Learning sign language with UniSign has opened up new opportunities for me. The video lessons are clear, and the community support is outstanding."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-feature">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from students, teachers, and advocates who are using UniSign to break 
            communication barriers and build more inclusive communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 gradient-card shadow-card hover:shadow-feature transition-all duration-300 animate-fade-in border-0 group">
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Be the First to Experience UniSign
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our community of early supporters and be among the first to experience the future of sign language learning.
            </p>
            <div className="flex justify-center">
              <div className="text-6xl animate-bounce">🚀</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};