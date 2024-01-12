import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Dynamic Sass Imports",
    Svg: require("@site/static/img/undraw_web_devices.svg").default,
    description: (
      <>
        "sass-dynamic-imports" streamlines dynamic importing of Sass files into
        your projects, enabling more flexible organization and enhanced
        modularity of your CSS code.
      </>
    ),
  },
  {
    title: "Simplified Configuration",
    Svg: require("@site/static/img/undraw_proud_coder.svg").default,
    description: (
      <>
        Quickly set up your project to use dynamic Sass imports. The library is
        designed for easy integration and usage, allowing you to focus on
        writing efficient and maintainable styles.
      </>
    ),
  },
  {
    title: "Compatible with Modern Projects",
    Svg: require("@site/static/img/undraw_building_websites.svg").default,
    description: (
      <>
        Designed to seamlessly integrate with modern project architectures,
        "sass-dynamic-imports" adapts to your development needs, whether for
        small projects or large codebases with Sass.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
