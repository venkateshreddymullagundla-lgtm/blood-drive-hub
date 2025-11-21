import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const eligibilityCriteria = [
    "Age between 18-65 years",
    "Weight minimum 50 kg",
    "Hemoglobin level minimum 12.5 g/dL",
    "No major illness or surgery in last 6 months",
    "No tattoos or piercings in last 6 months",
    "Not pregnant or breastfeeding",
    "No alcohol consumption 24 hours before donation",
    "Good overall health",
  ];

  const donationSteps = [
    {
      step: 1,
      title: "Registration",
      description: "Fill out a simple registration form with your details and medical history.",
    },
    {
      step: 2,
      title: "Health Screening",
      description: "A quick health check including blood pressure, pulse, and hemoglobin test.",
    },
    {
      step: 3,
      title: "Donation",
      description: "The actual donation takes only 8-10 minutes. Relax while you save lives!",
    },
    {
      step: 4,
      title: "Refreshment",
      description: "Rest for a few minutes and enjoy refreshments before you leave.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Blood Donation</h1>
          <p className="text-lg text-muted-foreground">
            Learn about the importance of blood donation and how you can contribute to saving lives.
          </p>
        </div>

        {/* Why It Matters */}
        <section className="mb-16 animate-fade-in">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Importance of Blood Donation
              </h2>
              <p className="text-muted-foreground mb-4">
                Blood donation is a simple act that can have a profound impact on the lives of others.
                Every two seconds, someone in our country needs blood. Blood is essential for surgeries,
                cancer treatment, chronic illnesses, and traumatic injuries.
              </p>
              <p className="text-muted-foreground mb-4">
                A single donation can save up to three lives. Despite the constant need for blood,
                only a small percentage of eligible donors actually donate. Your contribution can make
                all the difference between life and death for patients in need.
              </p>
              <p className="text-muted-foreground">
                Blood cannot be manufactured – it can only come from generous donors like you. By
                donating blood, you're not just giving blood; you're giving someone another birthday,
                another chance to see their loved ones, and another opportunity to make memories.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Eligibility Requirements
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                To ensure the safety of both donors and recipients, please review these basic
                eligibility criteria:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Note: This is a general guide. Final eligibility will be determined during the
                health screening process.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Donation Process */}
        <section className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            The Donation Process
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {donationSteps.map((item, index) => (
              <Card
                key={index}
                className="hover:card-shadow-hover smooth-transition animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facts Section */}
        <section className="mt-16 animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Facts</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">10-12 mins</p>
                  <p className="text-sm text-muted-foreground">Total donation time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">350-450ml</p>
                  <p className="text-sm text-muted-foreground">Blood collected per donation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">3 months</p>
                  <p className="text-sm text-muted-foreground">Waiting period between donations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
