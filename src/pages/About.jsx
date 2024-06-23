import React from "react";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="flex md:p-6 p-4 items-center  gap-4 flex-col w-full min-h-screen">
        <div className="w-full gap-1 flex flex-col justify-start">
          <h1 className="text-[#009F6B] md:text-2xl text-lg font">
            1. Our Story
          </h1>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            At Adify.com, our journey began with a simple idea: to create a
            platform that connects people, businesses, and opportunities. We
            envisioned a space where classified ads could thrive, where buyers
            and sellers could find each other effortlessly, and where
            communities could come together.
          </p>
        </div>
        <div className="w-full gap-1 flex flex-col justify-start">
          <h1 className="text-[#009F6B] md:text-2xl text-lg font">
            2. What We Offer
          </h1>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            Our mission is to empower individuals and businesses by providing a
            seamless and efficient classified experience. Whether you’re looking
            to buy, sell, or explore, Adify.com is your go-to destination. From
            real estate and jobs to services and events, we’ve got you covered.
          </p>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            Adify.com has been created with a simple yet highly effective
            purpose: to connect people in need. Our commitment is to make this
            platform user-friendly for everyone. Not only do we market on our
            website, but we also extend our reach to platforms like Facebook,
            Instagram, WhatsApp, and Telegram.
          </p>
        </div>
        <div className="w-full gap-1 flex flex-col justify-start">
          <h1 className="text-[#009F6B] md:text-2xl text-lg font">
            3. Why Choose Us?
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="md:text-lg text-sm text-justify font-light font2">
              Transparency: We believe in openness and honesty. Our platform
              ensures transparency in every transaction.
            </li>
            <li className="md:text-lg text-sm text-justify font-light font2">
              User-Centric: You, our users, are at the heart of everything we
              do. We’re committed to enhancing your experience.
            </li>
            <li className="md:text-lg text-sm text-justify font-light font2">
              Quality Listings:We curate high-quality listings to ensure you
              find what you’re looking for quickly and easily.
            </li>
            <li className="md:text-lg text-sm text-justify font-light font2">
              Community: Adify.com is more than a website; it’s a community.
              Join us in shaping the future of classifieds.
            </li>
          </ul>
        </div>
        <div className="w-full gap-1 flex flex-col justify-start">
          <h1 className="text-[#009F6B] md:text-2xl text-lg font">
            4. Meet Our Team
          </h1>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            behind the scenes, a dedicated team works tirelessly to make
            Adify.com a reality. We’re passionate about connecting people and
            creating value. Our dedicated team has put immense effort into
            creating a sleek and elegant design. The success of this initiative
            rests on the minds of expert software programmers.
          </p>
        </div>
        <div className="w-full gap-1 flex flex-col justify-start">
          <h1 className="text-[#009F6B] md:text-2xl text-lg font">
            5. Get in Touch
          </h1>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            Have questions? Want to collaborate?
          </p>
          <p className=" md:text-lg text-sm text-justify font-light font2">
            Reach out to us—we’d love to hear from you! Feel free to customize
            this content to align with your brand’s unique voice and vision. If
            you need further assistance, don’t hesitate to ask.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
