import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Button } from "../button";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Passo a passo",
    Svg: require("@site/static/img/svg/tutorial.svg").default,
    description: (
      <div className="flex flex-col items-center gap-2">
        Acesse e veja como é fácil gerenciar seus clientes através do G Client.
        <Button link="/docs/intro" text="acessar" />
      </div>
    ),
  },
  {
    title: "Queremos te ouvir",
    Svg: require("@site/static/img/svg/megafone.svg").default,
    description: (
      <div className="flex flex-col items-center gap-2">
        Sugira novos recursos e vote nas solicitações que te agradam.
        <Button link="https://g-client.canny.io/" text="acessar" />
      </div>
    ),
  },
  {
    title: "Veja as novidades",
    Svg: require("@site/static/img/svg/versao.svg").default,
    description: (
      <div className="flex flex-col items-center gap-2">
        Acompanhe tudo que há de mais novo no G Client. Temos atualizações
        constantes que irão de surpreender.
        <Button link="https://versions.gclient.com.br" text="acessar" />
      </div>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
