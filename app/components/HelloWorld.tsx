import PageHead from "./PageHead";
import Section from "./Section";

const HelloWorld = () => {
  return (
    <article>
      <PageHead title="Hi everyone" />
      <Section>
        <div>
          <p>Houseplants is finally back!</p>
          <p>
            There is still a lot to do, but feel free to browse around while I
            twick things and finish (manually) adding all the plants to genera
            pages! (this might take a while){" "}
          </p>
        </div>
      </Section>
    </article>
  );
};

export default HelloWorld;
