// @flow

import React from 'react';
import { Link, browserHistory } from 'react-router';

type Props = {
  to: string,
  children?: any,
  className?: string,
  activeClassName?: string,
  onClick?: Function,
}

const CustomLink = ({ to, className, activeClassName, children, onClick, ...otherProps }: Props) => {
  const regex = new RegExp('^http', 'i');
  const isExternal = regex.test(to);
  const actualProps: Object = {
    className,
    to,
    onClick: (e) => {
      if (e.metaKey || e.ctrlKey) return false; // So that keyboard shortcuts work, like holding down the control key and clicking a link.
      e.preventDefault();
      if (window.swUpdate) return (window.location = to);
      return browserHistory.push(to);
    },
    ...otherProps,
  };
  if (isExternal) {
    actualProps.href = to;
  } else {
    actualProps.to = to;
    actualProps.activeClassName = activeClassName;
  }
  return React.createElement(
    isExternal ? 'a' : Link,
    actualProps,
    [children]
  );
};

export default CustomLink;
