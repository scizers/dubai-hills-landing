import Image from "next/image";
import img1 from "../../images/communities/1.jpg";
import img2 from "../../images/communities/2.jpg";
import img3 from "../../images/communities/3.jpg";
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
    <section className="py-10">
      <h2 className="mb-8 text-center text-primaryGreen">Nearby Communities</h2>
      <div className="flex px-6 space-x-5 overflow-x-auto">
        {communities.map((community) => (
          <div
            key={community.id}
            className="min-w-[252px] flex-shrink-0  overflow-hidden "
          >
            <div className="relative w-full h-[326px]">
              <Image
                src={community.imageUrl}
                alt={community.name}
                layout="fill"
                objectFit="cover"
                className="rounded-[10px]"
              />
            </div>
            <div className="p-4 pt-2">
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
