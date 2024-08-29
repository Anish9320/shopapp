"use client";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row p-6 md:p-14">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl text-gray-500 font-bold">
            About Incredible India
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700">
            Interesting and Intriguing, India offers incredible holiday
            experiences through its cultural, topography, and wildlife diversity.
            With these amazing and unique experiences, this South Asian country
            conveniently finds its way into the world tourism map as one of the
            finest destinations for a holistic vacation. India establishes its
            identity as the country of architectural masterpieces, making it an
            ideal travel destination to plan a heritage tour in the world. While
            the Taj Mahal makes for the major draw on an India tour, there are a
            plethora of monuments and edifices in every India travel guide
            displaying the fine architecture and grandiose of different eras in
            the country.
            <br /><br />
            The diverse Indian topography adorned with the impressive
            Himalayas; long stretches of coastline; expansive hot, cold, and white
            salt deserts; dense forests; alpine meadows and lakes; and scenic
            waterfalls pique the tourists’ interest. Along with the best nature
            sightseeing tours, India offers an opportunity for visitors to have a
            little adventure of their own. The numerous spell-binding and
            less-trodden trails give trekking tour opportunities in South Asia
            unlike any other.
            <br /><br />
            India Tours offers a chance to explore its
            biodiversity in the country's many national parks and wildlife
            reserves. An enthralling experience entails in the India wildlife tour
            packages that take tourists to the habitats of Royal Bengal Tigers,
            one-horned rhinos, and snow leopards amongst many rare, endangered,
            and unique species of flora and fauna.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            className="w-full max-w-sm md:max-w-md"
            src="/about.png"
            width={400}
            height={700}
            alt="About Incredible India"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
