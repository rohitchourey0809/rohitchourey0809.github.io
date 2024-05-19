import React, { useEffect, useState } from "react";
import "./Nav.css";
import LocomotiveScroll from "locomotive-scroll";
import ScrollFeatures from "./Scroll";
import H1 from "../H1.avif";
import H2 from "../H2.avif";
import H3 from "../H3.avif";
import H4 from "../H4.avif";
import ScrollFeaturespart from "./ScrollFeaturespart";
import H5 from "../H5.png";

const Sectionb = () => {
  const details = [
    {
      src: "./first.png",
      heading: "Convert more customers at scale",
      subheading:
        "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.",
    },
    {
      src: "./second.png",
      heading: "Discover new ways to automate",
      subheading:
        "Get a head start with pre-built journeys that help you cross-sell your products, recover carts.",
    },
    {
      src: "./third.png",
      heading: "Keep your emails relevant and your brand growing",
      subheading:
        "Deliver personalized emails based on their buying behavior, survey responses,etc.",
    },
  ];

  const detailspart = [
    {
      src: "./first.png",
      heading: "Predict who’s likely to buy again",
      subheading:
        "Create segments of customers based on their lifetime value and likelihood to purchase.",
    },
    {
      src: "./second.png",
      heading: "Build customers for life",
      subheading:
        "Use our intelligent predictions to tighten your targeting strategy,repeat sales.",
    },
  ];

  const [second_details, setsecond_details] = useState([
    {
      src: "./first.png",
      heading: "Predict who’s likely to buy again",
      subheading:
        "Create segments of customers based on their lifetime value and likelihood to purchase.",
    },
    {
      src: "./second.png",
      heading: "Build customers for life",
      subheading:
        "Use our intelligent predictions to tighten your targeting strategy,repeat sales.",
    },
  ]);

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-auto font-serif mt-auto bg-custom4 mb-20 p-10 ">
        <div className="card1 h-full flex flex-col items-center">
          <div className="top1 w-full h-[15%] p-5">
            <h1 className="text-2xl text-center">
              Convert with email automations
            </h1>
          </div>
          <img
            src={H1}
            alt="ImageAlt0Text"
            className="w-full h-auto hover:scale-110 transition-transform duration-300"
          />
          <div className="w-full h-30 down flex flex-col justify-center bg-yellow-400 p-4 mt-0 py-2">
            <p className="text-[1.2rem] mt-0 ">
              Boost orders and customer lifetime value by dynamically
              personalizing emails based on browsing and purchase data.
            </p>
            <button className="mx-4 my-4 border-2 border-black rounded-full h-[3rem] w-[15rem] text-[0.9rem]">
              Explore marketing automation
            </button>
          </div>
        </div>
        <div className="card1 h-full flex flex-col items-center">
          <div className="top1 w-full h-[15%] p-5">
            <h1 className="text-2xl text-center">
              Create faster with generative AI
            </h1>
          </div>
          <img
            src={H2}
            alt="ImageAlt0Text"
            className="w-full h-auto hover:scale-110 transition-transform duration-300"
          />
          <div className="w-full h-30 down flex flex-col justify-center bg-yellow-400 p-4 mt-0">
            <p className="text-[1.2rem] mt-4">
              Effortlessly create on-brand content with generative AI tools and
              choose from expertly designed templates.
            </p>
            <button className="mx-4 my-4 border-2 border-black rounded-full h-[3rem] w-[15rem] text-[0.9rem]">
              Explore AI tools
            </button>
          </div>
        </div>
        <div className="card1 h-full flex flex-col items-center">
          <div className="top1 w-full h-[15%] p-5">
            <h1 className="text-2xl text-center">Refine with Segmentation</h1>
          </div>
          <img
            src={H3}
            alt="ImageAlt0Text"
            className="w-full h-auto hover:scale-110 transition-transform duration-300"
          />
          <div className="w-full h-30 down flex flex-col justify-center bg-yellow-400 p-4 mt-0">
            <p className="text-[1.2rem] mt-4">
              Target customers with advanced logic like spend amounts, buying
              behavior, and predicted attributes.
            </p>
            <button className="mx-4 my-4 border-2 border-black rounded-full h-[3rem] w-[15rem] text-[0.9rem]">
              Explore audience management
            </button>
          </div>
        </div>
        <div className="card1 h-full flex flex-col items-center">
          <div className="top1 w-full h-[15%] p-5">
            <h1 className="text-2xl text-center">
              {" "}
              Optimize with analytics and reporting
            </h1>
          </div>
          <img
            src={H4}
            alt="ImageAlt0Text"
            className="w-full h-auto hover:scale-110 transition-transform duration-300"
          />
          <div className="w-full h-30 down flex flex-col justify-center bg-yellow-400 p-4 mt-0">
            <p className="text-[1.2rem] mt-4">
              Analyze performance with custom reports, funnel visualizations,
              and industry benchmarking.
            </p>
            <button className="mx-4 my-4 border-2 border-black rounded-full h-[3rem] w-[15rem] text-[0.9rem]">
              Explore analytics & reporting
            </button>
          </div>
        </div>
      </div>

      <div className="thirdcontainer overflow-x-hidden mt-20 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row font-bold bg-custom3 text-white p-8 md:p-10 lg:p-20 gap-8">
            <div className="md:w-full lg:w-1/3 md:pr-0 lg:pr-8">
              <b className="text-xl md:text-4xl max-w-sm md:max-w-none">
                Find out why we’re best-in-class
              </b>
              <p className="text-base md:text-lg text-wrap max-w-sm md:max-w-lg mt-4 md:mt-10">
                The #1 email marketing and automations platform* that recommends
                ways to get more opens, clicks, and sales.
              </p>
            </div>

            <div className="md:w-full lg:w-1/3 mt-8 md:mt-0 lg:mt-0">
              <div>
                <p className="text-sm md:text-base">
                  Up to 39x ROI seen by Mailchimp users*
                </p>
                <p className="text-sm md:text-base">seen by Mailchimp users*</p>
              </div>
              <div className="mt-4 md:mt-8">
                <p className="text-sm md:text-base">12M+ Users of</p>
                <p className="text-sm md:text-base">Mailchimp globally</p>
              </div>
            </div>

            <div className="md:w-full lg:w-1/3 mt-8 md:mt-0 lg:mt-0">
              <div>
                <p className="text-sm md:text-base">22 years experience</p>
                <p className="text-sm md:text-base">
                  helping businesses sell more
                </p>
              </div>
              <div className="mt-4 md:mt-8">
                <p className="text-sm md:text-base">$1.7K per campaign</p>
                <p className="text-sm md:text-base">generated on average*</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" wrapper">
        <div className="fourthcontainer overflow-x-auto">
          <div className="module--content align--center">
            <div className="flex flex-col md:flex-row gap-4 align-center p-4 md:p-20">
              <div className="flex flex-col gap-4 justify-center p-4 md:p-10 max-w-full">
                <h2 className="font-bold text-2xl md:text-4xl font-serif">
                  Get started easily with a personalized product tour
                </h2>
                <p className="text-wrap">
                  An onboarding specialist is here to help you get started with
                  confidence—it’s included with Standard and Premium plans.*
                </p>
                <div className="cta__holder cta__p23_arrow_link">
                  <a
                    className="ctaArrow"
                    href="/services/onboarding/"
                    aria-label="Learn more about onboarding"
                  >
                    Learn more about onboarding
                  </a>
                </div>
              </div>
              <div className="column column2">
                <figure
                  className="image animate--show max-w-full"
                  data-animate="fade-up-in"
                >
                  <img
                    src="https://eep.io/images/yzco4xsimv0y/eeOxTgGvLZjag4xB9SK7h/18bbe5f5514e075ae697322976223c1f/Onboarding_Placement_-_Woman_on_phone_and_laptop.png?w=640&amp;q=70"
                    alt="A small business owner reaching out to her Mailchimp Onboarding Specialist."
                    className="w-full h-auto max-w-full"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll mt-2 overflow-x-auto">
        <ScrollFeatures details={details} />
      </div>
      <div className="mt-2 mb-5">
        <div className="component-7 h-screen w-full flex font-mono text-wrap overflow-hidden">
          <div className="right w-1/2 h-full bg-yellow-400">
            <div className="mt-32 mx-auto w-3/4">
              <p className="text-4xl font-bold">
                Keep customers ready to buy with engaging content
              </p>
              <p className="ml-8 my-5 text-2xl">Content Optimizer</p>
              <p>
                Learn how your emails compare to the top-performing campaigns in
                your industry and get data-driven suggestions for improving your
                copy, imagery, and layout.
              </p>
              <hr className="my-5 border-black" />
              <p className="ml-8 my-5 ">Creative Assistant</p>
              <hr className="my-5 border-black" />
              <p className="ml-8 my-5 ">GDPR ready tools</p>
            </div>
          </div>
          <img src={H5} alt="" className="h-full w-1/2" />
        </div>
      </div>
      <center className="font-bold text-4xl mt-4 p-8 ">
        Get up to 141% more revenue* with our Customer Lifetime Value and
        Likelihood to Purchase segments
      </center>
      <div className="scroll mt-2 overflow-x-auto">
        <ScrollFeaturespart details={detailspart} />
      </div>

      <div className="fifthcontainer mt-20">
        <div className="flex justify-center flex-col md:flex-row">
          <div className="leftcont flex flex-col items-center md:w-3/4">
            <h2 className="h1 font-sans text-2xl">
              Try our Standard plan for <em>50% off</em>!
            </h2>
            <div className="singlePlan__desktopCopy copy-medium mb-4 md:mb-0 hidden md:block">
              <p>
                Spend less to grow more with 50% off for 12 months, even if you
                change to our <a href="/pricing/premium-details/">Premium</a> or{" "}
                <a href="/pricing/essentials-details/">Essentials</a> plans.
                Cancel or downgrade to our basic{" "}
                <a href="/pricing/free-details/">Free</a> plan at any time.
              </p>
            </div>
            <div className="singlePlan__mobileCopy copy-medium mb-4 md:mb-0 block md:hidden">
              <p>
                Enjoy 50% off for 12 months, even if you change to a{" "}
                <a href="/pricing/premium-details/">Premium</a> or{" "}
                <a href="/pricing/essentials-details/">Essentials</a> plan.
                Cancel or downgrade to a{" "}
                <a href="/pricing/free-details/">Free</a> plan at any time.
              </p>
            </div>

            <ul className="singlePlan__featureList mb-4 ">
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Generative AI features
              </li>
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Advanced segmentation &amp; reporting
              </li>
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Enhanced automations
              </li>
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Custom-coded email templates
              </li>
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Data-driven optimization tools
              </li>
              <li className="featureList__feature flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon--yes mr-2"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7072 1.70712L6.00008 12.4142L0.792969 7.20712L2.20718 5.79291L6.00008 9.5858L15.293 0.292908L16.7072 1.70712Z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="sr-only">Included</p>
                Personalized onboarding
              </li>
            </ul>

            <div className="singlePlan__cta--desktop">
              <a
                className="ctaArrow"
                href="/pricing/marketing/"
                aria-label="See all plans"
              >
                See all plans
              </a>
            </div>
          </div>
          <div className="rightcont"></div>
        </div>
      </div>
      <div className="sixthcontainer p-4 md:p-8">
        <div className="maindiv flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="threerow flex flex-col p-4 md:p-10 gap-4 md:gap-8">
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
          </div>

          <div className="threerow flex flex-col p-4 md:p-10 gap-4 md:gap-8">
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="h-20 w-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&amp;q=70"
                sizes="196px"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
          </div>

          <div className="threerow flex flex-col p-4 md:p-10 gap-4 md:gap-8">
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {" "}
              <img
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&amp;q=70"
                loading="lazy"
                alt=""
                className="w-20 h-20"
              />
              <div className="contentdiv  items-center md:items-start">
                <p className="text-center md:text-left font-bold text-black">
                  Canva
                </p>
                <p className="text-center md:text-left text-gray-500 font-mono">
                  Create Compelling Visuals for your marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionb;
