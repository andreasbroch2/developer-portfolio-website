import React from "react";
import { SectionDivider } from "../../styles/GlobalComponents";
const Footer = () => {
  return (
    <footer>
      <section className="mx-md" id="footer">
        <h2>Contact</h2>
        <ul>
          <div className="flex flex-col my-8">
            <h4>
              Email: <a href="mailto:andreas@businessbuddy.dk"> info@andreasbroch.dk</a>
            </h4>
          </div>
        </ul>
        <SectionDivider divider />
      </section>
    </footer>
  );
};

export default Footer;
