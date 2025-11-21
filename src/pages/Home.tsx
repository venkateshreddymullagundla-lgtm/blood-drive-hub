import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import { Heart, Users, Droplets, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Donate Blood, Save Lives
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Every donation can save up to three lives. Join our community of heroes
              and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-lg px-8 hover:scale-105 smooth-transition"
                >
                  Become a Donor
                </Button>
              </Link>
              <Link to="/donors">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 hover:scale-105 smooth-transition"
                >
                  Find Donors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon={Heart} value="1,247" label="Lives Saved" />
            <StatsCard icon={Users} value="856" label="Registered Donors" />
            <StatsCard icon={Droplets} value="2,341" label="Blood Units Collected" />
            <StatsCard icon={Award} value="142" label="Active Campaigns" />
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Blood Donation Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-scale-in">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                <p className="text-muted-foreground">
                  One donation can help save up to three lives in emergency situations.
                </p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Help Community</h3>
                <p className="text-muted-foreground">
                  Support patients undergoing surgeries, cancer treatment, and more.
                </p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Need</h3>
                <p className="text-muted-foreground">
                  Blood is needed every two seconds. Your donation is always in demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of donors who are already saving lives. Register today and
              become a hero in someone's story.
            </p>
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 hover:scale-105 smooth-transition">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
