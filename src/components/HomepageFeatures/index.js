import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Imports Sass Dynamiques",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        "sass-dynamic-imports" facilite l'importation dynamique de fichiers Sass
        dans vos projets, permettant une organisation plus flexible et une
        meilleure modularité de votre code CSS.
      </>
    ),
  },
  {
    title: "Configuration Simplifiée",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Configurez rapidement votre projet pour utiliser des imports Sass
        dynamiques. La bibliothèque est conçue pour être facilement intégrée et
        utilisée, vous permettant de vous concentrer sur l'écriture de styles
        efficaces et maintenables.
      </>
    ),
  },
  {
    title: "Compatible avec les Projets Modernes",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Conçue pour s'intégrer parfaitement avec les architectures de projets
        modernes, "sass-dynamic-imports" s'adapte à vos besoins de
        développement, qu'il s'agisse de petits projets ou de grandes bases de
        code avec Sass.
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
