/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

interface Props {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  iconStyle: TextStyle;
  text: string;
  icon: string;
  primary: boolean;
  secondary: boolean;
  success: boolean;
  danger: boolean;
  warning: boolean;
  info: boolean;
  light: boolean;
  dark: boolean;
  grayedOut: boolean;
  outline: boolean;
  small: boolean;
  large: boolean;
  rounded: boolean;
  block: boolean;
  full: boolean;
  disabled: boolean;
}

export default class Button extends Component<any, Props> {
  static defaultProps = {
    buttonStyle: {},
    textStyle: {},
    iconStyle: {},
    default: true,
    outline: false,
    small: false,
    large: false,
    primary: false,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    info: false,
    light: false,
    dark: false,
    grayedOut: false,
    rounded: false,
    block: false,
    full: false,
    text: ""
  };

  color = {
    primary: { bg: "#007bff", border: "#007bff", textColor: "#fff" },
    secondary: { bg: "#6c757d", border: "#6c757d", textColor: "#fff" },
    success: { bg: "#28a745", border: "#28a745", textColor: "#fff" },
    danger: { bg: "#dc3545", border: "#dc3545", textColor: "#fff" },
    warning: { bg: "#ffc107", border: "#ffc107", textColor: "#fff" },
    info: { bg: "#17a2b8", border: "#17a2b8", textColor: "#fff" },
    light: { bg: "#f8f9fa", border: "#f8f9fa", textColor: "#212529" },
    dark: { bg: "#343a40", border: "#343a40", textColor: "#fff" },
    gray: { bg: "#A6A6A6", border: "#A6A6A6", textColor: "#fff" },
    default: { bg: "transparent", border: "#000", textColor: "#000" }
  };

  setColor = () => {
    const {
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      grayedOut,
      dark
    } = this.props;

    if (grayedOut) {
      return "gray";
    } else if (primary) {
      return "primary";
    } else if (secondary) {
      return "secondary";
    } else if (success) {
      return "success";
    } else if (danger) {
      return "danger";
    } else if (warning) {
      return "warning";
    } else if (info) {
      return "info";
    } else if (light) {
      return "light";
    } else if (dark) {
      return "dark";
    } else {
      return "default";
    }
  };

  setSize() {
    const { large, small } = this.props;
    let text, button;

    if (small) {
      text = styles.smallText;
      button = styles.smallBtn;
    } else if (large) {
      text = styles.largeText;
      button = styles.largeBtn;
    }

    return { text, button };
  }

  setForm() {
    const { block, full } = this.props;
    if (block) {
      return styles.block;
    } else if (full) {
      return styles.fullButton;
    }
  }

  render() {
    const {
      buttonStyle,
      textStyle,
      iconStyle,
      text,
      icon,
      light,
      outline,
      rounded,
      full,
      grayedOut,
      disabled
    } = this.props;

    const color = this.setColor();
    const size = this.setSize();
    const form = this.setForm();
    const textStyles = [
      styles.text,
      {
        color:
          outline && !light ? this.color[color].bg : this.color[color].textColor
      },
      size.text,
      full && styles.fullText
    ];

    return (
      <TouchableOpacity
        {...this.props}
        style={[
          styles.button,
          {
            backgroundColor:
              outline && !light
                ? this.color[color].textColor
                : this.color[color].bg,
            borderColor: this.color[color].border
          },
          size.button,
          rounded && styles.rounded,
          form,
          (disabled || grayedOut) && styles.disabled,
          buttonStyle
        ]}
      >
        {icon ? (
          <Icon name={icon} style={[textStyles, styles.icon, iconStyle]} />
        ) : null}
        <Text style={[textStyles, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
