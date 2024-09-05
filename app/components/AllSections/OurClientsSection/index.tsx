import styles from "./OurClientsSection.module.css";
import { OurClientComponent } from "./OurClientComponent";
import TopShapeIcon from "../../../assets/orangeCowIcon1.svg";
import BottomShapeIcon from "../../../assets/orangeCowIcon2.svg";
import { ourJorClients, ourUaeClients } from "@/app/constants/ourClients";
import { LoadingSinner } from "../../LoadingSinner";

export const OurClientsSection = () => {

  return (
    <div
      className={styles.ourClientsSectionWrapper}
    >
      <TopShapeIcon className={styles.topIcon}/>
      {!!!ourJorClients? (
        <LoadingSinner isWhite/>
      ) : (
        <OurClientComponent
          brandsImgs={ourJorClients}
          title={"OUR CLIENTS IN JORDAN"}
        />
      )}
      {!!!ourUaeClients ? (
        <LoadingSinner isWhite/>
      ) : (
        <OurClientComponent
        brandsImgs={ourUaeClients}
        title={"OUR CLIENTS IN UAE"}
      />
      )}
      <BottomShapeIcon className={styles.bottomIcon} />
    </div>
  );
};
