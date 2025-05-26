import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import TeamsActions from "@/features/teams/components/TeamsActions";
import TeamsList from "@/features/teams/components/TeamsList";

export default function Teams() {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Create Teams</UiSectionTitle>
      <TeamsList />
      <TeamsActions />
    </UiSectionContainer>
  );
}
