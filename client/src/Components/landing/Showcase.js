import React from "react";
import { Container } from "react-bootstrap";

import ChartDemo from "../../assets/orgchart-demo.png";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <section className="showcase text-center">
      <Container>
        <h2>See Org Chart in action</h2>
        <img src={ChartDemo} alt="Chart Demo" />
        <p className="greyed-out mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          accusamus, fuga officiis in at a quo voluptas modi optio facere iusto
          distinctio dolorem, beatae alias?
        </p>
      </Container>
    </section>
  );
};

export default Showcase;
