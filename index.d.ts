import React, { Component } from "react";
import { TextStyle } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

interface ScrubberProps {
  panGestureRef?: React.Ref<PanGestureHandler>;
  value?: number;
  bufferedValue?: number;
  totalDuration?: number;
  onSlidingStarted?: () => void;
  onSlidingComplete: (value: number) => void;
  tapNavigation?: boolean;
  trackBackgroundColor?: string;
  trackColor?: string;
  bufferedTrackColor?: string;
  scrubbedColor?: string;
  displayedValueStyle?: TextStyle;
  displayValues?: boolean;
}

declare class Scrubber extends Component<ScrubberProps, any> {}

export = Scrubber;
