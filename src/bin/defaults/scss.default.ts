export const getDefaultSCSS = () => `@use "sass:color";

html, body {
    height: 100vh;
    width: 100vw;    
    margin: 0;
    padding: 0;
}


// Variáveis
$border-color: #ccc;
$focus-color: #4a90e2;
$input-bg: #fff;
$text-color: #333;
$placeholder-color: #999;
$transition-time: 0.3s;

input {
    border: 1px solid $border-color;
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
    color: $text-color;
    background-color: $input-bg;
    transition: all $transition-time ease-in-out;
    outline: none;
    box-sizing: border-box;
    
    &::placeholder {
        color: $placeholder-color;
        opacity: 0.8;
    }
    
    &:hover {
        border-color: color.adjust($border-color, $lightness: -10%);
    }
    
    &:focus {
        border-color: $focus-color;
        box-shadow: 0 0 0 3px rgba($focus-color, 0.2);
    }
    
    &:disabled {
        background-color: color.adjust($input-bg, $lightness: -5%);
        cursor: not-allowed;
        opacity: 0.7;
    }
}

// Variáveis
$button-bg: #4a90e2;
$button-bg-hover: color.adjust($button-bg, $lightness: -10%);
$button-bg-disabled: color.adjust($button-bg, $lightness: 20%);
$button-text-color: #fff;
$button-border-color: transparent;
$button-border-radius: 6px;

// Estilo dos botões
button {
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: $button-text-color;
  background-color: $button-bg;
  border: 1px solid $button-border-color;
  border-radius: $button-border-radius;
  cursor: pointer;
  transition: all $transition-time ease-in-out;
  outline: none;
  box-sizing: border-box;

  &:hover {
    background-color: $button-bg-hover;
  }

  &:focus {
    background-color: $button-bg-hover;
    box-shadow: 0 0 0 3px rgba($button-bg, 0.2);
  }

  &:disabled {
    background-color: $button-bg-disabled;
    border-color: $button-bg-disabled;
    cursor: not-allowed;
    opacity: 0.7;
  }
}`