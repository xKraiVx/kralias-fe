import { JSX } from "react";

import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import RulesActions from "@/features/rules/components/RulesActions";
import RulesList from "@/features/rules/components/RulesList";

export default function Rules(): JSX.Element {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Define rules</UiSectionTitle>
      <RulesList />
      <RulesActions />
    </UiSectionContainer>
  );
}
