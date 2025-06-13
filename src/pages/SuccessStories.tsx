
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Calendar } from "lucide-react";

const SuccessStoriesPage = () => {
  const successStories = [
    {
      id: 1,
      brideName: "Priya",
      groomName: "Rahul",
      weddingDate: "March 2024",
      location: "Mumbai",
      story: "We met through Rishta Sathi and instantly connected over our shared love for travel and music. After 6 months of getting to know each other, we knew we were meant to be together!",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      id: 2,
      brideName: "Anita",
      groomName: "Vikram",
      weddingDate: "January 2024",
      location: "Delhi",
      story: "Thanks to Rishta Sathi's background verification feature, we felt secure throughout our courtship. The platform helped us find the perfect match with complete trust and transparency.",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      id: 3,
      brideName: "Kavya",
      groomName: "Arjun",
      weddingDate: "December 2023",
      location: "Bangalore",
      story: "The compatibility matching was incredible! We had 95% compatibility and it showed - we share the same values, dreams, and life goals.",
      image: "/placeholder.svg",
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real couples, real love stories. Discover how Rishta Sathi helped thousands find their perfect match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={`${story.brideName} & ${story.groomName}`}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-red-500">
                  <Heart className="w-3 h-3 mr-1" />
                  Just Married
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  {story.brideName} & {story.groomName}
                </CardTitle>
                <CardDescription className="text-center flex items-center justify-center space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.weddingDate}
                  </span>
                  <span>{story.location}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="flex items-center justify-center">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SuccessStoriesPage;
