import React from 'react';
import styled from 'styled-components';
import { COLOR_GRAYSCALE } from '../../constants/color';

const Root = styled.p<{
  color: string;
  fontSize: number;
  fontWeight: number;
  ellipsis?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  inline?: boolean;
  clickable: boolean;
}>`
  color: ${(props) => props.color};
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
  ${(props) => props.ellipsis && 'text-overflow: ellipsis;'}
  ${(props) => props.ellipsis && 'overflow: hidden;'}
  ${(props) => props.ellipsis && 'white-space: nowrap;'}
  ${(props) => props.underline && 'text-decoration: underline;'}
  ${(props) => props.clickable && 'cursor: pointer;'}
  ${(props) => props.lineThrough && 'text-decoration: line-through;'}
  ${(props) => props.inline && 'display: inline;'}
`;

interface IProps {
  className?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  ellipsis?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  inline?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Typography: React.FC<IProps> = (props) => {
  const {
    color = COLOR_GRAYSCALE.gray900,
    children,
    fontSize = 14,
    fontWeight = 400,
    ellipsis,
    underline,
    lineThrough,
    inline,
    onClick,
  } = props;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onClick && onClick();
  };
  return (
    <Root
      color={color}
      fontWeight={fontWeight}
      ellipsis={ellipsis}
      fontSize={fontSize}
      underline={underline}
      lineThrough={lineThrough}
      inline={inline}
      clickable={!!onClick}
      onClick={onClick ? handleClick : undefined}
    >
      {children}
    </Root>
  );
};

export default Typography;
