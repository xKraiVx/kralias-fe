import { JSX } from "react";

import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import TurnResultList from "@/features/turn-result/components/TurnResultList";

export default function TurnResult(): JSX.Element {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Turn Results</UiSectionTitle>
      <TurnResultList />
    </UiSectionContainer>
  );
}
