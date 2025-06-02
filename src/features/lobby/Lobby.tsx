import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import LobbyActions from "@/features/lobby/components/LobbyActions";
import LobbyStats from "@/features/lobby/components/LobbyStats";

export default function Lobby() {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Lobby</UiSectionTitle>
      <LobbyStats />
      <LobbyActions />
    </UiSectionContainer>
  );
}
