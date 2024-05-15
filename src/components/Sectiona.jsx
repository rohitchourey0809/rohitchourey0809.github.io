import React from "react";

const Sectiona = () => {
  return (
    <div
      className="p23TextHero module fs-unmask"
      id="593fQsZNqG6Q2tLhwfRfGn"
      data-module-id="p23TextHero"
      data-entry-id="593fQsZNqG6Q2tLhwfRfGn"
      data-context-text="Turn Emails into Revenue"
    >
      <div className="flex flex-col justify-center">
        <center className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Turn Emails into Revenue
        </center>
        <center className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 lg:mt-10">
          Win new customers with the #1 email marketing and automations
          platform* that recommends ways to get more opens, clicks, and sales.
        </center>
        <div className="flex items-center justify-center mt-10 md:mt-12 lg:mt-16">
          <div className="mx-4">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              href="/pricing/marketing/"
              aria-label="Sign Up"
              onclick="window.tr.clickEvent(this, 'e_click')"
              onauxclick="if(event.button === 1){window.tr.clickEvent(this, 'e_click')}"
              data-onclickmeta='{"category":"hero","action":"click","label":"button:sign up:turn emails into revenue"}'
              data-event-handler="manual"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiona;
