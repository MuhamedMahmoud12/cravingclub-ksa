import iftarStyles from "../../styles/IftarCraving/iftarCraving.module.css";
import { useTranslation } from "react-i18next";
export default function SideDishesChoices() {
  const { t } = useTranslation("menu");
  const choices = t("choices", { returnObjects: true });
  return (
    <div className={iftarStyles["side-choice"]}>
      <h3>{choices[0].title}</h3>
      <p>{choices[0].description}</p>
      <h3>{choices[1].title}</h3>
      <p>{choices[1].description}</p>
      <h3>{choices[2].title}</h3>
      <p>{choices[2].description}</p>
    </div>
  );
}
