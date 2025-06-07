"use client";

import Bouncing from "@/common/components/animations/Bouncing";
import UiRangeSlider from "@/common/ui/ui-range-slider/UiRangeSlider";

import {
  DEFAULT_DURATION,
  DEFAULT_WORDS_TO_WIN,
  MAX_DURATION,
  MAX_WORDS,
  MIN_DURATION,
  MIN_WORDS,
  STEP,
} from "@/features/rules/constants/rules.constants";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { useRulesActions } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRulesActions";
import { Stack } from "@mui/material";
import { JSX } from "react";

export default function RulesList(): JSX.Element {
  const { duration, wordsToWin } = useRules();
  const { updateDuration, updateWordsToWin } = useRulesActions();
  return (
    <Stack gap={2}>
      <Bouncing>
        <UiRangeSlider
          label="Duration"
          dimension="seconds"
          min={MIN_DURATION}
          max={MAX_DURATION}
          step={STEP}
          defaultValue={DEFAULT_DURATION}
          value={duration}
          onChange={updateDuration}
        />
      </Bouncing>
      <Bouncing delay={0.1}>
        <UiRangeSlider
          label="Words to win"
          min={MIN_WORDS}
          max={MAX_WORDS}
          step={STEP}
          defaultValue={DEFAULT_WORDS_TO_WIN}
          value={wordsToWin}
          onChange={updateWordsToWin}
        />
      </Bouncing>
    </Stack>
  );
}
