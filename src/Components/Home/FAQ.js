import React from "react";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="columner">
        <h2 className="">FREQUENTLY</h2>
        <h2 className="h">ASKED</h2>
        <h2 className="">QUESTIONS</h2>
      </div>

      <div id="faq">
        <ul>
          <li>
            <input type="checkbox" readOnly defaultChecked />
            <i></i>
            <h2>Is Rilli a free software?</h2>
            <p>
              No, Rilli is not freely accessible. It is accessible only to users
              affiliated with universities or educational institutions that have
              a partnership or tie-up with us, similar to other learning
              management systems.
            </p>
          </li>
          <li>
            <input type="checkbox" readOnly defaultChecked />
            <i></i>
            <h2>Who are the target audience for Rilli?</h2>
            <p>
              The primary target audience for Rilli is universities and
              educational institutions. It is designed to meet the scheduling
              and organization needs specific to academic environments.
            </p>
          </li>
          <li>
            <input type="checkbox" readOnly defaultChecked />
            <i></i>
            <h2>Who can access Rilli?</h2>
            <p>
              Rilli is accessible to authorized users affiliated with
              universities or educational institutions that have a partnership
              with us. This typically includes faculty, staff, and students who
              are granted access through their institution's tie-up with Rilli.
            </p>
          </li>
          <li>
            <input type="checkbox" readOnly defaultChecked />
            <i></i>
            <h2>
              Can I customize Rilli to fit my organization's specific needs?
            </h2>
            <p>
              Yes, Rilli is highly customizable. You can tailor it to fit your
              organization's unique scheduling requirements, including different
              user roles, scheduling rules, and resource allocations. Our
              flexible configuration options allow you to adapt Rilli to suit
              your workflow seamlessly.
            </p>
          </li>
          <li>
            <input type="checkbox" readOnly defaultChecked />
            <i></i>
            <h2>
              What happens if I encounter technical issues while using Rilli?
            </h2>
            <p>
              If you encounter any technical issues while using Rilli, our
              support team is here to assist you. You can reach out to us
              through our support channels, and we'll work diligently to resolve
              any issues and ensure that you can continue using Rilli smoothly.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
