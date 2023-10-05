import { SectionDivider } from "../../styles/GlobalComponents";

const Linkedin = () => (
  <section className="mx-md" id="Linkedin">
    <SectionDivider divider />
    <div className="md:flex">
      <h2>Connect with me on LinkedIn</h2>
      <div className="flex place-content-center mt-12 md:mt-0 basis-1/2">
        <div
          className="badge-base LI-profile-badge "
          data-locale="da_DK"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="andreas-broch-549296114"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://dk.linkedin.com/in/andreas-broch-549296114?trk=profile-badge"
          ></a>
        </div>
      </div>
    </div>
    <SectionDivider divider />
  </section>
);

export default Linkedin;
