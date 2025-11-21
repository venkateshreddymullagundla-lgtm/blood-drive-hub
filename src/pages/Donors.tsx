import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Droplet } from "lucide-react";

interface Donor {
  id: string;
  name: string;
  age: string;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  registeredDate: string;
}

const Donors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("all");

  const bloodGroups = ["all", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  useEffect(() => {
    // Load donors from localStorage
    const storedDonors = JSON.parse(localStorage.getItem("donors") || "[]");
    setDonors(storedDonors);
    setFilteredDonors(storedDonors);
  }, []);

  useEffect(() => {
    // Filter donors by blood group
    if (selectedBloodGroup === "all") {
      setFilteredDonors(donors);
    } else {
      setFilteredDonors(donors.filter((donor) => donor.bloodGroup === selectedBloodGroup));
    }
  }, [selectedBloodGroup, donors]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Available Donors</h1>
          <p className="text-lg text-muted-foreground">
            Find registered blood donors in your area
          </p>
        </div>

        {/* Filter Section */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="text-sm font-medium whitespace-nowrap">
                  Filter by Blood Group:
                </label>
                <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group === "all" ? "All Blood Groups" : group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-sm text-muted-foreground">
                  {filteredDonors.length} donor(s) found
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donors List */}
        <div className="max-w-4xl mx-auto">
          {filteredDonors.length === 0 ? (
            <Card className="animate-fade-in">
              <CardContent className="p-12 text-center">
                <Droplet className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Donors Found</h3>
                <p className="text-muted-foreground mb-6">
                  {selectedBloodGroup === "all"
                    ? "No donors have registered yet."
                    : `No donors found for blood group ${selectedBloodGroup}.`}
                </p>
                <Button onClick={() => (window.location.href = "/register")}>
                  Register as Donor
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredDonors.map((donor, index) => (
                <Card
                  key={donor.id}
                  className="hover:card-shadow-hover smooth-transition animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold">{donor.name}</h3>
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {donor.bloodGroup}
                          </span>
                        </div>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span className="text-sm">{donor.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span className="text-sm">{donor.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{donor.address}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          onClick={() => (window.location.href = `tel:${donor.phone}`)}
                        >
                          Contact Donor
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Age: {donor.age} years
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donors;
