"use client";

import ProductCard from "@/components/ProductCard";
import TitleItem from "@/components/TitleItem";
import TopBar from "@/components/TopBar";
import ValueCard from "@/components/ValueCard";
import { useRef } from "react";

export default function Home() {
  const section1Ref = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <TopBar />
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="text-xl font-bold">Lumina Ventures</div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => scrollToSection(servicesRef)}>Services</a>
            </li>
            <li>
              <a onClick={() => scrollToSection(productsRef)}>Products</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero h-[70vh] bg-[url('/images/pexels-pixabay-162539.jpg')]">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-4xl">
            <div className="mb-5 text-white text-4xl font-bold">
              We provide Real Estate consulting, Electrical products and
              Security Systems
            </div>
            <div
              onClick={() => scrollToSection(section1Ref)}
              className="mt-10 bg-green-800 hover:text-[#401716] text-sm hover:bg-white hover:border-[#401716] hover:border-2 hover:text-black cursor-pointer text-white px-4 py-2 text-center max-w-fit"
            >
              Read more
            </div>
          </div>
        </div>
      </div>

      <div ref={section1Ref}>
        <div className="px-5 md:px-20 w-full my-20 grid grid-cols-1 md:grid-cols-2 gap-y-4 items-center">
          <div
            style={{
              lineHeight: "5rem",
            }}
            className="text-center text-4xl md:text-7xl text-black mb-5"
          >
            High quality
            <br /> and Reliable
          </div>

          <div className="w-full text-xl text-justify leading-loose">
            Lumina Ventures operates in the lighting and electrical products
            industry, dedicated to enhancing living and working environments
            with high-quality, reliable, and efficient solutions.
          </div>
        </div>

        <div className="px-5 md:px-20 mt-10 w-full h-[0.2px] bg-[#401716]" />

        <div className="px-5 md:px-20 mt-20" ref={productsRef}>
          <TitleItem title="Our Products" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-8">
            <ProductCard
              title="Lighting"
              uniqueI="1"
              image="/images/pexels-valeriya-1123262.jpg"
              description="Our comprehensive lighting solutions are designed to enhance every aspect of your home or office environment. We offer a wide range of options, including energy-efficient LED bulbs that provide long-lasting illumination while reducing energy consumption. For those looking to integrate technology into their spaces, our smart lighting systems offer customizable and remote-controlled lighting that adapts to your lifestyle. We also specialize in energy-efficient lighting solutions that not only lower your energy bills but also contribute to a greener planet. To add a touch of style and elegance, our selection of decorative lighting fixtures can transform any room, creating the perfect ambiance and enhancing your interior design. Whether you're upgrading your current lighting or starting from scratch, our lighting solutions cater to all your needs with innovation and aesthetic appeal."
            />
            <ProductCard
              title="Electrics"
              uniqueI="2"
              image="/images/pexels-joy-singh-1008768-2764942.jpg"
              description="Our electrical solutions are tailored to ensure safety, functionality, and style in every space. We provide a wide selection of high-quality switches and sockets that are both reliable and aesthetically pleasing. Whether you're renovating your home or designing a new space, our products are designed to seamlessly integrate with your interior design while offering the durability and performance you need. From modern, sleek designs to classic, timeless options, our switches and sockets provide the perfect finishing touch to your electrical installations, ensuring that every connection is secure and every interaction is smooth and efficient."
            />
            <ProductCard
              title="⁠Security Systems"
              uniqueI="3"
              image="/images/pexels-scottwebb-430208.jpg"
              description="Our advanced security systems are designed to provide you with peace of mind by safeguarding your home or business. We offer state-of-the-art CCTV cameras that deliver clear, high-resolution footage, ensuring constant surveillance of your property. Our motion detectors are highly sensitive and can detect even the slightest movements, offering an additional layer of security by alerting you to any potential intrusions. To further enhance your protection, our alarm systems are meticulously designed to respond quickly and effectively in the event of a security breach, deterring intruders and alerting authorities. With our comprehensive security solutions, you can rest assured that your property is well-protected, day and night."
            />
            <ProductCard
              title="⁠Smart Home"
              uniqueI="4"
              image="/images/pexels-john-tekeridis-21837-1072851.jpg"
              description="Transform your living space into a cutting-edge, connected environment with our smart home solutions. Our home automation systems allow you to control various aspects of your home, from lighting to security, all from a single interface. With smart thermostats, you can easily manage your home's temperature, optimizing comfort while saving energy. Our voice-controlled devices bring convenience to your fingertips, enabling you to control lights, appliances, and more with simple voice commands. Additionally, our remote monitoring systems give you the power to oversee your home from anywhere in the world, ensuring that you stay connected and in control, no matter where you are. Embrace the future of living with our smart home solutions, designed to make your life easier, more efficient, and infinitely more convenient."
            />
          </div>
        </div>

        <div className="px-5 md:px-20 mt-20" ref={servicesRef}>
          <TitleItem title="Our Services" />
          <div className="collapse collapse-plus bg-base-200 border-2 border-[#401716] rounded-none mt-10">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Consultation
            </div>
            <div className="collapse-content">
              <p>
                Choosing the right lighting can be overwhelming, but our
                consultation services make the process simple and enjoyable. Our
                experienced lighting consultants provide personalized advice,
                guiding you through the selection of fixtures, bulbs, and
                placements that best suit your space and lifestyle. Whether
                you&apos;re renovating a single room or designing an entire
                home, we offer expert insights and recommendations to help you
                achieve the perfect balance of light and shadow. With our
                consultation, you can make informed decisions that enhance the
                beauty and functionality of your interiors.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200  border-2 border-[#401716] rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Real Estate
            </div>
            <div className="collapse-content">
              <p>
                Our real estate service provides comprehensive support to
                venture capital firms looking to optimize their property
                investments. We offer strategic guidance on identifying
                high-potential real estate opportunities, ensuring each
                investment aligns with the firm&apos;s overall growth
                objectives. Our expert team conducts thorough market analysis,
                due diligence, and financial modeling to maximize returns and
                minimize risk. Whether acquiring commercial properties,
                developing new projects, or managing existing assets, our
                service is tailored to meet the unique needs of venture capital
                firms, providing them with the insights and tools necessary to
                make informed, profitable decisions in the dynamic real estate
                market.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200  border-2 border-[#401716] rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Interior Design
            </div>
            <div className="collapse-content">
              <p>
                Lighting is more than just a functional element; it&apos;s a
                powerful tool that can transform the ambiance and style of any
                room. Our interior design services focus on creating custom
                lighting solutions that complement and elevate your overall
                design vision. We work closely with you to understand your
                aesthetic preferences, functional needs, and spatial dynamics,
                crafting a lighting plan that brings warmth, elegance, and
                personality to your interiors. From modern minimalism to classic
                luxury, our designs are tailored to make your spaces shine.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 border-2 border-[#401716] rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              ⁠Installation
            </div>
            <div className="collapse-content">
              <p>
                At our company, we believe that a well-executed installation is
                the cornerstone of any successful lighting design. Our expert
                team ensures that every light fixture is installed with
                precision and care, seamlessly integrating with your space.
                Whether it&apos;s a complex chandelier in a grand entryway or
                subtle recessed lighting in a cozy living room, we guarantee a
                flawless installation that enhances the beauty and functionality
                of your environment. We handle every detail, so you can enjoy
                perfectly illuminated spaces without worry.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 px-5 md:px-20 bg-green-900 py-16">
          <div className="text-center mb-20 font-bold text-4xl text-white">
            Our statistics
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="stats shadow text-white">
              <div className="stat flex flex-col items-center">
                <div className="stat-value">100+</div>
                <div className="stat-title">Clients</div>
              </div>
            </div>

            <div className="stats shadow text-white">
              <div className="stat flex flex-col items-center">
                <div className="stat-value">50,000 hours</div>
                <div className="stat-title">
                  Average Lifespan for our lights
                </div>
              </div>
            </div>

            <div className="stats shadow text-white">
              <div className="stat flex flex-col items-center">
                <div className="stat-value">75%</div>
                <div className="stat-title">Energy efficiency</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-20 mt-20">
          <TitleItem title="Our Values" />
          <div className="text-3xl w-full md:w-1/2 my-10">
            Our values enable us to work efficiently and clearly with our
            customers.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            <ValueCard
              title="⁠Innovation"
              customClass="md:col-start-2"
              description="We stay ahead of market trends with continuous research and development, ensuring our products incorporate the latest technologies."
            />
            <ValueCard
              title="⁠Quality"
              description="Our products are of high quality, designed to meet and exceed customer expectations."
            />
            <ValueCard
              title="⁠Customer Focus"
              description="We prioritize customer satisfaction through excellent after-sales service and support.
            "
            />
            <ValueCard
              title="Sustainability"
              description="Our products are designed to be energy-efficient and environmentally friendly.
            "
            />
            <div className="h-full w-full bg-cover bg-center bg-[url('/images/pexels-valeriya-1123262.jpg')]" />
          </div>
        </div>
      </div>
    </div>
  );
}
