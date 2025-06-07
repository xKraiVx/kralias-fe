"use client";

import { JSX } from "react";

import { useGetCurrentAliasStepPath } from "@/common/hooks/useGetCurrentAliasStepPath";
import UiRoundButton from "@/common/ui/ui-round-button/UiRoundButton";
import Link from "next/link";

export default function HomeStartButton(): JSX.Element {
  const pathOfNextStep = useGetCurrentAliasStepPath();

  return (
    <UiRoundButton LinkComponent={Link} href={pathOfNextStep} color="primary">
      Start
    </UiRoundButton>
  );
}
