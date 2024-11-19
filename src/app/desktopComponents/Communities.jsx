import Image from "next/image";
import img1 from "../../images/communities/11.jpg";
import img2 from "../../images/communities/22.jpg";
import img3 from "../../images/communities/33.jpg";
const Communities = () => {
  const communities = [
    {
      id: 1,
      name: "ARABIAN RANCHES",
      description: "Journey beyond the ordinary\n3 & 4 BEDROOM VILLAS",
      imageUrl: img1,
    },
    {
      id: 2,
      name: "Emaar Beachfront",
      description: "Redefining private beach living\n 1-5 BEDROOMS",
      imageUrl: img2,
    },
    {
      id: 3,
      name: "Rashid Yachts & Marina",
      description:
        "A Unique Heritage Sails Into The Future\n 1, 2 & 3 BEDROOM APARTMENTS",
      imageUrl: img3,
    },
  ];

  return (
    <section className="container py-10 pt-20">
      <h2 className="mb-8 text-center text-primaryGreen">Nearby Communities</h2>
      <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <div key={community.id} className="w-full mx-auto">
            <div className="w-full">
              <Image
                src={community.imageUrl}
                alt={community.name}
                width={370}
                height={480}
                className="object-cover w-full h-auto max-w-full"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-center uppercase text-primaryGreen">
                {community.name}
              </h3>
              <p className="text-xs text-center whitespace-pre-line text-primaryGreen">
                {community.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Communities;
